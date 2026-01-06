// ==========================================
// 极简版 React 编译器 (Babel Plugin 模拟)
// ==========================================
// React 的"编译器"主要指 JSX -> JS 的转换工具 (Babel)
// 现代 React (v19/Compiler) 引入了自动 memoization 编译器，这里模拟传统 JSX 转换

/**
 * 模拟 Babel 的 JSX 转换过程
 * 输入: const element = <div className="box">Hello {name}</div>;
 * 输出: const element = React.createElement("div", { className: "box" }, "Hello ", name);
 */
function miniReactCompiler(code) {
    console.log("--- Compiler Phase (JSX -> JS) ---");
    
    // 简单的正则替换模拟（实际是 AST 转换）
    // 1. 识别标签 <tag ...>...</tag>
    // 这是一个极度简化的模拟，仅用于演示概念
    
    // 假设输入代码是：'<div id="app">Hello</div>'
    const tagRegex = /<([a-z]+)\s*([^>]*)>(.*?)<\/\1>/;
    const match = code.match(tagRegex);
    
    if (match) {
        const [full, tag, propsStr, children] = match;
        
        // 解析属性 id="app" -> {id: "app"}
        const propsObj = {};
        if (propsStr) {
            const propMatch = propsStr.match(/([a-z]+)="([^"]*)"/);
            if (propMatch) {
                propsObj[propMatch[1]] = propMatch[2];
            }
        }
        
        // 生成 createElement 调用代码
        const compiled = `React.createElement("${tag}", ${JSON.stringify(propsObj)}, "${children}")`;
        console.log(`Input JSX: ${code}`);
        console.log(`Output JS: ${compiled}`);
        return compiled;
    }
    return code;
}


// ==========================================
// 极简版 React 渲染器 (React Reconciler + Host Config)
// ==========================================

// 1. Fiber 节点结构（为了简化，我们这里直接用 VDOM 对象，不完整实现 Fiber 链表）
function createFiber(type, props) {
    return {
        type,
        props,
        dom: null, // 真实 DOM 引用
        child: null,
        sibling: null,
        return: null,
    };
}

// 2. React.createElement 实现
const React = {
    createElement(type, props, ...children) {
        return {
            type,
            props: {
                ...props,
                children: children.map(child =>
                    typeof child === "object"
                        ? child
                        : { type: "TEXT_ELEMENT", props: { nodeValue: child, children: [] } }
                ),
            },
        };
    },
};

// 3. 渲染器核心 (Reconciler)
// 负责 Diff 算法、任务调度、副作用收集
function render(element, container) {
    console.log("\n--- Renderer Phase (Reconciler & Commit) ---");
    
    // 创建根 Fiber
    const wipRoot = {
        dom: container,
        props: {
            children: [element],
        },
    };

    // 递归处理子节点（简化版 Reconciliation）
    commitRoot(wipRoot.props.children[0], container);
}

// 4. 提交阶段 (Commit Phase) - 这里包含了 Host Config 的逻辑
// 负责将变化应用到宿主环境 (DOM)
function commitRoot(fiber, parentDom) {
    if (!fiber) return;

    // A. 创建真实 DOM (Host Config: createInstance)
    let dom = fiber.dom;
    if (!dom) {
        if (fiber.type === "TEXT_ELEMENT") {
            dom = document.createTextNode(""); // Host Config: createTextInstance
        } else {
            dom = document.createElement(fiber.type); // Host Config: createInstance
        }
        fiber.dom = dom;
    }

    // B. 更新属性 (Host Config: commitUpdate)
    const isProperty = key => key !== "children";
    Object.keys(fiber.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = fiber.props[name];
        });

    // C. 插入到父节点 (Host Config: appendInitialChild)
    // 注意：真实 React 会处理 Fiber 树的遍历，这里简化为直接递归
    if (parentDom) {
        parentDom.appendChild(dom);
        console.log(`[Commit] Appended <${fiber.type === 'TEXT_ELEMENT' ? 'text' : fiber.type}> to parent`);
    }

    // D. 递归处理子节点
    if (fiber.props.children) {
        fiber.props.children.forEach(child => commitRoot(child, dom));
    }
}


// ==========================================
// 运行演示
// ==========================================

// 1. 模拟编译过程
const jsxCode = '<div id="foo">Hello React</div>';
// 实际上这一步是在构建时(Build time)由 Babel 完成的
// const jsCode = miniReactCompiler(jsxCode); 
// 也就是: React.createElement("div", {id: "foo"}, "Hello React")

// 2. 运行时
// 构造 VDOM
const element = React.createElement(
    "div",
    { id: "foo", style: "background: salmon" },
    React.createElement("h1", null, "Hello React Renderer"),
    "Text Content"
);

// 模拟浏览器环境运行
if (typeof document !== 'undefined') {
    // 真实浏览器环境
    const root = document.getElementById('root') || document.body;
    render(element, root);
} else {
    // Node 环境模拟 DOM 操作
    console.log("Node environment detected, mocking DOM operations...");
    const mockContainer = {
        appendChild: (child) => console.log("Container received child:", child)
    };
    // 为了让上面的 commitRoot 跑通，我们需要 mock document
    global.document = {
        createElement: (tag) => ({ 
            tag, 
            appendChild: (c) => console.log(`DOM <${tag}> appended child`),
            style: {} 
        }),
        createTextNode: (text) => ({ text, tag: 'TEXT' })
    };
    
    render(element, mockContainer);
}

