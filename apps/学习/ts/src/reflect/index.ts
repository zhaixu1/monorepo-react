// reflect-metadata
import 'reflect-metadata'

var target = { name: 'test'}

Reflect.defineMetaData('version', 1, target)

Relect.defineMetaData("info", {prop: 1}, target)

Reflect.hasMetaData("version", target)

Reflect.hasMetaDatKeys("version", target)