// rest 的作用
/**
 * rest 的作用
 * 1. 将剩余的参数转换为数组
 * 2. 函数重载
 * 3. 参数解构
 */

const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;
console.log(a, b, c);


// 
const cao = (args) => {
    console.log(args);
}

cao(1, 2, 3, 4, 5);