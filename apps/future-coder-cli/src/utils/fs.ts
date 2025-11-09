import fs from 'fs-extra'
import path from 'path'

/**
 * 复制目录
 */
export async function copyDir(src: string, dest: string): Promise<void> {
  await fs.ensureDir(dest)
  await fs.copy(src, dest, {
    overwrite: true,
    filter: (srcPath) => {
      // 忽略 node_modules 和 .git 目录
      const relativePath = path.relative(src, srcPath)
      if (relativePath.includes('node_modules') || relativePath.includes('.git')) {
        return false
      }
      return true
    },
  })
}

/**
 * 读取文件内容
 */
export async function readFile(filePath: string): Promise<string> {
  return await fs.readFile(filePath, 'utf-8')
}

/**
 * 写入文件内容
 */
export async function writeFile(filePath: string, content: string): Promise<void> {
  await fs.ensureDir(path.dirname(filePath))
  await fs.writeFile(filePath, content, 'utf-8')
}

/**
 * 检查目录是否为空
 */
export async function isEmptyDir(dirPath: string): Promise<boolean> {
  if (!(await fs.pathExists(dirPath))) {
    return true
  }
  const files = await fs.readdir(dirPath)
  return files.length === 0
}

/**
 * 确保目录存在
 */
export async function ensureDir(dirPath: string): Promise<void> {
  await fs.ensureDir(dirPath)
}

/**
 * 删除目录或文件
 */
export async function remove(targetPath: string): Promise<void> {
  await fs.remove(targetPath)
}

