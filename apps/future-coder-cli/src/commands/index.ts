import { program } from 'commander'

import { info } from './base/info'
import { create } from './base/create'

import { registerCommand } from './registerCommand'

registerCommand(info)
registerCommand(create)