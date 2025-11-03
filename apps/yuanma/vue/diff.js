/**
 * Vue2 Diff 算法实现
 * 基于Vue2的虚拟DOM diff算法，用于高效更新真实DOM
 */

// 虚拟DOM节点类
class VNode {
  constructor(tag, data, children, text, elm) {
    this.tag = tag;           // 标签名
    this.data = data;         // 属性数据
    this.children = children; // 子节点
    this.text = text;         // 文本内容
    this.elm = elm;           // 对应的真实DOM节点
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
  if (a.tag !== 'input') return true;
  let i;
  const typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  const typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || (isTextInputType(typeA) && isTextInputType(typeB));
}

// 判断是否为文本输入类型
function isTextInputType(type) {
  return ['text', 'number', 'password', 'search', 'email', 'tel', 'url'].indexOf(type) > -1;
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
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
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
    el.className = data.class || '';
  }
  
  // 更新样式
  if (data.style !== oldData.style) {
    if (data.style) {
      for (const key in data.style) {
        el.style[key] = data.style[key];
      }
    } else {
      el.removeAttribute('style');
    }
  }
}

// 创建真实DOM节点
function createElm(vnode, insertedVnodeQueue) {
  let elm;
  const { data, children, tag } = vnode;
  
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
    if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
      removeAndInvokeRemoveHook(i, rm);
    }
    for (i = 0; i < cbs.remove.length; ++i) {
      cbs.remove[i](vnode, rm);
    }
    if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
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
    if (isDef(i = data.hook) && isDef(i = i.destroy)) {
      i(vnode);
    }
    for (i = 0; i < cbs.destroy.length; ++i) {
      cbs.destroy[i](vnode);
    }
  }
  if (isDef(i = vnode.children)) {
    for (j = 0; j < vnode.children.length; ++j) {
      invokeDestroyHook(vnode.children[j]);
    }
  }
}

// 添加节点
function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
  for (; startIdx <= endIdx; ++startIdx) {
    createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
  }
}

// 核心diff算法：比较子节点
function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
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

  if (process.env.NODE_ENV !== 'production') {
    checkDuplicateKeys(newCh);
  }

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // 跳过已处理的节点
    } else if (isUndef(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (sameVnode(oldStartVnode, newStartVnode)) {
      // 头头比较
      patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (sameVnode(oldEndVnode, newEndVnode)) {
      // 尾尾比较
      patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldStartVnode, newEndVnode)) {
      // 头尾比较
      patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
      canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (sameVnode(oldEndVnode, newStartVnode)) {
      // 尾头比较
      patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
      canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
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
        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
      } else {
        // 移动节点
        vnodeToMove = oldCh[idxInOld];
        if (sameVnode(vnodeToMove, newStartVnode)) {
          patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldCh[idxInOld] = undefined;
          canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
        } else {
          // 相同key但不同节点，创建新节点
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        }
      }
      newStartVnode = newCh[++newStartIdx];
    }
  }
  if (oldStartIdx > oldEndIdx) {
    refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
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

// 核心diff算法：比较单个节点
/**
 * 详细解释 patchVnode 函数：
 * 
 * patchVnode 是虚拟 DOM diff 算法的核心，用于对比“新旧”两个 vnode（虚拟节点），
 * 并把变化同步到真实的 DOM 元素上。
 * 它的主要流程如下：
 * 
 * 1. 判断两节点是否完全相同。如果是同一个对象（===），直接返回，无需更新。
 * 2. 如果新 vnode 已经有真实 DOM（elm），且有 vnode 数组 (ownerArray)，
 *    需要克隆 vnode，确保不会修改复用的对象。
 * 3. 获取节点真实 DOM（elm），同步到新 vnode。
 * 4. 若旧节点是异步占位符(isAsyncPlaceholder)，则判断异步组件是否已加载完毕。
 *    若加载完则 hydrate，否则保持为异步占位符（hydration 用于服务端渲染）。
 * 5. 复用静态内容优化。若新旧节点都为静态节点（即内容不会变），直接复用 componentInstance。
 * 6. 在新 vnode 的 data.hook 上执行 prepatch 钩子（如果有的话）。
 * 7. 分别获取新旧节点的 children 数组。
 * 8. 如果新 vnode 有 data，且可以 patch（通常表示这个 DOM 节点有属性/指令/事件等），
 *    则执行全局 update 钩子和用户自定义的 update 钩子。
 * 9. 如果新 vnode 没有 text（文本内容），且新旧都有 children：
 *    - 若 children 发生变更，递归 diff 两棵子树。
 *    - 或者如果只有新 children，有内容则批量插入。
 *    - 如果只有旧 children，全部移除。
 *    - 都没有 children，则清除文本。
 * 10. 若新 vnode.text 定义了文本内容，则直接更新。
 * 
 * 总结：
 * patchVnode 会严格比较新旧 vnode 的结构，包括属性、子节点、文本内容等，并且递归地同步这些差异到实际的 DOM 上。
 * 这是 Vue2 Diff 算法中同层节点比对与最小化 DOM 更新操作的关键实现。
 */

function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
  if (oldVnode === vnode) {
    return;
  }

  if (isDef(vnode.elm) && isDef(ownerArray)) {
    // 克隆节点
    vnode = ownerArray[index] = cloneVNode(vnode);
  }

  const elm = vnode.elm = oldVnode.elm;

  if (isTrue(oldVnode.isAsyncPlaceholder)) {
    if (isDef(vnode.asyncFactory.resolved)) {
      hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
    } else {
      vnode.isAsyncPlaceholder = true;
    }
    return;
  }

  // vnode 的 isStatic 标记一般在编译阶段由模板编译器生成。
  // 当一个 vnode（虚拟节点）对应的模板片段被静态分析判定为静态内容，例如完全由常量组成、没有动态绑定或表达式时，
  // 编译器会在生成 vnode 时标记 isStatic: true。
  // 这样在 diff 阶段就可以复用静态节点，避免无意义的比对和渲染，提高性能。
  // 例如：<div class="static">静态内容</div> 生成的 vnode 会有 isStatic: true。
  if (isTrue(vnode.isStatic) &&
    isTrue(oldVnode.isStatic) &&
    vnode.key === oldVnode.key &&
    (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
  ) {
    vnode.componentInstance = oldVnode.componentInstance;
    return;
  }

  let i;
  const data = vnode.data;
  if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
    i(oldVnode, vnode);
  }

  const oldCh = oldVnode.children;
  const ch = vnode.children;
  if (isDef(data) && isPatchable(vnode)) {
    for (i = 0; i < cbs.update.length; ++i) {
      cbs.update[i](oldVnode, vnode);
    }
    if (isDef(i = data.hook) && isDef(i = i.update)) {
      i(oldVnode, vnode);
    }
  }
  if (isUndef(vnode.text)) {
    if (isDef(oldCh) && isDef(ch)) {
      if (oldCh !== ch) {
        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
      }
    } else if (isDef(ch)) {
      if (process.env.NODE_ENV !== 'production') {
        checkDuplicateKeys(ch);
      }
      if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
      addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
    } else if (isDef(oldCh)) {
      removeVnodes(elm, oldCh, 0, oldCh.length - 1);
    } else if (isDef(oldVnode.text)) {
      nodeOps.setTextContent(elm, '');
    }
  } else if (oldVnode.text !== vnode.text) {
    nodeOps.setTextContent(elm, vnode.text);
  }
  if (isDef(data)) {
    if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
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
  }
};

// 模块钩子
const cbs = {
  create: [],
  update: [],
  destroy: [],
  remove: []
};

// 主patch函数
function patch(oldVnode, vnode, hydrating, removeOnly) {
  if (isUndef(vnode)) {
    if (isDef(oldVnode)) {
      invokeDestroyHook(oldVnode);
    }
    return;
  }

  let isInitialPatch = false;
  const insertedVnodeQueue = [];

  if (isUndef(oldVnode)) {
    // 创建新节点
    isInitialPatch = true;
    createElm(vnode, insertedVnodeQueue);
  } else {
    // nodeType 是DOM节点的类型（1表示元素节点，3表示文本节点）。如果 oldVnode 是真实DOM节点，则 oldVnode.nodeType 有值
    const isRealElement = isDef(oldVnode.nodeType);
    if (!isRealElement && sameVnode(oldVnode, vnode)) {
      // 比较相同节点
      patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
    } else {
      if (isRealElement) {
        // 将真实节点 转换为 虚拟节点
        oldVnode = emptyNodeAt(oldVnode);
      }

      // 创建新节点
      const oldElm = oldVnode.elm;
      const parentElm = nodeOps.parentNode(oldElm);

      createElm(
        vnode,
        insertedVnodeQueue,
        oldElm._leaveCb ? null : parentElm,
        nodeOps.nextSibling(oldElm)
      );

      // 更新父节点
      if (isDef(vnode.parent)) {
        let ancestor = vnode.parent;
        const patchable = isPatchable(vnode);
        while (ancestor) {
          for (let i = 0; i < cbs.destroy.length; ++i) {
            cbs.destroy[i](ancestor);
          }
          ancestor.elm = vnode.elm;
          if (patchable) {
            for (let i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, ancestor);
            }
            const insert = ancestor.data.hook.insert;
            if (insert.merged) {
              for (let i = 1; i < insert.fns.length; i++) {
                insert.fns[i]();
              }
            } else {
              insert();
            }
          } else {
            registerRef(ancestor);
          }
          ancestor = ancestor.parent;
        }
      }

      if (isDef(parentElm)) {
        removeVnodes(parentElm, [oldVnode], 0, 0);
      } else if (isDef(oldVnode.tag)) {
        invokeDestroyHook(oldVnode);
      }
    }
  }

  invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
  return vnode.elm;
}

// 创建空节点
function emptyNodeAt(elm) {
  return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
}

// 调用插入钩子
function invokeInsertHook(vnode, queue, initial) {
  if (isTrue(initial) && isDef(vnode.parent)) {
    vnode.parent.data.pendingInsert = queue;
  } else {
    for (let i = 0; i < queue.length; ++i) {
      queue[i].data.hook.insert(queue[i]);
    }
  }
}

// 注册引用
function registerRef(vnode, isRemoval) {
  const key = vnode.data.ref;
  if (!isDef(key)) return;

  const vm = vnode.context;
  const ref = vnode.componentInstance || vnode.elm;
  const refs = vm.$refs;
  const refInFor = isInFor(vnode);
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

// 判断是否在v-for中
function isInFor(vnode) {
  while (vnode) {
    if (vnode.data && vnode.data.for) {
      return true;
    }
    vnode = vnode.parent;
  }
  return false;
}

// 移除数组中的元素
function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

// 导出主要函数
module.exports = {
  VNode,
  createTextVNode,
  createElementVNode,
  patch,
  sameVnode,
  updateChildren,
  patchVnode
};

// 示例用法
if (require.main === module) {
  // 创建虚拟DOM树
  const oldTree = createElementVNode('div', { id: 'app' }, [
    createElementVNode('h1', { key: 'title' }, [createTextVNode('Hello')]),
    createElementVNode('p', { key: 'content' }, [createTextVNode('World')])
  ]);

  const newTree = createElementVNode('div', { id: 'app' }, [
    createElementVNode('h1', { key: 'title' }, [createTextVNode('Hello')]),
    createElementVNode('p', { key: 'content' }, [createTextVNode('Vue')]),
    createElementVNode('span', { key: 'new' }, [createTextVNode('New!')])
  ]);

  console.log('Vue2 Diff算法实现完成');
  console.log('旧虚拟DOM:', oldTree);
  console.log('新虚拟DOM:', newTree);
}
