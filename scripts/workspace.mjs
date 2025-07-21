import { readdirSync, statSync } from 'fs'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const packagesDir = path.resolve(__dirname, '../packages')

const publishPackages = fs.readdirSync(packagesDir)

const packageDirs = publishPackages.map((p) => path.resolve(packagesDir, p))

const dirName = path.resolve(__dirname, '../')

const appsDir = path.resolve(dirName, 'apps')
const appFolders = readdirSync(appsDir).filter((file) => {
  return statSync(path.join(appsDir, file)).isDirectory()
})

const appsDirs = appFolders.map((name) => {
  return {
    location: `${appsDir}/${name}`,
    name,
  }
})

const pkgDirs = publishPackages.map((name, index) => {
  return {
    location: packageDirs[index],
    name,
  }
})

export const workspace = {
  targetDirs: [...appsDirs, ...pkgDirs],
}
