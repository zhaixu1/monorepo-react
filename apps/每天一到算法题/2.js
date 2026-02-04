let nums = [1, 2, 3, 4, 5];

/**
 * 
 * @param {*} nums 
 */
function quickSort(arr) {
    if(arr.length <= 1) return arr;

    const pivot = arr[0];

    const left = [];
    const right = [];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(nums), 'quickSort');