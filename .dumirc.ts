import { defineConfig } from 'dumi';

export default defineConfig({
  // base 和 publicPath 一般推荐配置为 /
  // 如果部署在非根目录，需要配置为 /xxx/
  base: '/',
  publicPath: '/',
//   logo: '/docs/assets/images.png',
  // history: { type: 'hash' }, // 如果需要 hash 路由，可以放开
  // alias: {
  //   '@hooks': process.cwd() + '/packages/hooks/src/index.ts',
  // },
  resolve: {
    // 解析目录
    atomDirs: [
      { type: 'hook', dir: 'packages/hooks/src' },
      { type: 'component', dir: 'packages/components/src' },
    ],
  },

  // dumi 2 默认开启 hash
  // hash: true,
  themeConfig: {
    name: 'zx-react',
    // headScripts: [
    //   // 解决 antd-mobile 在 head 中插入js,导致 dva 报错的问题
    //   // https://github.com/umijs/dumi/issues/1223
    //   `
    //     (function () {
    //       var antd_mobile_script = document.createElement('script');
    //       antd_mobile_script.src = 'https://unpkg.com/antd-mobile@5.35.0/umd/antd-mobile.js';
    //       document.head.appendChild(antd_mobile_script);

    //       var antd_mobile_style = document.createElement('link');
    //       antd_mobile_style.rel = 'stylesheet';
    //       antd_mobile_style.href = 'https://unpkg.com/antd-mobile@5.35.0/umd/antd-mobile.css';
    //       document.head.appendChild(antd_mobile_style);
    //     }())
    //   `,
    // ],
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: 'Hooks',
        link: '/hooks',
      },
      {
        title: '组件',
        link: '/components',
      },
    ],
    //   sidebar: {
    //     '/guide': [
    //       {
    //         title: '介绍',
    //         children: [
    //           {
    //             title: '介绍',
    //             link: '/guide',
    //           },
    //         ],
    //       },
    //     ],
    //     '/hooks': [
    //       {
    //         title: 'UseRequest',
    //         children: [
    //           {
    //             title: 'useRequest',
    //             link: '/hooks/use-request',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // footer: 'Open-source MIT Licensed | Copyright © 2024-present',
    //   prefersColor: {
    //     default: 'light',
    //     switch: true,
    //   },
    //   socialLinks: {
    //     github: 'https://github.com/your-repo',
    //   },
  },
  // styles: [
  //   `
  //   .dumi-default-logo-type {
  //     font-size: 22px !important;
  //   }
  //   `,
  //   `
  //   html .dumi-default-mobile-demo-layout{
  //     padding: 0;
  //   }
  // `,
  //   `
  //   .dumi-default-sidebar > dl > dt:first-child{
  //     display: none;
  //   }
  // `,
  // ],
}); 