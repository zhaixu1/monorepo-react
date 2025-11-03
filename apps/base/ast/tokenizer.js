// 词法分析
 function tokenizer(input) {
    let current = 0;

    let tokens = []; // 存储 token 的数组

    while (current < input.length) {
        let char = input[current];
        if (char === "(") {
            tokens.push({
                type: "paren",
                value: "(",
            });

            current++;
            continue; // 跳过当前循环，继续执行下一次循环
        }

        if (char === ")") {
            tokens.push({
                type: "paren",
                value: ")",
            });

            current++;
            continue; // 跳过当前循环，继续执行下一次循环
        }

        let WHITESPACE = /\s/; // 匹配空格
        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        let NUMBERS = /[0-9]/; // 匹配数字
        if (NUMBERS.test(char)) {
            let value = "";
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: "number", value });
            continue;
        }

        if (char === '"') {
            // 匹配字符串，如果不是 双引号那么就是字符串，会一直到下一个双引号
            let value = "";

            char = input[++current];

            while (char !== '"') {
                value += char;
                char = input[++current];
            }

            tokens.push({ type: "string", value });
            continue;
        }

        let LETTERS = /[a-z]/i; // 匹配字母

        if (LETTERS.test(char)) {
            let value = "";
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: "name", value });
            continue;
        }

        throw new Error(`Unknown token: ${char}`);
    }
    return tokens;
}

// 

exports.tokenizer = tokenizer;
