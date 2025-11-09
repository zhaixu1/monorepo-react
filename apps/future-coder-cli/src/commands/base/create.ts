import { Command } from 'commander'
import path from 'path'
import pc from 'picocolors'
import prompts from 'prompts'
import ora from 'ora'
import { getTemplatesDir, resolveTargetPath, pathExists } from '../../utils/path'
import { copyDir, ensureDir, isEmptyDir } from '../../utils/fs'
import { templateExists, getAvailableTemplates, processTemplateDir } from '../../utils/template'
import { TEMPLATES } from '../../constants'

export const create = (program: Command) => {
  return program
    .command('create <project-name>')
    .description('创建一个新项目')
    .option('-t, --template <template>', '指定模板名称')
    .option('-f, --force', '强制覆盖已存在的目录')
    .action(async (projectName: string, options: { template?: string; force?: boolean }) => {
      try {
        // 1. 验证项目名称
        if (!projectName) {
          console.error(pc.red('错误: 请提供项目名称'))
          process.exit(1)
        }

        // 2. 解析目标路径
        const targetPath = resolveTargetPath(projectName)
        const targetDirName = path.basename(targetPath)

        // 3. 检查目录是否已存在
        const exists = await pathExists(targetPath)
        if (exists && !options.force) {
          const isEmpty = await isEmptyDir(targetPath)
          if (!isEmpty) {
            const { overwrite } = await prompts({
              type: 'confirm',
              name: 'overwrite',
              message: `目录 ${pc.yellow(targetPath)} 已存在且不为空，是否覆盖？`,
              initial: false,
            })

            if (!overwrite) {
              console.log(pc.yellow('操作已取消'))
              process.exit(0)
            }
          }
        }

        // 4. 获取可用模板
        const availableTemplates = await getAvailableTemplates()
        if (availableTemplates.length === 0) {
          console.error(pc.red('错误: 没有找到可用的模板'))
          console.log(pc.yellow('提示: 请在 templates 目录中创建模板'))
          process.exit(1)
        }

        // 5. 选择模板
        let templateName: string = options.template || ''
        if (!templateName) {
          // 显示模板选择菜单
          const templateChoices = availableTemplates.map((name) => {
            const description = TEMPLATES[name as keyof typeof TEMPLATES] || name
            return {
              title: `${pc.cyan(name)} - ${description}`,
              value: name,
            }
          })

          const { selectedTemplate } = await prompts({
            type: 'select',
            name: 'selectedTemplate',
            message: '请选择模板',
            choices: templateChoices,
          })

          if (!selectedTemplate) {
            console.log(pc.yellow('操作已取消'))
            process.exit(0)
          }

          templateName = selectedTemplate
        }

        // 6. 验证模板是否存在
        if (!templateName || !(await templateExists(templateName))) {
          console.error(pc.red(`错误: 模板 ${templateName || '(未指定)'} 不存在`))
          console.log(pc.yellow(`可用模板: ${availableTemplates.join(', ')}`))
          process.exit(1)
        }

        // 7. 收集项目信息
        const { description, author } = await prompts([
          {
            type: 'text',
            name: 'description',
            message: '项目描述',
            initial: `A ${templateName} project`,
          },
          {
            type: 'text',
            name: 'author',
            message: '作者',
            initial: '',
          },
        ])

        // 8. 创建项目
        const spinner = ora('正在创建项目...').start()

        try {
          // 确保目标目录存在
          await ensureDir(targetPath)

          // 获取模板路径
          const templatesDir = getTemplatesDir()
          const templatePath = path.resolve(templatesDir, templateName!)

          // 准备模板变量
          const templateVars = {
            projectName: targetDirName,
            description: description || '',
            author: author || '',
            version: '1.0.0',
          }

          // 处理模板（复制并替换变量）
          await processTemplateDir(templatePath, targetPath, templateVars)

          spinner.succeed(pc.green('项目创建成功！'))
        } catch (error) {
          spinner.fail(pc.red('项目创建失败'))
          console.error(error)
          process.exit(1)
        }

        // 9. 显示下一步提示
        console.log('\n' + pc.green('下一步:'))
        console.log(pc.blue(`  cd ${targetDirName}`))
        console.log(pc.blue('  pnpm install'))
        console.log(pc.blue('  pnpm dev'))
      } catch (error: any) {
        if (error.message === 'User force closed the prompt') {
          console.log(pc.yellow('\n操作已取消'))
          process.exit(0)
        }
        console.error(pc.red('发生错误:'), error.message)
        process.exit(1)
      }
    })
}

