# tsconfig

## tsconfig.json 相关配置

```json
{
  "compilerOptions": {
    "moduleResolution": "Node", // 核心配置
    "module": "ESNext", // 编译为 ES 模块（配合打包工具输出 ESM）
    "target": "ES2018", // 兼容主流浏览器
    "jsx": "preserve", // 若为 React/Vue 组件，保留 JSX 交由构建工具处理
    "declaration": true, // 生成 .d.ts 类型声明（组件库必备）
    "declarationDir": "./types", // 类型声明输出目录
    "outDir": "./dist", // 编译产物输出目录
    "baseUrl": ".", // 基础路径
    "paths": { // 路径别名（组件库常用）
      "@/*": ["src/*"]
    },
    "strict": true,
    "esModuleInterop": true, // 兼容 CommonJS/ES 模块
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/__tests__/*"]
}
```

1. noImplicitAny: true, 
   - 在ts项目中如果检查不出类型那么设置any是否进行报错。
   - true是报错，更严格；false是不报错，更宽松
2. module: "ESNext", 
   - 换句话说，它决定了你的 TS 代码中的 import 和 export 语句最终会被编译成什么样子的 JS 代码。编译成 esm更有利于tree shaking。
3. removeComments: true
   - 是否移除代码中的注释
4. preserveConstEnums:false.
   - preserveConstEnums 是 tsconfig.json 中的一个编译选项，用来控制 const enum（常量枚举） 的编译行为。
   - false (默认)：编译时会把 const enum 的使用处直接替换为数值，不会生成任何枚举对象的定义代码。这能让代码体积更小、性能更好。
   - true：编译时依然会把使用处替换为数值，但同时会保留枚举对象的定义代码（生成一个对应的 JS 对象）。
5.  
