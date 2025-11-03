// 生成代码

function codeGenerator(node) {
    switch(node.type) {
        case 'Program':
            // 之所以用 map(codeGenerator) 是因为 node.body 是一个由 AST 节点组成的数组，
            // 例如 Program 节点的 body 里会包含多个表达式（ExpressionStatement）。
            // 使用 map 对每个子节点递归调用 codeGenerator，生成每个节点对应的代码字符串，
            // 然后用 join('\n') 拼接成完整的代码。每个节点都需要转换成代码字符串，才能输出完整的源码。
            return node.body.map(codeGenerator).join('\n');

        case 'ExpressionStatement':
            return codeGenerator(node.expression) + ';';
        case 'CallExpression':
            return codeGenerator(node.callee) + '(' + node.arguments.map(codeGenerator).join(', ') + ')';
        case 'Identifier':
            return node.name;
        case 'NumberLiteral':
            return node.value;
        case 'StringLiteral':
            return '"' + node.value + '"';
    }
}