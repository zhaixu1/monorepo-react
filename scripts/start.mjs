// 启动项目
import { workspace } from './workspace.mjs'
import { spawn } from 'child_process'
import { readFileSync } from 'fs'
import k from 'kleur'

const { targetDirs } = workspace

let flag = false

const runScript = (scriptName, pkgLocation, args = '') => {
  const pkgJson = JSON.parse(
    readFileSync(`${pkgLocation}/package.json`, 'utf-8')
  )
  console.log(pkgJson, 'pkgJson');
  if (pkgJson.scripts && pkgJson.scripts[scriptName]) {
    // 使用 pnpm 而不是 npm，因为项目配置了 pnpm
    spawn('pnpm', ['run', scriptName, ...args], {
      stdio: 'inherit',
      cwd: pkgLocation,
      shell: true, // 添加 shell: true 来确保在 shell 环境中执行
      env: { ...process.env } // 确保环境变量被传递
    })
  }
}

for (let i = 0; i < targetDirs.length; i++) {
    console.log(targetDirs[i], i);
    console.log(process.argv, 'process.argv' + i);
  if (
    process.argv.some(
      (arg) => arg.toLowerCase() === targetDirs[i].name.toLowerCase()
    )
  ) {
    flag = true

    console.log(k.blue(`[${targetDirs[i].name}]${k.green('正在启动中')}`))

    runScript('start', targetDirs[i].location)
  }
}
