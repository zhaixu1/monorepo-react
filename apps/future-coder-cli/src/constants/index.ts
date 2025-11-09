// 支持的模板列表
export const TEMPLATES = {
  'react-vite': 'React + Vite 项目模板',
  'vue-vite': 'Vue + Vite 项目模板',
  'node-ts': 'Node.js + TypeScript 项目模板',
} as const

export type TemplateName = keyof typeof TEMPLATES

