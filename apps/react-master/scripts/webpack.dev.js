const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');

module.exports = merge(base(true), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: false, // 是否启用 gzip 压缩
        port: 9000,
        historyApiFallback: true, // 404时，返回index.html
        hot: true,
    }
})