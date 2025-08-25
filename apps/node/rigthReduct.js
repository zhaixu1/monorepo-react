const array = [
    [1,2],
    [4, 5, 6],
    [7, 8, 9],
]

const reduceArray = array.reduce((res, req) => {
    console.log(res, req, 'res, req');
    return res.concat(req)
}, [0])

console.log(reduceArray, 'reduceArray');

// const arrayFn = [
//     (req, res) => {
//         console.log(req, '函数1');
//         res(req)
//     },
//     (req, res) => {
//         console.log(req, '函数2');
//         res(req)
//     },
// ]

// const reduceRightArray = arrayFn.reduceRight( (res, req) => {
//     return (req) => {
//         console.log(req, 'reduceRightArray中的req');
//         res(req)
//     }
// }, (req) => {
//     console.log(req, 'reduceRightArray');
// })
// console.log(reduceRightArray, 'reduceRightArray');
// reduceRightArray(1)

// 你想要执行到“函数1”，需要让 reduceRight 组合的函数链真正调用到第一个函数（即数组的左侧）。你当前的 reduceRight 组合方式其实是“洋葱模型”，每个函数都包裹下一个函数，只有在链条中每个函数都调用 res（即 next）时，才会继续往下传递。

// 你的 arrayFn 中每个函数的参数顺序是 (req, res)，而 reduceRight 的回调参数顺序是 (res, req)，这会导致变量名混淆。建议如下写法：

const arrayFn2 = [
    (req, next) => {
        console.log('进入函数1，参数:', req, next);
        next(req + ' -> 经过函数1');
    },
    (req, next) => {
        console.log('进入函数2，参数:', req, next);
        next(req + ' -> 经过函数2');
    },
];

// 正确的 reduceRight 组合方式
const composed = arrayFn2.reduceRight((next, fn) => {
    console.log(next, fn, 'next, fn');
    
    return (req) => fn(req, next);
}, (final) => {
    console.log('最终结果:', final);
});

// 执行组合后的函数
composed('初始数据');

// 这样执行后，输出会依次进入函数2、函数1，最后到最终结果。
