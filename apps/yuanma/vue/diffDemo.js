/**
 * Vue2 Diff 算法实现
 * 基于Vue2的虚拟DOM diff算法，用于高效更新真实DOM
 */

// 虚拟DOM节点类
class VNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag; // 标签名
        this.data = data; // 属性数据
        this.children = children; // 子节点
        this.text = text; // 文本内容
        this.elm = elm; // 对应的真实DOM节点
        this.key = data && data.key; // key值，用于优化diff
    }
}

// 创建文本节点
function createTextVNode(text) {
    return new VNode(undefined, undefined, undefined, text);
}

// 创建元素节点
function createElementVNode(tag, data, children) {
    return new VNode(tag, data, children);
}

// 判断是否为相同节点
function sameVnode(a, b) {
    return (
        a.key === b.key &&
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
    );
}

// 判断是否为相同输入类型
function sameInputType(a, b) {
    if (a.tag !== "input") return true;
    let i;
    const typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type;
    const typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type;
    return (
        typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB))
    );
}

// 判断是否为文本输入类型
function isTextInputType(type) {
    return (
        ["text", "number", "password", "search", "email", "tel", "url"].indexOf(
            type
        ) > -1
    );
}

// 工具函数：判断值是否已定义
function isDef(v) {
    return v !== undefined && v !== null;
}

// 工具函数：判断值是否未定义
function isUndef(v) {
    return v === undefined || v === null;
}

// 工具函数：判断是否为原始类型
function isPrimitive(value) {
    return (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "symbol" ||
        typeof value === "boolean"
    );
}

// 更新节点属性
function updateAttrs(oldVnode, vnode) {
    const el = vnode.elm;
    const oldAttrs = oldVnode.data.attrs || {};
    const attrs = vnode.data.attrs || {};

    // 更新属性
    for (const key in attrs) {
        const cur = attrs[key];
        const old = oldAttrs[key];
        if (old !== cur) {
            el.setAttribute(key, cur);
        }
    }

    // 删除不再存在的属性
    for (const key in oldAttrs) {
        if (isUndef(attrs[key])) {
            el.removeAttribute(key);
        }
    }
}

// 更新节点事件
function updateListeners(oldVnode, vnode) {
    const el = vnode.elm;
    const oldOn = oldVnode.data.on || {};
    const on = vnode.data.on || {};

    // 更新事件监听器
    for (const name in on) {
        const cur = on[name];
        const old = oldOn[name];
        if (old !== cur) {
            if (isUndef(old)) {
                el.addEventListener(name, cur);
            } else {
                el.removeEventListener(name, old);
                el.addEventListener(name, cur);
            }
        }
    }

    // 删除不再存在的事件监听器
    for (const name in oldOn) {
        if (isUndef(on[name])) {
            el.removeEventListener(name, oldOn[name]);
        }
    }
}

// 更新节点数据
function updateVnodeData(oldVnode, vnode) {
    const el = vnode.elm;
    const oldData = oldVnode.data || {};
    const data = vnode.data || {};

    // 更新属性
    if (data.attrs) {
        updateAttrs(oldVnode, vnode);
    }

    // 更新事件
    if (data.on) {
        updateListeners(oldVnode, vnode);
    }

    // 更新类名
    if (data.class !== oldData.class) {
        el.className = data.class || "";
    }

    // 更新样式
    if (data.style !== oldData.style) {
        if (data.style) {
            for (const key in data.style) {
                el.style[key] = data.style[key];
            }
        } else {
            el.removeAttribute("style");
        }
    }
}

// 创建真实DOM节点
function createElm(vnode, insertedVnodeQueue) {
    let elm;
    const data = vnode.data;
    const children = vnode.children;
    const tag = vnode.tag;

    if (tag !== undefined) {
        // 创建元素节点
        elm = vnode.elm = document.createElement(tag);

        // 设置属性
        if (data) {
            updateVnodeData({ data: {} }, vnode);
        }

        // 创建子节点
        if (Array.isArray(children)) {
            for (let i = 0; i < children.length; ++i) {
                elm.appendChild(createElm(children[i], insertedVnodeQueue));
            }
        } else if (isPrimitive(vnode.text)) {
            elm.appendChild(document.createTextNode(vnode.text));
        }
    } else {
        // 创建文本节点
        elm = vnode.elm = document.createTextNode(vnode.text);
    }

    return elm;
}

// 移除节点
function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
        const ch = vnodes[startIdx];
        if (ch) {
            if (ch.tag) {
                removeAndInvokeRemoveHook(ch);
                invokeDestroyHook(ch);
            } else {
                removeNode(ch.elm);
            }
        }
    }
}

// 移除节点并调用移除钩子
function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
        let i;
        const listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
            rm.listeners += listeners;
        } else {
            const remove = createRmCb(vnode.elm, listeners);
            rm = { vnode, remove, listeners };
        }
        // 递归调用子节点的移除钩子
        if (
            isDef((i = vnode.componentInstance)) &&
            isDef((i = i._vnode)) &&
            isDef(i.data)
        ) {
            removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
            cbs.remove[i](vnode, rm);
        }
        if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
            i(vnode, rm);
        } else {
            rm();
        }
    } else {
        removeNode(vnode.elm);
    }
}

// 创建移除回调
function createRmCb(childElm, listeners) {
    function remove() {
        if (--remove.listeners === 0) {
            removeNode(childElm);
        }
    }
    remove.listeners = listeners;
    return remove;
}

// 移除DOM节点
function removeNode(el) {
    const parent = el.parentNode;
    if (isDef(parent)) {
        parent.removeChild(el);
    }
}

// 调用销毁钩子
function invokeDestroyHook(vnode) {
    let i, j;
    const data = vnode.data;
    if (isDef(data)) {
        if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
            i(vnode);
        }
        for (i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](vnode);
        }
    }
    if (isDef((i = vnode.children))) {
        for (j = 0; j < vnode.children.length; ++j) {
            invokeDestroyHook(vnode.children[j]);
        }
    }
}

// 添加节点
function addVnodes(
    parentElm,
    refElm,
    vnodes,
    startIdx,
    endIdx,
    insertedVnodeQueue
) {
    for (; startIdx <= endIdx; ++startIdx) {
        createElm(
            vnodes[startIdx],
            insertedVnodeQueue,
            parentElm,
            refElm,
            false,
            vnodes,
            startIdx
        );
    }
}

// 核心diff算法：比较子节点
function updateChildren(
    parentElm,
    oldCh,
    newCh,
    insertedVnodeQueue,
    removeOnly
) {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // 移除only模式，用于transition-group
    const canMove = !removeOnly;

    if (process.env.NODE_ENV !== "production") {
        checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
            oldStartVnode = oldCh[++oldStartIdx]; // 跳过已处理的节点
        } else if (isUndef(oldEndVnode)) {
            oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
            // 头头比较
            patchVnode(
                oldStartVnode,
                newStartVnode,
                insertedVnodeQueue,
                newCh,
                newStartIdx
            );
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            // 尾尾比较
            patchVnode(
                oldEndVnode,
                newEndVnode,
                insertedVnodeQueue,
                newCh,
                newEndIdx
            );
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            // 头尾比较
            patchVnode(
                oldStartVnode,
                newEndVnode,
                insertedVnodeQueue,
                newCh,
                newEndIdx
            );
            canMove &&
                nodeOps.insertBefore(
                    parentElm,
                    oldStartVnode.elm,
                    nodeOps.nextSibling(oldEndVnode.elm)
                );
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            // 尾头比较
            patchVnode(
                oldEndVnode,
                newStartVnode,
                insertedVnodeQueue,
                newCh,
                newStartIdx
            );
            canMove &&
                nodeOps.insertBefore(
                    parentElm,
                    oldEndVnode.elm,
                    oldStartVnode.elm
                );
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        } else {
            // 建立key到索引的映射
            if (isUndef(oldKeyToIdx)) {
                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
            }
            idxInOld = isDef(newStartVnode.key)
                ? oldKeyToIdx[newStartVnode.key]
                : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
            if (isUndef(idxInOld)) {
                // 新节点
                createElm(
                    newStartVnode,
                    insertedVnodeQueue,
                    parentElm,
                    oldStartVnode.elm,
                    false,
                    newCh,
                    newStartIdx
                );
            } else {
                // 移动节点
                vnodeToMove = oldCh[idxInOld];
                if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(
                        vnodeToMove,
                        newStartVnode,
                        insertedVnodeQueue,
                        newCh,
                        newStartIdx
                    );
                    oldCh[idxInOld] = undefined;
                    canMove &&
                        nodeOps.insertBefore(
                            parentElm,
                            vnodeToMove.elm,
                            oldStartVnode.elm
                        );
                } else {
                    // 相同key但不同节点，创建新节点
                    createElm(
                        newStartVnode,
                        insertedVnodeQueue,
                        parentElm,
                        oldStartVnode.elm,
                        false,
                        newCh,
                        newStartIdx
                    );
                }
            }
            newStartVnode = newCh[++newStartIdx];
        }
    }
    if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1])
            ? null
            : newCh[newEndIdx + 1].elm;
        addVnodes(
            parentElm,
            refElm,
            newCh,
            newStartIdx,
            newEndIdx,
            insertedVnodeQueue
        );
    } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
}

// 创建key到索引的映射
function createKeyToOldIdx(children, beginIdx, endIdx) {
    let i, key;
    const map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
        key = children[i].key;
        if (isDef(key)) {
            map[key] = i;
        }
    }
    return map;
}

// 在旧节点中查找索引
function findIdxInOld(node, oldCh, start, end) {
    for (let i = start; i < end; i++) {
        const c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) {
            return i;
        }
    }
}

// 检查重复的key
function checkDuplicateKeys(children) {
    const seenKeys = {};
    for (let i = 0; i < children.length; i++) {
        const vnode = children[i];
        const key = vnode.key;
        if (isDef(key)) {
            if (seenKeys[key]) {
                console.warn(
                    `Duplicate keys detected: '${key}'. This may cause an update error.`,
                    vnode
                );
            } else {
                seenKeys[key] = true;
            }
        }
    }
}

/**
 * patchVnode 函数
 *
 * patchVnode 是虚拟 DOM diff 算法的核心，用于对比“新旧”两个 vnode（虚拟节点），
 * 并把变化同步到真实的 DOM 元素上。
 * 它的主要流程如下：
 *
 * oldVnode: 旧的虚拟节点
 * node: 新的虚拟节点
 * insertedVnodeQueue: 插入虚拟节点队列
 * ownerArray: 所有者数组
 * index: 索引
 * removeOnly: 是否只移除
 */
function patchVnode(
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
) {
    if (oldVnode === vnode) {
        return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
        // 克隆节点
        vnode = ownerArray[index] = cloneVNode(vnode);
    }

    const elm = (vnode.elm = oldVnode.elm);

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
            vnode.isAsyncPlaceholder = true;
        }
        return;
    }

    // 静态节点复用
    if (
        isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return;
    }

    let i;
    const data = vnode.data;
    if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {
        i(oldVnode, vnode);
    }

    const oldCh = oldVnode.children;
    const ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) {
            cbs.update[i](oldVnode, vnode);
        }
        if (isDef((i = data.hook)) && isDef((i = i.update))) {
            i(oldVnode, vnode);
        }
    }
    if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
            if (oldCh !== ch) {
                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
            }
        } else if (isDef(ch)) {
            if (process.env.NODE_ENV !== "production") {
                checkDuplicateKeys(ch);
            }
            if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, "");
            }
            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
            nodeOps.setTextContent(elm, "");
        }
    } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
        if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
            i(oldVnode, vnode);
        }
    }
}

// 判断节点是否可patch
function isPatchable(vnode) {
    while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag);
}

// 克隆虚拟节点
function cloneVNode(vnode, deep) {
    const cloned = new VNode(
        vnode.tag,
        vnode.data,
        vnode.children && vnode.children.slice(),
        vnode.text,
        vnode.elm,
        vnode.context,
        vnode.componentOptions,
        vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    if (deep && vnode.children) {
        cloned.children = cloneVNodes(vnode.children, true);
    }
    return cloned;
}

// 克隆虚拟节点数组
function cloneVNodes(vnodes, deep) {
    const len = vnodes.length;
    const res = new Array(len);
    for (let i = 0; i < len; i++) {
        res[i] = cloneVNode(vnodes[i], deep);
    }
    return res;
}

// 工具函数
function isTrue(v) {
    return v === true;
}

// DOM操作封装
const nodeOps = {
    createElement: (tag) => document.createElement(tag),
    createTextNode: (text) => document.createTextNode(text),
    appendChild: (node, child) => node.appendChild(child),
    removeChild: (node, child) => node.removeChild(child),
    insertBefore: (parentNode, newNode, referenceNode) => {
        parentNode.insertBefore(newNode, referenceNode);
    },
    nextSibling: (node) => node.nextSibling,
    setTextContent: (node, text) => {
        node.textContent = text;
    },
};

// 模块钩子
const cbs = {
    create: [],
    update: [],
    destroy: [],
    remove: [],
};

/**
 * patch - 主Patch函数
 * @param {*} oldVnode 旧的虚拟节点
 * @param {*} vnode 新的虚拟节点
 * @param {*} hydrating 是否为异步占位符
 * @param {*} removeOnly 是否只移除
 */
function patch(oldVnode, vnode, hydrating, removeOnly) {
    if(isUndef(vnode)) {
        if(isDef(oldVnode)) { 
            // 既没有新的虚拟节点，也没有旧的虚拟节点，直接销毁旧的虚拟节点
            invokeDestroyHook(oldVnode);
        }
    }

    let isInitialPatch = false; // 是否是初始化补丁
    const insertedVnodeQueue = []; // 插入虚拟节点队列

    if(isUndef(oldVnode)) {
        // 如果没有旧的虚拟节点，则认为是初始化补丁
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue)
    }else {
        const isRealElement = isDef(oldVnode.nodeType); // 是否是真实DOM节点
        if(!isRealElement && sameVnode(oldVnode, vnode)) {
            // 如果 不是真实DOM节点 并且 旧的虚拟节点和新的虚拟节点是相同的节点，则进行patch
            patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        }else {
            if(isRealElement) {
                // 如果旧的虚拟节点是真实DOM节点，则创建虚拟节点， 
                // 将真实节点 转换为 虚拟节点
                oldVnode = emptyNodeAt(oldVnode);
            }
            
            // 获取旧节点的真实DOM节点
            const oldElm = oldVnode.elm;
            // 获取旧节点的父节点
            const parentElm = nodeOps.parentNode(oldElm);
            // 这里的主旨是：在新的VNode和旧VNode不是同一个节点或者旧VNode是DOM元素时，先将新的VNode对应的真实DOM插入到旧VNode的位置，然后移除旧的节点
            // 1. createElm 会创建新的VNode对应的真实DOM并插入到父节点中（并放到 oldElm 的下一个兄弟位置，实现“替换”效果）。
            // 2. 之后还需要从DOM树中移除旧的VNode真实DOM。通常这部分在 createElm 之后紧跟着执行 removeVnodes 来完成。
            createElm(
                vnode,
                insertedVnodeQueue,
                oldElm._leaveCb ? null : parentElm,
                nodeOps.nextSibling(oldElm)
            )

            // 更新父节点
            if(isDef(vnode.parent)) {
                // 如果 vnode.parent有值
                let ancestor = vnode.parent; // 获取父节点
                const patchable = isPatchable(vnode); // 判断节点是否可patch

                while(ancestor) {
                    for(let i = 0; i < cbs.destroy.length; ++i) {
                        cbs.destroy[i](ancestor);
                    }
                    ancestor.elm = vnode.elm;
                    if(patchable) {
                        for(let i = 0; i < cbs.create.length; ++i) {
                            cbs.create[i](emptyNode, ancestor);
                        }
                    }
                    const insert = ancestor.data.hook.insert;
                    if(insert.merged) {
                        for(let i = 1; i < insert.fns.length; i++) {
                            insert.fns[i]();
                        }
                    }else {
                        insert();
                    }
                    ancestor = ancestor.parent;
                }
            }
        }

    }

}
