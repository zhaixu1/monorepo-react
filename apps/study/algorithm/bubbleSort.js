/**
 * 执行效率： 时间复杂度 fn(n) = O(n^2), 空间复杂度 fn(n) = O(1)
 * 稳定性： 稳定
 * 内存消耗： 原地排序
 */
/**
 * 为什么空间复杂度是 O(1)？
 * 因为整个冒泡排序过程中，只使用了常数个临时变量（如 temp），
 * 并没有随着输入数组长度 n 的增加而分配额外的空间。
 * 排序操作都是在原数组上进行的（原地排序），不需要额外开辟新的数组或数据结构。
 * 所以空间复杂度为 O(1)。
 */
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


let arr = [1, 3, 2, 4, 5];
console.log(bubbleSort(arr));


// 冒泡排序的优化
// 冒泡排序（已优化）
// 这段代码对冒泡排序进行了优化，主要体现在增加了一个 hasChange 标志位。
// 在每一轮冒泡排序中，如果没有发生任何元素交换，说明数组已经有序，可以提前结束排序，避免不必要的比较。
// 这样在数据本身已经有序或接近有序时，能大幅提升冒泡排序的效率，减少无效循环。

const bubbleSort2 = arr => {
    console.time('改进后冒泡排序耗时');
    const length = arr.length;
    if (length <= 1) return;
    for (let i = 0; i < length - 1; i++) {
        let hasChange = false; // 标志本轮是否有交换
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 交换相邻元素
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasChange = true; // 发生了交换
            }
        }
        if (!hasChange) break; // 如果本轮没有交换，说明已排序好，提前退出
    }
    console.log('改进后 arr :', arr);
    console.timeEnd('改进后冒泡排序耗时');
};