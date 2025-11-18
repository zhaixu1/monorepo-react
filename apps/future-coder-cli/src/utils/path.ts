import path from 'path'
import pc from 'picocolors'
/**
 * 获取模板目录的绝对路径
 * 在构建后，dist 目录结构：dist/utils/path.js
 * 需要向上两级到项目根目录，然后进入 templates
 */
export function getTemplatesDir(): string {
  // 使用一个简单的方法：通过 require.main 或 process.argv 找到入口文件
  // 然后从入口文件位置推导模板目录
  
  // 方法1: 尝试从 bin/future.js 的位置推导（如果作为 CLI 运行）
  try {
    // @ts-ignore - 在 CommonJS 环境中，__dirname 是可用的
    if (typeof __dirname !== 'undefined') {
      // 从 dist/utils/path.js -> dist -> 项目根目录 -> templates
      // @ts-ignore
      console.log(pc.bgYellow('__dirname: ') + __dirname)
      return path.resolve(__dirname, '../templates')
    }
  } catch {
    // 忽略
  }
  
  // 方法2: 从当前工作目录查找（开发环境）
  // 如果当前目录是 future-coder-cli，直接返回 templates
  const cwd = process.cwd()
  const possibleTemplatesDir = path.resolve(cwd, 'templates')
  
  return possibleTemplatesDir
}

/**
 * 获取项目根目录
 */
export function getProjectRoot(): string {
  return process.cwd()
}

/**
 * 解析目标路径
 */
export function resolveTargetPath(targetPath: string): string {
  if (path.isAbsolute(targetPath)) {
    return targetPath
  }
  return path.resolve(getProjectRoot(), targetPath)
}

/**
 * 检查路径是否存在
 */
export async function pathExists(filePath: string): Promise<boolean> {
  try {
    const fs = await import('fs-extra')
    return await fs.pathExists(filePath)
  } catch {
    return false
  }
}

