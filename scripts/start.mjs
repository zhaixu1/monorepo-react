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
  if (pkgJson.scripts && pkgJson.scripts[scriptName]) {
    spawn('npm', ['run', scriptName, ...args], {
      stdio: 'inherit',
      cwd: pkgLocation,
    })
  }
}

for (let i = 0; i < targetDirs.length; i++) {
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
