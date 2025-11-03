const { tokenizer } = require("./tokenizer");
const { parser } = require("./parser");

// 示例1: 简单的函数调用
console.log("=== 示例1: 简单的函数调用 ===");
const code1 = "(add 2 3)";

const tokens1 = tokenizer(code1);
console.log("输入代码:", code1);
console.log("词法分析结果(tokens):", JSON.stringify(tokens1, null, 2));
debugger
const ast1 = parser(tokens1);
console.log("语法分析结果(AST):", JSON.stringify(ast1, null, 2));

// 示例2: 嵌套的函数调用
console.log("\n=== 示例2: 嵌套的函数调用 ===");
const code2 = "(add 2 (subtract 4 2))";
const tokens2 = tokenizer(code2);
console.log("输入代码:", code2);
console.log("词法分析结果(tokens):", JSON.stringify(tokens2, null, 2));
debugger
const ast2 = parser(tokens2);
console.log("语法分析结果(AST):", JSON.stringify(ast2, null, 2));

// 示例3: 包含字符串的函数调用
console.log("\n=== 示例3: 包含字符串的函数调用 ===");
const code3 = '(print "hello world")';
const tokens3 = tokenizer(code3);
console.log("输入代码:", code3);
console.log("词法分析结果(tokens):", JSON.stringify(tokens3, null, 2));
const ast3 = parser(tokens3);
console.log("语法分析结果(AST):", JSON.stringify(ast3, null, 2));

// 示例4: 多个表达式
console.log("\n=== 示例4: 多个表达式 ===");
const code4 = "(add 1 2) (multiply 3 4)";
const tokens4 = tokenizer(code4);
console.log("输入代码:", code4);
console.log("词法分析结果(tokens):", JSON.stringify(tokens4, null, 2));
const ast4 = parser(tokens4);
console.log("语法分析结果(AST):", JSON.stringify(ast4, null, 2));

// 示例5: 复杂嵌套表达式
console.log("\n=== 示例5: 复杂嵌套表达式 ===");
const code5 = "(add (subtract 10 5) (multiply 2 3))";
const tokens5 = tokenizer(code5);
console.log("输入代码:", code5);
console.log("词法分析结果(tokens):", JSON.stringify(tokens5, null, 2));
const ast5 = parser(tokens5);
console.log("语法分析结果(AST):", JSON.stringify(ast5, null, 2));
