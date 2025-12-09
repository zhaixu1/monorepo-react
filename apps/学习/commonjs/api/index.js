const { URL } = require('url')

var count = 1

// console.log('process.env', process.env)

// console.log('process.argv', process.argv)

// console.log('process.cwd()', process.cwd())

// console.log('process.pid', process.pid)

// console.log('process.platform', process.platform)

// console.log('process.version', process.version)

// console.log('process.title', process.title)

// console.log('process.memoryUsage()', process.memoryUsage())

// console.log('process.uptime()', process.uptime())


let u1 = new URL("https://www.baidu.com?value=1")

console.log('u1', u1.searchParams.get('value'))

// ========== Array.reduce 和 Array.reduceRight 函数实例 ==========

// 定义一些工具函数
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const concat = (str, item) => str + item;
const max = (a, b) => Math.max(a, b);
const min = (a, b) => Math.min(a, b);

// 创建对象的函数
const createUser = (acc, name, index) => {
    acc[name] = { id: index, name: name, active: true };
    return acc;
};

// 过滤和转换函数
const isEven = num => num % 2 === 0;
const square = num => num * num;
const addToSum = (sum, num) => isEven(num) ? sum + square(num) : sum;

// 数据数组
const numbers = [1, 2, 3, 4, 5, 6];
const words = ['Hello', ' ', 'World', '!'];
const users = ['Alice', 'Bob', 'Charlie'];
const prices = [10.99, 25.50, 8.75, 33.25];

console.log('\n=== Array.reduce 实例 ===');

// 1. 使用 reduce + add 函数求和
const sum = numbers.reduce(add, 0);
console.log('1. 求和:', sum); // 21

// 2. 使用 reduce + multiply 函数求乘积
const product = numbers.reduce(multiply, 1);
console.log('2. 乘积:', product); // 720

// 3. 使用 reduce + concat 函数连接字符串
const sentence = words.reduce(concat, '');
console.log('3. 连接字符串:', sentence); // "Hello World!"

// 4. 使用 reduce + max 函数找最大值
const maximum = numbers.reduce(max);
console.log('4. 最大值:', maximum); // 6

// 5. 使用 reduce + createUser 函数创建用户对象
const userMap = users.reduce(createUser, {});
console.log('5. 用户对象:', userMap);

// 6. 使用 reduce + 复合函数：过滤偶数并求平方和
const evenSquareSum = numbers.reduce(addToSum, 0);
console.log('6. 偶数平方和:', evenSquareSum); // 2² + 4² + 6² = 4 + 16 + 36 = 56

// 7. 使用 reduce 函数式编程：管道处理
const pipeline = numbers.reduce((acc, num) => {
    const transform = (x) => square(add(x, 1)); // 先加1再平方
    return acc.concat(transform(num));
}, []);
console.log('7. 管道处理 (n+1)²:', pipeline); // [4, 9, 16, 25, 36, 49]

console.log('\n=== Array.reduceRight 实例 ===');

// 1. 使用 reduceRight + add 函数求和（结果同 reduce）
const sumRight = numbers. (add, 0);
console.log('1. 从右求和:', sumRight); // 21

// 2. 使用 reduceRight + concat 函数反向连接
const reverseSentence = words.reduceRight(concat, '');
console.log('2. 反向连接:', reverseSentence); // "!World Hello"

// 3. 使用 reduceRight + max 函数找最大值（顺序不影响结果）
const maxRight = prices.reduceRight(max);
console.log('3. 最大价格:', maxRight); // 33.25

// 4. 使用 reduceRight 实现右折叠：嵌套函数调用
const nestedCall = numbers.reduceRight((acc, num) => {
    return (x) => add(num, acc(x));
}, (x) => x);
console.log('4. 嵌套调用 f(5):', nestedCall(0)); // 等价于 1+(2+(3+(4+(5+(6+0)))))

// 5. 使用 reduceRight 创建反向数组处理函数
const reverseProcess = words.reduceRight((acc, word) => {
    const upperCase = (str) => str.toUpperCase();
    return acc.concat(upperCase(word));
}, []);
console.log('5. 反向大写处理:', reverseProcess); // ["!", "WORLD", " ", "HELLO"]

// 6. 使用 reduceRight 函数组合：从右到左应用函数
const compose = (...fns) => fns.reduceRight((acc, fn) => (x) => fn(acc(x)));
const addOne = x => x + 1;
const double = x => x * 2;
const toString = x => x.toString();

const composed = compose(toString, double, addOne);
console.log('6. 函数组合 compose(toString, double, addOne)(5):', composed(5)); // "12"

// 7. 使用 reduceRight 实现深度优先遍历式的数据处理
const deepProcess = users.reduceRight((acc, user, index) => {
    const processUser = (userData) => ({
        ...userData,
        processedBy: 'reduceRight',
        order: index
    });
    return [processUser({ name: user, id: index })].concat(acc);
}, []);
console.log('7. 深度处理:', deepProcess);

// 8. 对比 reduce 和 reduceRight 的执行顺序
console.log('\n=== 执行顺序对比 ===');
const logReduce = numbers.reduce((acc, num, index) => {
    console.log(`reduce: index ${index}, value ${num}, acc ${acc}`);
    return acc + num;
}, 0);

const logReduceRight = numbers.reduceRight((acc, num, index) => {
    console.log(`reduceRight: index ${index}, value ${num}, acc ${acc}`);
    return acc + num;
}, 0);

console.log('reduce 结果:', logReduce);
console.log('reduceRight 结果:', logReduceRight);