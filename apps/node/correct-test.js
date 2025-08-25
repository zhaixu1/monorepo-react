// 正确的 reduceRight 函数组合测试

console.log('=== 正确的 reduceRight 函数组合测试 ===\n');

// 1. 创建测试函数数组 - 修正参数顺序
const arrayFn = [
    (req, res) => {
        console.log('函数1执行，参数:', req);
        setTimeout(() => {
            console.log('函数1完成，调用 res');
            const result = req + ' -> 经过函数1';
            console.log('函数1返回结果:', result);
            res(result);
        }, 300);
    },
    (req, res) => {
        console.log('函数2执行，参数:', req);
        setTimeout(() => {
            console.log('函数2完成，调用 res');
            const result = req + ' -> 经过函数2';
            console.log('函数2返回结果:', result);
            res(result);
        }, 300);
    },
    (req, res) => {
        console.log('函数3执行，参数:', req);
        setTimeout(() => {
            console.log('函数3完成，调用 res');
            const result = req + ' -> 经过函数3';
            console.log('函数3返回结果:', result);
            res(result);
        }, 300);
    },
];

console.log('原始函数数组:', arrayFn.length, '个函数\n');

// 2. 使用 reduceRight 组合函数 - 修正逻辑
console.log('开始使用 reduceRight 组合函数...\n');

const reduceArray = arrayFn.reduceRight((next, middleware) => {
    return (req) => {
        console.log('调用中间件，参数:', req);
        middleware(req, next);
    }
}, (req) => {
    console.log('最终回调函数执行，结果:', req);
    console.log('🎯 最终经过所有函数的结果:', req);
});

console.log('函数组合完成，开始执行...\n');

// 3. 执行组合后的函数
reduceArray('初始数据');

console.log('\n测试完成！');
console.log('\n=== 执行流程说明 ===');
console.log('1. reduceRight 从右到左处理函数数组');
console.log('2. 每个函数都被包装，接收 next 函数作为参数');
console.log('3. 执行时形成嵌套调用链：函数3 -> 函数2 -> 函数1 -> 最终回调');
console.log('4. 每个函数完成后调用 next() 继续执行下一个函数');
console.log('5. 数据在函数链中传递，每个函数都会添加"经过函数X"的标记');

// 4. 演示中间件模式
console.log('\n=== 中间件模式演示 ===');
console.log('这种模式常用于 Express.js 等框架的中间件系统');
console.log('每个中间件都可以：');
console.log('- 处理请求');
console.log('- 修改数据');
console.log('- 调用 next() 继续下一个中间件');
console.log('- 或者直接结束请求'); 