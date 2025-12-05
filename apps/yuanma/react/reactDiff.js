/**
 * 简易版 React Diff 算法实现
 *
 * 核心思想：
 * 1. 只比较同级元素，不跨级比较 (O(n))
 * 2. 两个不同类型的元素会产生不同的树
 * 3. 通过 key prop 来保持元素在不同渲染中的稳定性
 */

// 虚拟 DOM 结构示例
// const vdom = {
//   type: 'div',
//   props: { id: 'container' },
//   children: [
//     { type: 'span', key: 'a', props: { children: 'A' } },
//     { type: 'span', key: 'b', props: { children: 'B' } }
//   ]
// }

/**
 * Diff 入口函数
 * @param {HTMLElement} dom - 真实 DOM 节点（父容器）
 * @param {Object} newVNode - 新的虚拟 DOM
 * @param {Object} oldVNode - 旧的虚拟 DOM
 */
function diff(dom, newVNode, oldVNode) {
    // 1. 如果没有旧节点，直接创建新节点并挂载
    if (!oldVNode) {
        const newDom = createDOM(newVNode);
        dom.appendChild(newDom);
        return newDom;
    }

    // 2. 如果没有新节点，说明被删除了
    if (!newVNode) {
        // 注意：这里简化了，实际 React 可能会递归卸载组件
        dom.innerHTML = ''; 
        return null;
    }

    // 3. 如果节点类型不同，直接替换整个子树
    // 例如：div -> span
    if (newVNode.type !== oldVNode.type) {
        const newDom = createDOM(newVNode);
        // 替换旧 DOM
        dom.replaceChild(newDom, dom.firstChild); 
        return newDom;
    }

    // 4. 如果类型相同，更新属性并 Diff 子节点
    if (newVNode.type === oldVNode.type) {
        // 复用旧的真实 DOM
        const currentDom = dom.firstChild || dom; // 简化处理，假设 dom 就是对应的真实节点
        
        // 更新属性
        updateProps(currentDom, newVNode.props, oldVNode.props);

        // Diff 子节点 (核心逻辑)
        diffChildren(currentDom, newVNode.children, oldVNode.children);
        
        return currentDom;
    }
}

/**
 * Diff 子节点列表 (React Diff 的核心)
 * 包含 Key 的处理
 */
function diffChildren(parentDom, newChildren = [], oldChildren = []) {
    // 建立旧节点的 Map，方便通过 key 快速查找
    // KeyMap: { key1: { vnode: vNode1, index: 0 }, ... }
    const keyMap = {};
    oldChildren.forEach((child, index) => {
        const key = child.key || index; // 如果没 key 就用索引（React 默认行为）
        keyMap[key] = { vnode: child, index, dom: parentDom.childNodes[index] };
    });

    let lastIndex = 0; // 记录上一次访问的旧节点的最右下标，用于判断节点是否需要移动

    newChildren.forEach((newChild, newIndex) => {
        const newKey = newChild.key || newIndex;
        const match = keyMap[newKey];

        if (match) {
            // 1. 找到了可复用的节点
            const { vnode: oldChild, dom: oldDom } = match;
            
            // 递归更新这个节点的内容
            diff(oldDom, newChild, oldChild);

            // 判断是否需要移动节点
            // 如果当前旧节点的位置 (match.index) 小于 lastIndex，说明它原本在更后面，现在跑到前面了（或者前面的节点移到后面了），需要移动
            if (match.index < lastIndex) {
                // 移动操作：insertAfter 或者 append
                // 这里简化为 appendChild，实际上要插入到 newIndex 对应的位置
                // parentDom.insertBefore(oldDom, parentDom.childNodes[newIndex + 1]);
                console.log(`移动节点: ${newKey}`);
            } else {
                // 不需要移动，更新 lastIndex
                lastIndex = match.index;
            }
            
        } else {
            // 2. 没找到，说明是新增节点
            const newDom = createDOM(newChild);
            // 插入到正确的位置
            // 简化处理：直接 append，实际应根据 newIndex 插入
            parentDom.appendChild(newDom);
        }
    });

    // 3. 清理阶段：遍历旧节点，删除那些在新 children 中不存在的节点
    oldChildren.forEach((oldChild, index) => {
        const key = oldChild.key || index;
        // 简单的检查方式：如果在新的里面没找到对应的 key
        const isExist = newChildren.find(n => (n.key || newChildren.indexOf(n)) === key);
        if (!isExist) {
            const nodeToRemove = parentDom.childNodes[index];
            if(nodeToRemove) parentDom.removeChild(nodeToRemove);
        }
    });
}

/**
 * 辅助函数：创建真实 DOM
 */
function createDOM(vnode) {
    if (typeof vnode === 'string' || typeof vnode === 'number') {
        return document.createTextNode(vnode);
    }

    const dom = document.createElement(vnode.type);

    // 设置属性
    updateProps(dom, vnode.props, {});

    // 递归创建子节点
    if (vnode.children) {
        vnode.children.forEach(child => {
            dom.appendChild(createDOM(child));
        });
    }

    return dom;
}

/**
 * 辅助函数：更新属性
 */
function updateProps(dom, newProps = {}, oldProps = {}) {
    // 1. 移除旧属性中在新属性里不存在的
    Object.keys(oldProps).forEach(name => {
        if (name !== 'children' && !newProps.hasOwnProperty(name)) {
            dom.removeAttribute(name);
        }
    });

    // 2. 设置/更新新属性
    Object.keys(newProps).forEach(name => {
        if (name !== 'children' && oldProps[name] !== newProps[name]) {
            if (name.startsWith('on')) {
                // 事件处理 (简化版)
                const eventName = name.slice(2).toLowerCase();
                dom.removeEventListener(eventName, oldProps[name]);
                dom.addEventListener(eventName, newProps[name]);
            } else {
                dom.setAttribute(name, newProps[name]);
            }
        }
    });
}

// 导出 (如果是模块环境)
// export default diff;

