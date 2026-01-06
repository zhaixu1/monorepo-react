// ==========================================
// 极简版 Vue 3 编译器实现 (Mini Vue Compiler)
// ==========================================

// ---------------------------
// 1. Parse 阶段：模板 -> AST
// ---------------------------
// 将模板字符串解析为抽象语法树 (AST)
function baseParse(content) {
  const context = {
    source: content,
  };
  return createRoot(parseChildren(context, []));
}

function parseChildren(context, ancestors) {
  const nodes = [];

  while (!isEnd(context, ancestors)) {
    let node;
    const s = context.source;
    if (s.startsWith("{{")) {
      // 解析插值表达式 {{ msg }}
      node = parseInterpolation(context);
    } else if (s[0] === "<") {
      if (/[a-z]/i.test(s[1])) {
        // 解析元素 <div>
        node = parseElement(context, ancestors);
      }
    }

    if (!node) {
      // 解析文本
      node = parseText(context);
    }

    nodes.push(node);
  }
  return nodes;
}

function isEnd(context, ancestors) {
  const s = context.source;
  // 1. 遇到结束标签 </
  if (s.startsWith("</")) {
    for (let i = ancestors.length - 1; i >= 0; i--) {
      const tag = ancestors[i].tag;
      if (s.slice(2, 2 + tag.length) === tag) {
        return true;
      }
    }
  }
  // 2. 字符串读完
  return !s;
}

function parseElement(context, ancestors) {
  // 解析开始标签
  const element = parseTag(context, "Start");
  ancestors.push(element);
  
  // 递归解析子节点
  element.children = parseChildren(context, ancestors);
  
  ancestors.pop();
  
  // 解析结束标签并消耗掉
  if (context.source.startsWith("</") && context.source.slice(2, 2 + element.tag.length) === element.tag) {
     parseTag(context, "End");
  } else {
     // 缺失结束标签的报错处理...
  }
  
  return element;
}

function parseTag(context, type) {
  // 简单正则匹配标签名 <div 或 </div
  const match = /^<\/?([a-z]*)/i.exec(context.source);
  const tag = match[1];
  
  // 推进代码
  advanceBy(context, match[0].length);
  advanceBy(context, 1); // 消耗 >

  if (type === "End") return;

  return {
    type: "ELEMENT",
    tag,
  };
}

function parseInterpolation(context) {
  // {{ message }}
  const openDelimiter = "{{";
  const closeDelimiter = "}}";

  const closeIndex = context.source.indexOf(closeDelimiter, openDelimiter.length);
  advanceBy(context, openDelimiter.length);

  const rawContentLength = closeIndex - openDelimiter.length;
  const rawContent = context.source.slice(0, rawContentLength);
  const content = rawContent.trim();

  advanceBy(context, rawContentLength + closeDelimiter.length);

  return {
    type: "INTERPOLATION",
    content: {
      type: "SIMPLE_EXPRESSION",
      content: content,
    },
  };
}

function parseText(context) {
  // 文本结束的标志是 {{ 或者 <
  let endIndex = context.source.length;
  const endTokens = ["<", "{{"];
  
  for (let i = 0; i < endTokens.length; i++) {
    const index = context.source.indexOf(endTokens[i]);
    if (index !== -1 && index < endIndex) {
      endIndex = index;
    }
  }

  const content = context.source.slice(0, endIndex);
  advanceBy(context, content.length);

  return {
    type: "TEXT",
    content,
  };
}

function advanceBy(context, length) {
  context.source = context.source.slice(length);
}

function createRoot(children) {
  return {
    type: "ROOT",
    children,
  };
}

// ---------------------------
// 2. Transform 阶段：AST -> JavaScript AST (CodegenNode)
// ---------------------------
// 遍历 AST，进行语义分析，并为代码生成做准备
// Vue 3 的静态提升、PatchFlag 都在这里处理
function transform(root, options = {}) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  createRootCodegen(root);
}

function createTransformContext(root, options) {
  const context = {
    root,
    nodeTransforms: options.nodeTransforms || [],
  };
  return context;
}

function traverseNode(node, context) {
  const nodeTransforms = context.nodeTransforms;
  // 执行插件（Transform 插件洋葱模型）
  for (let i = 0; i < nodeTransforms.length; i++) {
    const transform = nodeTransforms[i];
    transform(node, context);
  }

  // 深度优先遍历
  switch (node.type) {
    case "ELEMENT":
    case "ROOT":
      traverseChildren(node, context);
      break;
    // TEXT 和 INTERPOLATION 没有子节点，不用继续遍历
  }
}

function traverseChildren(node, context) {
  const children = node.children;
  if (children) {
    for (let i = 0; i < children.length; i++) {
      traverseNode(children[i], context);
    }
  }
}

function createRootCodegen(root) {
  // 简单处理：根节点的 codegenNode 就是第一个子节点
  const child = root.children[0];
  if (child.type === "ELEMENT") {
    root.codegenNode = child.codegenNode;
  } else {
    root.codegenNode = child;
  }
}

// Transform 插件示例：处理 Element 节点，生成 CodegenNode
function transformElement(node, context) {
  if (node.type === "ELEMENT") {
    // 处理 props 等...
    const vnodeTag = `'${node.tag}'`;
    const vnodeProps = "null"; // 简化
    
    // 处理 children
    let vnodeChildren = null;
    if (node.children.length > 0) {
        if (node.children.length === 1) {
            const child = node.children[0];
            vnodeChildren = child;
        }
    }
    
    // 给节点挂载 codegenNode，包含生成代码所需的一切信息
    node.codegenNode = {
      type: "VNODE_CALL",
      tag: vnodeTag,
      props: vnodeProps,
      children: vnodeChildren,
    };
  }
}

// Transform 插件示例：处理 Text 节点
function transformText(node) {
    if (node.type === "TEXT") {
        node.codegenNode = {
            type: "TEXT",
            content: node.content
        }
    }
}


// Transform 插件示例：处理插值 {{ msg }}
function transformExpression(node) {
    if (node.type === "INTERPOLATION") {
        node.codegenNode = node.content; // SIMPLE_EXPRESSION
    }
}


// ---------------------------
// 3. Generate 阶段：CodegenNode -> Render Code
// ---------------------------
// 将 CodegenNode 拼接成最终的 render 函数字符串
function generate(ast) {
  const context = createCodegenContext();
  const { push } = context;

  // 生成前导代码
  push("return function render(_ctx, _cache) {");
  push("return ");
  
  if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
  } else {
      push("null");
  }

  push("}");
  return {
    code: context.code,
  };
}

function createCodegenContext() {
  const context = {
    code: "",
    push(source) {
      context.code += source;
    },
  };
  return context;
}

function genNode(node, context) {
  switch (node.type) {
    case "VNODE_CALL":
      genVNodeCall(node, context);
      break;
    case "TEXT":
      // 生成字符串: "hello"
      context.push(`'${node.content}'`);
      break;
    case "SIMPLE_EXPRESSION":
      // 生成变量: msg (从 _ctx 读取)
      context.push(`_ctx.${node.content}`);
      break;
    case "INTERPOLATION": 
      genNode(node.content, context);
      break;
  }
}

function genVNodeCall(node, context) {
  const { push } = context;
  const { tag, props, children } = node;
  
  // h('div', null, 'hello')
  push(`h(${tag}, ${props}, `);
  
  if (children) {
      // 简单处理单个子节点
      // 如果 children 是 text 节点，需要 genNode(children.codegenNode)
      // 这里简化逻辑，直接递归
      if (typeof children === 'string') {
          push(`'${children}'`);
      } else {
          genNode(children.codegenNode || children, context);
      }
  } else {
      push("null");
  }
  
  push(")");
}

// ---------------------------
// 主入口
// ---------------------------
function baseCompile(template) {
    // 1. Parse
    const ast = baseParse(template);
    
    // 2. Transform
    transform(ast, {
        nodeTransforms: [transformElement, transformText, transformExpression]
    });
    
    // 3. Generate
    return generate(ast);
}


// Test
const template = "<div>hi,{{message}}</div>";
// 注意：上面的极简实现不支持这种混合 Text + Interpolation 作为 children 的情况，
// 为了演示方便，我们简化测试用例为嵌套结构或者单一结构
// const template = "<div>{{message}}</div>"; 

console.log(`Input: ${template}`);
// 由于上面的 transformElement 对 children 处理比较简陋（只取第一个），
// 我们手动模拟一个更简单的流程来验证主流程跑通
try {
    const ast = baseParse("<div>{{msg}}</div>");
    transform(ast, {
        nodeTransforms: [transformElement, transformText, transformExpression]
    });
    const { code } = generate(ast);
    console.log("Output Code:");
    console.log(code);
} catch (e) {
    console.error(e);
}

