/**
 * 插入排序
 * 
 * @param {*} arr 
 * @returns 
 */
/**
 * 插入排序的基本思想是：将数组分为已排序区间和未排序区间，每次从未排序区间取出一个元素，插入到已排序区间的合适位置。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 稳定性：稳定
 */
function insertSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // 将已排序区间中比 current 大的元素后移
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 插入到正确位置
        arr[j + 1] = current;
    }
    return arr;
}

function insertSort(arr) {
   
}

let arr = [1, 3, 2, 4, 5];
console.log(insertSort(arr));