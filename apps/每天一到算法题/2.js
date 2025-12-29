// 
let nums = [100, 4, 200, 1, 2, 5, 3];

function maxSubArray(nums) {
    let maxSum = 0;
    let numsSet = new Set(nums);

    for(let num of numsSet) {
        if(!numsSet.has(num -1)) {
            let currentNum = num;
            let currentSum = 1;
            while(numsSet.has(currentNum + 1)) {
                currentSum++
                currentNum++;
                maxSum = Math.max(maxSum, currentSum);
            }
        }
    }
    return maxSum;
}

maxSubArray(nums);
console.log(maxSubArray(nums), 'maxSubArray');
