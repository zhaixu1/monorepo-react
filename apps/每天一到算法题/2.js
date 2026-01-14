let nums = [1, 2, 3, 4, 5];

/**
 * 
 * @param {*} nums 
 */
function productExceptSelf(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    let leftProduct = 1;
    for(let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for(let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return answer;
}

console.log(productExceptSelf(nums), 'productExceptSelf');