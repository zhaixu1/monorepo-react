// 转换
function traverser(ast, visitor) {
    function traverseArray(array, parent) {
        array.forEach((child) => {
            traverseNode(child, parent);
        });
    }

    function traverseNode(node, parent) {
        let methods = visitor[node.type]; // 获取对应类型的方法

        if (methods && methods.enter) {
            methods.enter(node, parent);
        }

        switch (node.type) {
            case "Program":
                traverseArray(node.body, node);
                break;
            case "CallExpression":
                traverseArray(node.params, node);
                break;
            case "NumberLiteral":
            case "StringLiteral":
                break;
            default:
                throw new Error(`Unknown node type: ${node.type}`);
        }
    }

    traverseNode(ast, null); // 遍历AST
}

function transformer(ast) {
    let newAst = {
        type: "Program",
        body: [],
    };

    ast._context = newAst.body; // 将新的AST的body赋值给ast的_context

    traverser(ast, {
        // 这一段是访问者（visitor）对象中的一个属性，针对 "NumberLiteral" 类型的 AST 节点。
        // 当遍历到类型为 NumberLiteral（数字字面量）的节点时，会调用 enter 方法。
        // enter 方法有两个参数：node 表示当前节点，parent 表示它的父节点。
        // 在 enter 方法中，会把一个新的 NumberLiteral 节点（只包含 type 和 value）压入父节点的 _context 数组里。
        // 这样相当于把旧的 AST 中的 NumberLiteral 节点迁移到新的 AST 上。
        NumberLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: "NumberLiteral",
                    value: node.value,
                });
            },
        },

        StringLiteral: {
            enter(node, parent) {
                parent._context.push({
                    type: "StringLiteral",
                    value: node.value,
                });
            },
        },

        CallExpression: {
            enter(node, parent) {
                let expression = {
                    type: "CallExpression",
                    callee: {
                        type: "Identifier",
                        name: node.name,
                    },
                    arguments: [],
                };

                node._context = expression.arguments;

                if (parent.type !== "CallExpression") {
                    expression = {
                        type: "ExpressionStatement",
                        expression: expression,
                    };
                }

                parent._context.push(expression);
            },
        },
    });

    return newAst;
}
