# nodjs

## 什么是nodejs？
    Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
    Node.js是 单线程模型，基于事件驱动，非阻塞的js运行环境。

## 浏览器内核
    1. Blink
    2. Webkit    

## 浏览器 JS引擎
    1. V8
    2. JavaScriptCore

### JS引擎 翻译器
    JS =》汇编语言 =》 机器语言 =》 二进制

### V8引擎

V8 是 c++ 写的，基于 chrome 浏览器内核

chorme nodejs deno

- 支持语言 c++ 高性能 支持js webassembly
- 跨平台，
- 嵌入式，可以独立运行，也可以嵌入到其他C++ 应用中。


### V8 执行js的过程

1. 解析（解析js代码，生成AST）
2. 转换（将AST转换成中间代码）转化成 字节码    
3. 优化（优化中间代码）
4. 代码生成（将中间代码转换成机器码）


## node 架构
    1. V8,  Libuv, 不依赖libuv 第三方c++ 模块
    
## 事件循环机制

### 异步I/O

磁盘 内存 显卡 都是IO 操作
input 
output

### 如何看待异步I/O

在 Node.js 中，异步 I/O 是其核心设计理念和性能优势的基石，也是理解 Node.js 单线程模型的关键。
不同于多线程处理IO的方式，nodejs 凭借异步IO实现了【单线程非阻塞】，从而实现了性能的提升。

#### 1. 传统同步 I/O vs 异步 I/O

##### 同步 I/O（阻塞式）
```javascript
// 同步方式 - 会阻塞主线程
const fs = require('fs');

console.log('开始读取文件');
const data = fs.readFileSync('large-file.txt'); // 这里会阻塞，等待文件读取完成
console.log('文件读取完成');
console.log('继续执行其他任务'); // 必须等待上面的操作完成
```

**问题：**
- 主线程被阻塞，无法处理其他请求
- CPU 资源浪费，等待 I/O 操作完成
- 并发能力差，一次只能处理一个请求

##### 异步 I/O（非阻塞式）
```javascript
// 异步方式 - 非阻塞
const fs = require('fs');

console.log('开始读取文件');
fs.readFile('large-file.txt', (err, data) => {
    if (err) throw err;
    console.log('文件读取完成');
}); // 立即返回，不阻塞主线程
console.log('继续执行其他任务'); // 立即执行

// 输出顺序：
// 开始读取文件
// 继续执行其他任务
// 文件读取完成
```

**优势：**
- 主线程不被阻塞，可以处理其他请求
- 高并发处理能力
- 更好的资源利用率，更低的 CPU 使用率

#### 2. 异步 I/O 的实现原理

##### Event Loop（事件循环）
Node.js 通过事件循环机制处理异步操作：

```javascript
console.log('1: 同步代码');

// 异步操作会被放入相应的队列
setTimeout(() => {
    console.log('4: Timer 回调');
}, 0);

fs.readFile('file.txt', () => {
    console.log('5: I/O 回调');
});

setImmediate(() => {
    console.log('6: setImmediate 回调');
});

console.log('2: 同步代码');

process.nextTick(() => {
    console.log('3: nextTick 回调');
});

// 执行顺序：1 -> 2 -> 3 -> 4 -> 6 -> 5
```

##### Libuv 线程池
```javascript
// 文件系统操作使用线程池
const fs = require('fs');

// 这些操作在 libuv 线程池中并行执行
fs.readFile('file1.txt', callback1);
fs.readFile('file2.txt', callback2);
fs.readFile('file3.txt', callback3);
fs.readFile('file4.txt', callback4);

// 主线程继续处理其他任务
console.log('主线程继续工作');
```

#### 3. 现代异步编程模式

##### Promise 和 async/await
```javascript
const fs = require('fs').promises;

// Promise 方式
function readFilePromise() {
    return fs.readFile('file.txt', 'utf8')
        .then(data => {
            console.log('文件内容:', data);
            return data;
        })
        .catch(error => {
            console.error('读取失败:', error);
        });
}

// async/await 方式（推荐）
async function readFileAsync() {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
        console.log('文件内容:', data);
        return data;
    } catch (error) {
        console.error('读取失败:', error);
    }
}

// 并发处理多个异步操作
async function readMultipleFiles() {
    try {
        const results = await Promise.all([
            fs.readFile('file1.txt', 'utf8'),
            fs.readFile('file2.txt', 'utf8'),
            fs.readFile('file3.txt', 'utf8')
        ]);
        console.log('所有文件读取完成:', results);
    } catch (error) {
        console.error('读取失败:', error);
    }
}
```

#### 4. 流式处理（Stream）

对于大文件或数据量大的 I/O 操作，使用流可以避免内存溢出：

```javascript
const fs = require('fs');
const path = require('path');

// 读取大文件的正确方式
function copyLargeFile(src, dest) {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);

    readStream
        .on('data', (chunk) => {
            console.log(`处理了 ${chunk.length} 字节`);
            writeStream.write(chunk);
        })
        .on('end', () => {
            console.log('文件复制完成');
            writeStream.end();
        })
        .on('error', (error) => {
            console.error('读取错误:', error);
        });

    writeStream.on('error', (error) => {
        console.error('写入错误:', error);
    });
}

// 使用管道（pipeline）更简洁
const { pipeline } = require('stream');

function copyFileWithPipeline(src, dest) {
    pipeline(
        fs.createReadStream(src),
        fs.createWriteStream(dest),
        (error) => {
            if (error) {
                console.error('管道操作失败:', error);
            } else {
                console.log('文件复制成功');
            }
        }
    );
}
```

#### 5. 错误处理最佳实践

```javascript
// 1. 回调函数错误处理
fs.readFile('file.txt', (err, data) => {
    if (err) {
        // 处理不同类型的错误
        if (err.code === 'ENOENT') {
            console.log('文件不存在');
        } else if (err.code === 'EACCES') {
            console.log('没有访问权限');
        } else {
            console.error('未知错误:', err);
        }
        return;
    }

    console.log('文件内容:', data.toString());
});

// 2. Promise 错误处理
async function safeFileOperation(filename) {
    try {
        const data = await fs.promises.readFile(filename, 'utf8');
        return { success: true, data };
    } catch (error) {
        return {
            success: false,
            error: error.message,
            code: error.code
        };
    }
}

// 3. 全局错误处理
process.on('uncaughtException', (error) => {
    console.error('未捕获的异常:', error);
    // 进行清理工作后退出
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的 Promise 拒绝:', reason);
    // 处理未被 catch 的 Promise 错误
});
```

#### 6. 性能优化技巧

```javascript
// 1. 控制并发数量，避免系统过载
async function processFilesWithLimit(files, limit = 10) {
    const results = [];

    for (let i = 0; i < files.length; i += limit) {
        const batch = files.slice(i, i + limit);
        const batchPromises = batch.map(file => processFile(file));
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);
    }

    return results;
}

// 2. 使用缓存减少重复 I/O 操作
const fileCache = new Map();

async function getCachedFileContent(filename) {
    if (fileCache.has(filename)) {
        return fileCache.get(filename);
    }

    const content = await fs.promises.readFile(filename, 'utf8');
    fileCache.set(filename, content);
    return content;
}

// 3. 合理使用 Buffer 处理二进制数据
async function efficientFileProcessing() {
    const buffer = await fs.promises.readFile('image.png');

    // 直接处理 Buffer，避免不必要的字符串转换
    const fileSize = buffer.length;
    const fileType = buffer.slice(0, 4); // 读取文件头

    return { fileSize, fileType };
}
```

#### 7. 异步 I/O 的应用场景

**适合异步 I/O 的场景：**
- Web 服务器和 API 服务
- 文件上传/下载服务
- 数据库操作
- 网络请求处理
- 实时应用（聊天、游戏）

**不适合的场景：**
- CPU 密集型计算
- 图像/视频处理
- 大数据计算
- 机器学习训练

#### 总结

异步 I/O 是 Node.js 高性能的核心所在：

1. **非阻塞特性**：主线程不会被 I/O 操作阻塞
2. **高并发能力**：可以同时处理大量请求
3. **资源高效**：充分利用系统资源，避免线程切换开销
4. **事件驱动**：通过事件循环管理异步操作
5. **适合 I/O 密集型应用**：特别是网络服务和文件处理

正确理解和使用异步 I/O 是掌握 Node.js 开发的关键，它让我们能够构建高性能、高并发的应用程序。


Node.js 异步 I/O 的底层原理
Node.js 的异步 I/O 并非「单线程完成所有工作」，而是通过「事件循环 + 线程池 + 操作系统异步接口」三层架构实现，核心分为两大场景：
1. 非阻塞异步 I/O（纯异步，无线程池参与）
针对操作系统提供原生异步接口的 I/O 操作（如网络 I/O：TCP/UDP、DNS 查询），Node.js 直接调用系统异步接口，无需额外线程：
调用异步 API（如 socket.on('data')）时，Node.js 向操作系统注册「I/O 完成回调」；
操作系统完成 I/O 后，通过「事件通知」将结果放入事件队列；
事件循环从队列中取出回调，在主线程执行。
2. 阻塞 I/O 封装的异步（线程池兜底）
针对操作系统无原生异步接口的 I/O 操作（如文件 I/O、压缩 / 加密、部分数据库驱动），Node.js 通过 libuv 线程池 实现异步封装：
libuv 是 Node.js 的底层跨平台 I/O 库，默认创建 4 个线程的线程池；
调用 fs.readFile 等异步 API 时，Node.js 将 I/O 任务交给线程池处理；
线程池完成 I/O 后，将结果和回调放入事件队列，由事件循环在主线程执行回调。

事件循环的六个阶段

  1. Timer 阶段 - 执行 setTimeout 和 setInterval 的回调
  2. Pending callbacks 阶段 - 执行上一轮循环中被延迟的 I/O 回调
  3. Idle, prepare 阶段 - 内部使用
  4. Poll 阶段 - 获取新的 I/O 事件，执行与 I/O 相关的回调
  5. Check 阶段 - 执行 setImmediate 的回调
  6. Close callbacks 阶段 - 执行关闭事件的回调（如 socket.on('close')）