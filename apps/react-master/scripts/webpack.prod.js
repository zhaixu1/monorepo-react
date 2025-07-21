const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base(false), {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true, // 多进程打包
        terserOptions: { // 压缩配置
          compress: {
            drop_console: true, // 删除console
            drop_debugger: true, // 删除debugger
          },
        },
      }),
    ],
    splitChunks: { // 分割代码块
      chunks: 'all', // 重点关注 chunks
      cacheGroups: {
        react: {
          name: 'react', // chunk 名称
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, // 需要打包的模块
          priority: 10, // 优先级，数字越大优先级越高
        },
        vendors: { // 分割第三方模块
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
        },
        default: { // 默认的配置
          minSize: 0, // 最小大小
          minChunks: 2, // 最小引用次数
        },
      }
    }
  },
});