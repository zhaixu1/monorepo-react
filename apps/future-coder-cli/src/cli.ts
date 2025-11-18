// 入口文件
import { program } from 'commander'
import './commands'
import pc from 'picocolors'

// 运行命令行
export const runCLI = () => {
    console.log(pc.green('启动 future-coder-cli' + process.argv));
    program.parse(process.argv)
}

