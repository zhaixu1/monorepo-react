// 
var str = 'asfsdfeddfssscegse'

function longestSubstring(str) {
    let map = new Map();
    let maxLength = 0;
    let start = 0;

    for(let i = 0; i < str.length; i++) {
        const currentChar = str[i];

        if(map.has(currentChar)) {
            start = Math.max(start, map.get(currentChar) + 1)
        }

        map.set(currentChar, i);

        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}
console.log(longestSubstring(str), 'longestSubstring');

