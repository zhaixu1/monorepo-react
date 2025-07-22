// dumi 配置文件
import { menu } from "./hooks";
import { componentMenu } from "./components";

const packages = require('../packages/hooks/package.json'); // 获取 package.json

export default {
  publicPath: '/monorepo-react',  // 配置打包后的静态文件路径，也就是github仓库地址。网站路径上会加上你的仓库名
  base: "/monorepo-react", 
  exportStatic: {}, // 配置 html 的输出形式，默认只输出 index.html。
  nodeModulesTransform: {
    type: "none", //all 前者速度较慢，但可规避常见的兼容性等问题，后者反之。
    exclude: [],
  },
  history: { type: "hash" },
  // 配置额外的 babel 插件。
  extraBabelPlugins: [
    [
      "babel-plugin-import", // 按需引入相关包
      {
        libraryName: "@alifd/next",
        style: false, // 是否自动引入样式
      },
      "fusion",
    ],
  ],
  mode: "site", // 模式
  title: "Monorepo-React",
  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
  dynamicImport: false,
  // mainfest: {},
  hash: true,
  alias: {
    "@hooks": process.cwd() + "/packages/hooks/src/index.ts", // 引用hooks相关内容，所以设置 @hooks别名
  },
  resolve: {
    // 在站点中需要引入的内容
    includes: ["docs", "packages/hooks/src", "packages/components/src"],
  },
  links: [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css",
    },
    { rel: "stylesheet", href: "/style.css" },
  ],
  navs: [
    {
      title: "指南",
      path: "/guide",
    },
    {
      title: "Hooks",
      path: "/hooks",
    },
    {
      title: "组件",
      path: "/components",
    },
  ],
  menus: {
    "/": [
      {
        titie: "首页",
        path: "index",
      },
    ],
    "/guide": [
      {
        title: "指南",
        path: "guide",
      },
    ],
    "/hooks": menu,
    "/components": componentMenu,
  },
};
