// 入口文件
import { program } from 'commander'
import './commands'

// 运行命令行
export const runCLI = () => {
    program.parse(process.argv)
}

