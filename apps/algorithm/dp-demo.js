// 动态规划数组创建过程演示

console.log('=== 动态规划数组创建过程演示 ===\n');

// 示例数据
const objectArr = [
    { size: 10, value: 60 },
    { size: 20, value: 100 },
    { size: 30, value: 120 }
];
const capacity = 50;
const n = objectArr.length;

console.log('输入数据:');
console.log('物品数量 n:', n);
console.log('背包容量 capacity:', capacity);
console.log('物品数组:', objectArr);
console.log('');

// 步骤1: 创建二维数组
console.log('步骤1: 创建二维数组');
console.log('Array.from({length: n + 1}, () => Array(capacity + 1).fill(0))');
console.log('其中 n + 1 =', n + 1, ', capacity + 1 =', capacity + 1);
console.log('');

var dp = Array.from({length: n + 1}, () => Array(capacity + 1).fill(0));

// 步骤2: 显示创建的数组结构
console.log('步骤2: 创建的二维数组结构');
console.log('dp 数组维度:', dp.length, 'x', dp[0].length);
console.log('');

// 步骤3: 显示数组内容
console.log('步骤3: 数组内容 (初始状态)');
console.log('行索引表示物品数量 (0到' + n + ')');
console.log('列索引表示背包容量 (0到' + capacity + ')');
console.log('');

// 打印表头
let header = '容量\\物品';
for (let j = 0; j <= capacity; j++) {
    header += `\t${j}`;
}
console.log(header);

// 打印每一行
for (let i = 0; i <= n; i++) {
    let row = `${i}`;
    for (let j = 0; j <= capacity; j++) {
        row += `\t${dp[i][j]}`;
    }
    console.log(row);
}

console.log('\n=== 数组含义解释 ===');
console.log('dp[i][j] 表示:');
console.log('- 前 i 个物品');
console.log('- 背包容量为 j');
console.log('- 能获得的最大价值');
console.log('');

console.log('=== 边界条件 ===');
console.log('dp[0][j] = 0: 没有物品时，任何容量的最大价值都是 0');
console.log('dp[i][0] = 0: 容量为 0 时，任何物品数量的最大价值都是 0');
console.log('');

// 步骤4: 演示动态规划填充过程
console.log('=== 动态规划填充过程 ===');
console.log('开始填充 dp 数组...\n');

for (var i = 1; i <= n; i++) {
    var size = objectArr[i - 1].size;
    var value = objectArr[i - 1].value;
    
    console.log(`处理第 ${i} 个物品: size=${size}, value=${value}`);
    
    for (var j = 0; j <= capacity; j++) {
        if (j < size) {
            // 当前容量不足以放下第i个物品，只能继承上一个状态
            dp[i][j] = dp[i - 1][j];
            console.log(`  容量 ${j}: 不足以放下物品，继承 dp[${i-1}][${j}] = ${dp[i][j]}`);
        } else {
            // 取放与不放第i个物品两种情况的最大值
            const notTake = dp[i - 1][j];
            const take = dp[i - 1][j - size] + value;
            dp[i][j] = Math.max(notTake, take);
            console.log(`  容量 ${j}: 不放=${notTake}, 放=${take}, 选择=${dp[i][j]}`);
        }
    }
    console.log('');
}

console.log('=== 最终结果 ===');
console.log('dp[' + n + '][' + capacity + '] =', dp[n][capacity]);
console.log('最大总价值:', dp[n][capacity]);

console.log('\n=== 完整 dp 数组 (填充后) ===');
// 打印表头
header = '容量\\物品';
for (let j = 0; j <= capacity; j++) {
    header += `\t${j}`;
}
console.log(header);

// 打印每一行
for (let i = 0; i <= n; i++) {
    let row = `${i}`;
    for (let j = 0; j <= capacity; j++) {
        row += `\t${dp[i][j]}`;
    }
    console.log(row);
} 