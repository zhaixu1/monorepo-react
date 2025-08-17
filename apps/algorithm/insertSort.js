
/**
 * 原地排序，没有额外的空间
 * 稳定，可以保证顺序是稳定的
 * 复杂度： O(n^2)
 * @param {*} arr 
 * @returns 
 */


// 定义插入排序函数，接收一个数组 arr 作为参数
function insertSort(arr) {
    // 获取数组长度
    const length = arr.length;

    // 如果数组长度小于等于1，直接返回原数组
    if(length <= 1) return arr;

    // 声明变量 preIndex 和 current
    let preIndex, current

    // 从第二个元素开始遍历数组
    for(let i = 1; i < length; i++) {
        // preIndex 指向当前元素的前一个位置
        preIndex = i - 1;

        // current 保存当前需要插入的元素
        current = arr[i];
        
        // 将前面已排序的元素依次向后移动，直到找到合适的位置插入 current
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        // 如果 current 需要插入到 preIndex+1 位置，则赋值
        if(preIndex + 1 != i) arr[preIndex + 1] = current;
    }
    // 返回排序后的数组
    return arr;
}


// 折半插入
/**
 * 折半插入排序
 * 利用二分查找法找到插入位置，减少比较次数
 * 复杂度：O(n^2)，但比较次数减少
 * @param {*} arr 
 * @returns 
 */
function binaryInsertSort(arr) {
    const length = arr.length;
    if(length <= 1) return arr;

    for(let i = 1; i < length; i++) {
        let current = arr[i];
        let left = 0;
        let right = i - 1;

        // 使用二分查找找到插入位置
        // 这里其实只是对索引进行了折半查找，比较的是 arr[mid] 和 current 的大小
        // 如果 arr[mid] 是当前区间最小值，依然会继续查找，直到找到合适的插入位置
        // 这种方式的意义在于减少比较次数，而不是直接找到最小值
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(arr[mid] > current) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // left 即为要插入的位置
        // 将[left, i-1]的元素后移一位
        for(let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
        }
        arr[left] = current;
    }
    return arr;
}
