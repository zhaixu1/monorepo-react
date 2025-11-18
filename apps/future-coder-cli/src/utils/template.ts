import fs from 'fs-extra'
import path from 'path'
import { getTemplatesDir } from './path'
import pc from 'picocolors'

/**
 * 获取模板路径
 */
export function getTemplatePath(templateName: string): string {
  return path.resolve(getTemplatesDir(), templateName)
}

/**
 * 检查模板是否存在
 */
export async function templateExists(templateName: string): Promise<boolean> {
  const templatePath = getTemplatePath(templateName)
  return await fs.pathExists(templatePath)
}

/**
 * 获取所有可用的模板
 */
export async function getAvailableTemplates(): Promise<string[]> {
  const templatesDir = getTemplatesDir()
  console.log(pc.bgYellow('获取到的路径是: ') + templatesDir)
  if (!(await fs.pathExists(templatesDir))) {
    return []
  }
  const entries = await fs.readdir(templatesDir, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

/**
 * 替换模板变量
 */
export function replaceTemplateVars(content: string, vars: Record<string, string>): string {
  let result = content
  for (const [key, value] of Object.entries(vars)) {
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g')
    result = result.replace(regex, value)
  }
  return result
}

/**
 * 处理模板文件（替换变量）
 */
export async function processTemplateFile(
  filePath: string,
  vars: Record<string, string>
): Promise<string> {
  const content = await fs.readFile(filePath, 'utf-8')
  return replaceTemplateVars(content, vars)
}

/**
 * 递归处理目录中的模板文件
 */
export async function processTemplateDir(
  srcDir: string,
  destDir: string,
  vars: Record<string, string>
): Promise<void> {
  await fs.ensureDir(destDir)
  const entries = await fs.readdir(srcDir, { withFileTypes: true })

  // 需要保留的隐藏文件
  const keepHiddenFiles = ['.gitignore', '.eslintrc', '.prettierrc', '.editorconfig', '.npmrc']

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name)
    let destPath = path.join(destDir, replaceTemplateVars(entry.name, vars))

    // 忽略某些文件（但保留重要的配置文件）
    if (entry.name.startsWith('.')) {
      // 如果是目录且以点开头（如 .git, .vscode），跳过
      if (entry.isDirectory()) {
        continue
      }
      // 如果是文件且不在保留列表中，跳过
      if (entry.isFile() && !keepHiddenFiles.includes(entry.name)) {
        continue
      }
    }

    if (entry.isDirectory()) {
      await processTemplateDir(srcPath, destPath, vars)
    } else if (entry.isFile()) {
      const content = await processTemplateFile(srcPath, vars)
      await fs.writeFile(destPath, content, 'utf-8')
    }
  }
}

