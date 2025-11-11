import { Command, program } from 'commander'

type Fn = (program: Command) => Command

/**
 * 注册命令
 * @param fn 注册命令的函数
 * @returns 注册的命令
 */
export const registerCommand = (fn: Fn) => {
    // fn(program) 已经通过 program.command() 自动将命令添加到 program 中
    // 所以不需要再次调用 addCommand
    const command = fn(program)
    return command
}