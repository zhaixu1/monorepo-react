// 
var str = 'asfsdfeddfssscegse'

function longestSubstring(str) {
    let map = new Map();
    let start = 0;
    let maxLength = 0;

    for(let i = 0; i < str.length; i++) {
        const currentData = str[i];

        if(map.has(currentData)) {
            start = Math.max(start, map.get(currentData) + 1);
        }

        map.set(currentData, i);
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

