import { Command } from 'commander'
import { program } from 'commander'

type Fn = (program: Command) => Command

export const registerCommand = (fn: Fn) => {
    const command = fn(program)
    program.addCommand(command)
    return command
}