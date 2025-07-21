const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin") ;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function (isDev) {
  return {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "static/js[name].[chunkhash:8].js", // chunkhash 每次打包的hash值不一样，浏览器缓存
      clean: true, // 打包时清空dist目录
      publicPath: "/", // 打包后资源的公共路径
    },
    resolve: {
      //
      extensions: [".tsx", ".ts", ".js", ".jsx", "json"], // 告诉webpack，哪些文件后缀可以省略
      alias: {
        // 别名
        "@": path.resolve(__dirname, "../src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: [
            {
              loader: "babel-loader",
            },
          ],
        },
        {
          oneOf: [ // 用于指定一组互斥的规则匹配条件， 目的是匹配了文件就不会向后进行匹配，节省了时间。
            {
              test: /\.module\.(less|css)$/,
              include: [path.resolve(__dirname, "../src")],
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 抽离css
                {
                  loader: "css-loader", // 对文件进行命名
                  options: {
                    modules: true,
                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                  },
                },
                "postcss-loader", // 自动添加前缀，css模块化支持，使用现代css特性，压缩与优化css
                "less-loader", // less转css
              ],
            },
            {
              test: /.css$/,
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 创建style标签，将css插入，将css插入head标签
                "css-loader", // css模块化支持，使用现代css特性，压缩与优化css
                "postcss-loader",
              ],
            },
            {
              test: /.less$/,
              use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader, // 创建style标签，将css插入，将css插入head标签
                "css-loader", // css模块化支持，使用现代css特性，压缩与优化css
                "postcss-loader",
                "less-loader", // less模块化支持，使用less特性，压缩与优化less
              ],
            },
          ],
        },
        {
            test: /\.(png|jpg|gif|svg)$/, // 图片模块化支持，使用图片特性，压缩与优化图片
            type: 'asset', // 默认小于8kb的图片会被base64处理
            parser: { // 配置图片大小限制
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb
                },
            },
            generator: {
                filename: 'static/image/[name].[hash:6][ext]',
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 字体模块化支持，使用字体特性，压缩与优化字体
            type: 'asset',
            parser: { // 配置字体大小限制
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb
                },
            },
            generator: {
                filename: 'static/font/[name].[hash:6][ext]'
            }
        },
        // 媒体文件
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            type: 'asset',
            parser: { // 配置媒体大小限制
                dataUrlCondition: {
                    maxSize: 10 * 1024, // 10kb
                },
            },
            generator: {
                filename: 'static/media/[name].[hash:6][ext]'
            }
        }
      ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:6].css',
            chunkFilename: 'static/css/[name].[contenthash:6].chunk.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title: 'React-App',
        })
    ]
  };
};
