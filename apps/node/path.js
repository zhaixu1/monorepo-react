const path = require('node:path')
const fs = require('node:fs')

// 读取环境变量示例
// console.log('当前环境变量:', process.env);
// 读取指定环境变量，例如 NODE_ENV
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log(__dirname, '__dirname');
const path1 = path.resolve(__dirname, 'test.txt')
console.log(path1, 'path1');

console.log(path.join('bar/', 'foo/'));
// /home/myself/node/bar/foo
console.log(path.resolve('bar/', 'foo/'));


fs.readFile(path1, 'utf-8', (err, data) => {
    if (err) {
        console.log(err, 'err');
    } else {
        console.log(data, 'data');
    }
})








