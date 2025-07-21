// 拿到目录内容
import { workspace } from './workspace.mjs'
import { readFileSync } from 'fs'
import { spawnSync, spawn } from 'child_process'
import k from 'kleur'
import process from 'process'

const { targetDirs } = workspace;

// 获取待构建任务
const getBuildTask = () => {
    const totalBuildTasks = targetDirs;
    console.log(process.argv.map( arg => arg.toLowerCase()), 'process.argv');
    
    let _task = totalBuildTasks.filter( arg => {
        return process.argv.map( arg => arg.toLowerCase()).includes(arg.name.toLowerCase())
    })
    console.log(_task, 'task');
    
    return _task
}

// 
const runScript = (scriptName, pkgLocation, args = '') => {
    const pkgJson = JSON.parse(readFileSync(`${pkgLocation}/package.json`, 'utf-8'))
    console.log(pkgJson, 'pkgJson');
  if (pkgJson.scripts && pkgJson.scripts[scriptName]) {
    spawn('pnpm', ['run', scriptName, ...args], {
      stdio: 'inherit',
      cwd: pkgLocation,
      shell: true,
    })
  }
    
}

;(() => {
  const buildTasks = getBuildTask()
  if (buildTasks.length === 0) {
    console.log(
      k.bold().red('构建失败，构建任务为空！请尝试执行：') +
        k.green('npm run build:dev')
    )
    return
  }

  buildTasks.forEach((taskInfo) => {
    console.log(k.blue(`[${taskInfo.name}] ${k.green('正在构建中...')}`))
    if (taskInfo.name === 'playground') {
      runScript('buildWeb', taskInfo.location)
    } else {
      runScript('build', taskInfo.location)
    }
  })
})()