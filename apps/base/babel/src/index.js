const core = require("@babel/core");

const sourceCode = `const hello = () => {};`;

const myPlugin = {
    visitor: {
        Identifier: (path) => {
            if (path.node.name === "hello") {
                path.node.name = "world";
            }
        },
    },
};


const targetSource = core.transform(sourceCode, {
    plugins: [myPlugin],
}).code;

console.log(targetSource);