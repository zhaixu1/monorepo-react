// 动态规划
/**
 * 斐波那契数列 的几种解法
 */


// function fibo(n) {
//     if(n <= 1) return n;
//     return fibo(n - 1) + fibo(n - 2)
// }


// function fibo(n) {
//     if(n <= 1) return n;
//     var arr = [0, 1];
//     for(let i = 2; i <= n; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr[n];
// }


// function fibo(n) {
//     if(n <= 1) return n;
//     var res, a = 0, b = 1;
//     for(let i = 2; i <= n; i++) {
//         res = a + b;
//         a = b;
//         b = res;
//     }
//     return res;
// }


function fibo(n) {
    if(n <= 1) return n;
    var a = 0, b = 1;
    for(let i = 2; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}

console.log(fibo(10), 'fibo');




/**
 * 寻找最长公共子串
 */

let str1 = 'str1';
let str2 = 'str2';
[str1, str2] = [str2, str1];
console.log(str1, str2, 'str1, str2');

// 寻找两个字符串的最长公共子串
function maxSubStr(str1, str2) {
    // 如果任意一个字符串为空，直接返回空字符串
    if(!str1 || !str2) return '';
    // 获取两个字符串的长度
    let l1 = str1.length, l2 = str2.length;
    // 用于记录当前找到的最长公共子串
    var maxSubStr = '';
    // 遍历第一个字符串的每一个字符
    for(let i = 0; i < l1; i++) {
        // 遍历第二个字符串的每一个字符
        for(let j = 0; j < l2; j++) {
            // 临时变量tempStr用于存储当前匹配的子串，k用于记录当前匹配的长度
            var tempStr = '', k = 0;
            // 当两个字符串从当前位置开始的字符相等时，继续向后比较
            while((i + k < l1) && (j + k < l2) && (str1[i + k] === str2[j + k])) {
                // 将当前匹配的字符添加到临时子串中
                tempStr += str1[i + k]; // 将str1[i + k] 添加到tempStr中
                k++;
            }
            // 如果当前临时子串比已记录的最长子串还长，则更新最长子串
            if(tempStr.length > maxSubStr.length) {
                maxSubStr = tempStr;
            }
        }
    }
    return maxSubStr;
}



/**
 * 背包问题
 */

/**
 * 该函数用于解决“分数背包问题”（Fractional Knapsack Problem），即可以将物品进行拆分装入背包，使得背包内物品的总价值最大。
 * 
 * @param {number} capacity 背包的最大容量
 * @param {Array} objectArr 物品数组，每个物品包含 size（体积/重量）和 value（价值）属性
 * @returns {number} 能装入背包的最大总价值
 * 
 * 实现思路：
 * 1. 首先按照物品的单位价值（value/size）从大到小排序，优先选择单位价值高的物品。
 * 2. 依次遍历排序后的物品数组，尽量将物品全部装入背包。
 *    - 如果当前物品可以全部装下（size <= 剩余容量），则全部装入，并累加价值。
 *    - 如果当前物品不能全部装下，则只装下剩余容量对应的部分（即拆分物品），并累加相应的价值，然后背包装满，结束循环。
 * 3. 返回背包中物品的最大总价值。
 */
function kanpasck(capacity, objectArr) {
    // 按照单位价值从大到小排序
    objectArr.sort((a, b) => b.value / b.size - a.value / a.size);
    var n = objectArr.length;
    var selected = 0, maxValue = 0;

    // 遍历物品数组，装入背包
    for(var i = 0; i < n && selected < capacity; i++) {
        var size = objectArr[i].size,
        value = objectArr[i].value;
        if (size  <= capacity - selected) {
            // 如果当前物品可以全部装下
            maxValue += value;
            selected += size;
        }else {
            // 如果当前物品只能装一部分
            maxValue += (capacity - selected) * (value / size);
            selected = capacity;
        }
    }
    return maxValue;
}

// 写一个例子进行验证
const objectArr = [
    { size: 10, value: 60 },
    { size: 20, value: 100 },
    { size: 30, value: 120 }
];
const capacity = 50;
const result = kanpasck(capacity, objectArr);
console.log('分数背包问题最大总价值:', result); // 应输出 240


// 0-1 实现背包问题
/**
 * 0-1背包问题：每个物品只能选择放或不放，不能拆分
 * @param {number} capacity 背包容量
 * @param {Array} objectArr 物品数组，每个物品有 size 和 value 属性
 * @returns {number} 最大总价值
 * 
 * 0-1背包问题子结构：选择一个给定第 i 件物品，则需要比较选择第 
 * i 件物品的形成的子问题的最优解与不选择第 i 件物品的子问题的最优解。
 * 分成两个子问题，进行选择比较，选择最优的。
 */
/**
 * Kanpasck01 实现的是 0-1 背包问题的动态规划解法。
 * 
 * 0-1 背包问题的含义是：有一个容量为 capacity 的背包和 n 个物品，每个物品有 size（体积）和 value（价值），
 * 每个物品只能选择放或不放（不能拆分），问如何选择物品使得背包内物品的总价值最大。
 * 
 * 代码解释如下：
 * 1. 定义 dp[i][j] 表示前 i 个物品，背包容量为 j 时能获得的最大价值。
 *    - 这里 i 从 0 到 n，j 从 0 到 capacity。
 *    - dp[0][*] = 0，表示不选任何物品时最大价值为 0。
 * 2. 外层循环 i 从 1 到 n，表示依次考虑每个物品。
 * 3. 内层循环 j 从 0 到 capacity，表示当前背包容量。
 * 4. 对于每个物品 i（下标为 i-1），有两种选择：
 *    - 不选第 i 个物品：dp[i][j] = dp[i-1][j]
 *    - 选第 i 个物品（前提是当前容量 j >= size）：dp[i][j] = dp[i-1][j-size] + value
 *    - 取两者最大值。
 * 5. 最终 dp[n][capacity] 就是最大总价值。
 */
function Kanpasck01(capacity, objectArr) {
    var n = objectArr.length;
    // dp[i][j] 表示前i个物品，容量为j时的最大价值
    debugger
    // 这行代码的作用是初始化一个二维数组 dp，dp[i][j] 表示前 i 个物品、背包容量为 j 时的最大价值。
    // 其中 n+1 表示物品数量（包含不选任何物品的情况），capacity+1 表示容量从 0 到 capacity。
    // 每个元素初始值为 0，表示还未放入任何物品时最大价值为 0。
    var dp = Array.from({length: n + 1}, () => Array(capacity + 1).fill(0));
    for (var i = 1; i <= n; i++) {
        var size = objectArr[i - 1].size;
        var value = objectArr[i - 1].value;
        for (var j = 0; j <= capacity; j++) {
            if (j < size) {
                // 当前容量不足以放下第i个物品，只能继承上一个状态
                dp[i][j] = dp[i - 1][j];
            } else {
                // 取放与不放第i个物品两种情况的最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - size] + value);
            }
        }
    }
    return dp[n][capacity];
}


const objectArr01 = [
    { size: 10, value: 60 },
    { size: 20, value: 100 },
    { size: 30, value: 120 }
];
const capacity01 = 50;
const result01 = Kanpasck01(capacity01, objectArr01);
console.log('0-1背包问题最大总价值:', result01);




 