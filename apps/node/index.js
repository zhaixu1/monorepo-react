console.log(global.name, 'global.name');
console.log(process.cwd(), 'process.env.NODE_ENV');
process.stdout.write('请输入你的名字：');
// process.stdin.on('data', (data) => {
//     const name = data.toString().trim();
//     console.log(`你好，${name}!`);
//     process.exit();
//   });


//   let progress = 0;
// const interval = setInterval(() => {
//   progress += 10;
//   process.stdout.write(`进度: [${'='.repeat(progress/10)}${progress}%]\r`);
//   if (progress >= 100) {
//     clearInterval(interval);
//     process.stdout.write('\n完成！\n');
//   }
// }, 100);


console.log(process.cwd());

// __dirname 表示当前模块的目录名
console.log('__dirname 的值为:', __dirname);

// __filename 表示当前模块的文件名
console.log('__filename 的值为:', __filename);

// process.cwd() 表示当前 Node.js 进程的工作目录
console.log('process.cwd() 的值为:', process.cwd());


console.log(module, 'module');

// 创建一个 10 字节的 Buffer，默认填充 0
const buf1 = Buffer.alloc(10);
console.log(buf1, 'buf1');

const form1 = Buffer.from('Hello');
console.log(form1, 'form1');

const form2 = Buffer.from(['H', 'e', 'l', 'l', 'o']);
console.log(form2, 'form2');

const form3 = Buffer.from('Hello', 'utf-8');
console.log(form3, 'form3');

const buf = Buffer.from('Node js')
console.log(buf, 'buf');

console.log(buf.toString('hex'), 'buf.toString');
console.log(buf.toJSON(), 'buf.toJSON');


// 在 Node.js 中，使用 ES Module 语法（import）引入 'url' 模块时，必须将文件扩展名改为 .mjs，或者在 package.json 中设置 "type": "module"。
// 否则会报错 "Cannot use import statement outside a module"。
// 解决方法一：将本文件扩展名改为 .mjs，然后保留 import 语法：
// import { URL } from 'url';

// 解决方法二：改用 CommonJS 语法（推荐在 .js 文件中使用）：
const { URL } = require('url');

const myURL = new URL('https://www.example.com:8080/path/index.html?name=value#hash');
console.log(myURL, 'myURL');
console.log(myURL.searchParams, 'myURL.searchParams');
console.log(myURL.searchParams.get('name'), 'myURL.searchParams.get');
console.log(myURL.searchParams.getAll('name'), 'myURL.searchParams.getAll');
console.log(myURL.searchParams.has('name'), 'myURL.searchParams.has');






