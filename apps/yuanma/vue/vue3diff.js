/**
 * Vue3 Diff 算法实现
 * 基于Vue3的虚拟DOM diff算法，包含PatchFlags和Block Tree优化
 */

// PatchFlags 常量 - 精确标记动态内容
const PatchFlags = {
  TEXT: 1,                    // 动态文本内容
  CLASS: 2,                   // 动态class
  STYLE: 4,                   // 动态style
  PROPS: 8,                   // 动态props
  FULL_PROPS: 16,             // 全量props检查
  HYDRATE_EVENTS: 32,         // 事件监听器
  STABLE_FRAGMENT: 64,        // 稳定的fragment
  KEYED_FRAGMENT: 128,        // 带key的fragment
  UNKEYED_FRAGMENT: 256,      // 不带key的fragment
  NEED_PATCH: 512,            // 需要patch
  DYNAMIC_SLOTS: 1024,        // 动态slots
  HOISTED: -1,                // 静态提升的节点
  BAIL: -2                    // 需要全量diff
};

// ShapeFlags 节点类型标记
const ShapeFlags = {
  ELEMENT: 1,                 // 元素节点
  FUNCTIONAL_COMPONENT: 2,    // 函数组件
  STATEFUL_COMPONENT: 4,      // 状态组件
  TEXT_CHILDREN: 8,           // 文本子节点
  ARRAY_CHILDREN: 16,         // 数组子节点
  SLOTS_CHILDREN: 32,         // 插槽子节点
  TELEPORT: 64,               // Teleport
  SUSPENSE: 128,              // Suspense
  COMPONENT_SHOULD_KEEP_ALIVE: 256,
  COMPONENT_KEPT_ALIVE: 512
};

/**
 * VNode 类
 * @param {*} type 节点类型（标签名或组件）
 * @param {*} props 属性
 * @param {*} children 子节点
 * @param {*} patchFlag PatchFlags标记
 * @param {*} dynamicProps 动态属性列表
 * @param {*} shapeFlag 节点类型标记
 * @param {*} elm 真实DOM节点
 * @param {*} key key值
 * @param {*} isBlock 是否为Block节点
 * @param {*} dynamicChildren 动态子节点列表
 */
class VNode {
  constructor(type, props, children, patchFlag, dynamicProps, shapeFlag, elm) {
    this.type = type;                    // 节点类型（标签名或组件）
    this.props = props;                  // 属性
    this.children = children;            // 子节点
    this.patchFlag = patchFlag;          // PatchFlags标记
    this.dynamicProps = dynamicProps;    // 动态属性列表
    this.shapeFlag = shapeFlag;          // 节点类型标记
    this.elm = elm;                      // 真实DOM节点
    this.key = props?.key;               // key值
    this.isBlock = false;                // 是否为Block节点
    this.dynamicChildren = null;         // 动态子节点列表
  }
}

// 创建虚拟DOM节点
function createVNode(type, props, children, patchFlag, dynamicProps) {
  const shapeFlag = typeof type === 'string' 
    ? ShapeFlags.ELEMENT 
    : ShapeFlags.STATEFUL_COMPONENT;

  return new VNode(type, props, children, patchFlag, dynamicProps, shapeFlag);
}

// 创建文本节点
function createTextVNode(text) {
  return new VNode(
    undefined, 
    undefined, 
    text, 
    PatchFlags.TEXT, 
    undefined, 
    ShapeFlags.TEXT_CHILDREN
  );
}

/**
 * block 节点是 Vue 3 Diff 算法中的一个核心优化概念。
 * 
 * 在 Vue 2 中，所有子节点都要递归参与 diff 运算，而在 Vue 3，
 * 采用编译期静态提升（static tree hoisting）和“Block Tree”结构，
 * 把拥有动态子节点的区域用 block 包裹，记录动态子节点集合。
 *
 * 这样在 patch 过程中，只有 Block 记录的动态子节点需要被递归 diff，
 * 静态内容则直接复用原有 DOM，无需频繁比对极大提升性能，尤其在模板存在较多静态内容时。
 *
 * 通常 Block 节点是在编译时由模板编译器主动插入的。
 * 当检测到某一层有动态属性或 v-for、v-if、动态 children 时，会包裹为 block 节点并收集其动态子节点。
 * 
 * 例如：
 *   <div>
 *     <span :class="dynamicClass"></span>   // 动态
 *     <p>static text</p>                    // 静态
 *   </div>
 *   编译时会将 <div> 变为 Block 节点，并只收集 <span> 为动态孩子，<p> 不参与动态 diff。
 *
 * 所以 Block 的意义是：
 *   - 局部收集、隔离动态节点，优化对子树的 diff 运算。
 *   - 实现动态区域最小 diff，静态区域直接复用。
 *   - 支撑 patchFlag 静态提升、只比较需要 diff 的部分。
 */
// 创建Block节点
function createBlock(type, props, children, patchFlag, dynamicProps) {
  const vnode = createVNode(type, props, children, patchFlag, dynamicProps);
  vnode.isBlock = true;
  return vnode;
}

// 工具函数：判断值是否已定义
function isDef(v) {
  return v !== undefined && v !== null;
}

// 工具函数：判断值是否未定义
function isUndef(v) {
  return v === undefined || v === null;
}

// 工具函数：判断是否为数组
function isArray(arr) {
  return Array.isArray(arr);
}

// 工具函数：判断是否为字符串
function isString(str) {
  return typeof str === 'string';
}

// 工具函数：判断是否为函数
function isFunction(fn) {
  return typeof fn === 'function';
}

// 判断是否为相同节点（Vue3优化版）
function isSameVNodeType(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}

// 判断是否需要全量diff
function shouldSkipPatch(vnode) {
  return vnode.patchFlag === PatchFlags.HOISTED || 
         vnode.patchFlag === PatchFlags.BAIL;
}

// 更新文本内容
function patchText(oldVNode, newVNode, container) {
  if (oldVNode.children !== newVNode.children) {
    container.textContent = newVNode.children;
  }
}

// 更新元素属性
function patchProps(oldVNode, newVNode, el) {
  const { props: oldProps, patchFlag: oldPatchFlag } = oldVNode;
  const { props: newProps, patchFlag: newPatchFlag, dynamicProps } = newVNode;

  // 如果是静态提升的节点，跳过属性更新
  if (newPatchFlag === PatchFlags.HOISTED) {
    return;
  }

  // 如果不需要全量检查，只更新动态属性
  if (newPatchFlag > 0 && dynamicProps) {
    for (let i = 0; i < dynamicProps.length; i++) {
      const key = dynamicProps[i];
      const newValue = newProps[key];
      const oldValue = oldProps[key];
      
      if (newValue !== oldValue) {
        patchProp(el, key, oldValue, newValue);
      }
    }
  } else {
    // 全量属性检查
    patchPropsFull(oldProps, newProps, el);
  }
}

// 全量属性更新
function patchPropsFull(oldProps, newProps, el) {
  // 更新新属性
  for (const key in newProps) {
    if (key === 'key') continue;
    const newValue = newProps[key];
    const oldValue = oldProps[key];
    if (newValue !== oldValue) {
      patchProp(el, key, oldValue, newValue);
    }
  }
  
  // 删除旧属性
  for (const key in oldProps) {
    if (key === 'key') continue;
    if (!(key in newProps)) {
      patchProp(el, key, oldProps[key], null);
    }
  }
}

// 更新单个属性
function patchProp(el, key, oldValue, newValue) {
  if (key === 'class') {
    el.className = newValue || '';
  } else if (key === 'style') {
    if (isString(newValue)) {
      el.style.cssText = newValue;
    } else if (isObject(newValue)) {
      if (isString(oldValue)) {
        el.style.cssText = '';
      }
      for (const k in newValue) {
        el.style[k] = newValue[k];
      }
    }
  } else if (key.startsWith('on')) {
    // 事件处理
    const eventName = key.slice(2).toLowerCase();
    if (oldValue) {
      el.removeEventListener(eventName, oldValue);
    }
    if (newValue) {
      el.addEventListener(eventName, newValue);
    }
  } else if (key !== 'key') {
    // 其他属性
    if (newValue == null) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, newValue);
    }
  }
}

// 判断是否为对象
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

// 创建真实DOM元素
function createElement(type) {
  return document.createElement(type);
}

// 创建文本节点
function createText(text) {
  return document.createTextNode(text);
}

// 插入节点
function insert(child, parent, anchor) {
  parent.insertBefore(child, anchor || null);
}

// 移除节点
function remove(child) {
  const parent = child.parentNode;
  if (parent) {
    parent.removeChild(child);
  }
}

// 设置文本内容
function setText(node, text) {
  node.textContent = text;
}

// 核心diff算法：比较子节点（Vue3优化版）
function patchChildren(oldChildren, newChildren, container, parentComponent) {
  const oldLength = oldChildren.length;
  const newLength = newChildren.length;
  
  // 如果新子节点为空，移除所有旧子节点
  if (newLength === 0) {
    if (oldLength > 0) {
      unmountChildren(oldChildren);
    }
    return;
  }
  
  // 如果旧子节点为空，挂载所有新子节点
  if (oldLength === 0) {
    mountChildren(newChildren, container, parentComponent);
    return;
  }
  
  // 使用最长递增子序列算法优化
  patchKeyedChildren(oldChildren, newChildren, container, parentComponent);
}

// 带key的子节点diff（Vue3核心优化）
function patchKeyedChildren(oldChildren, newChildren, container, parentComponent) {
  let i = 0;
  const oldLength = oldChildren.length;
  const newLength = newChildren.length;
  
  // 1. 从头部开始比较
  while (i < oldLength && i < newLength) {
    const oldChild = oldChildren[i];
    const newChild = newChildren[i];
    
    if (isSameVNodeType(oldChild, newChild)) {
      patch(oldChild, newChild, container, parentComponent);
    } else {
      break;
    }
    i++;
  }
  
  // 2. 从尾部开始比较
  let oldEnd = oldLength - 1;
  let newEnd = newLength - 1;
  
  while (i <= oldEnd && i <= newEnd) {
    const oldChild = oldChildren[oldEnd];
    const newChild = newChildren[newEnd];
    
    if (isSameVNodeType(oldChild, newChild)) {
      patch(oldChild, newChild, container, parentComponent);
    } else {
      break;
    }
    oldEnd--;
    newEnd--;
  }
  
  // 3. 处理新增节点
  if (i > oldEnd) {
    if (i <= newEnd) {
      const nextPos = newEnd + 1;
      const anchor = nextPos < newLength ? newChildren[nextPos].elm : null;
      while (i <= newEnd) {
        patch(null, newChildren[i], container, parentComponent, anchor);
        i++;
      }
    }
  }
  // 4. 处理删除节点
  else if (i > newEnd) {
    while (i <= oldEnd) {
      unmount(oldChildren[i]);
      i++;
    }
  }
  // 5. 处理未知序列
  else {
    const oldStart = i;
    const newStart = i;
    
    // 建立key到索引的映射
    const keyToNewIndexMap = new Map();
    for (i = newStart; i <= newEnd; i++) {
      const newChild = newChildren[i];
      if (newChild.key != null) {
        keyToNewIndexMap.set(newChild.key, i);
      }
    }
    
    // 遍历旧节点
    let patched = 0;
    const toBePatched = newEnd - newStart + 1;
    let moved = false;
    let maxNewIndexSoFar = 0;
    
    const newIndexToOldIndexMap = new Array(toBePatched);
    for (i = 0; i < toBePatched; i++) {
      newIndexToOldIndexMap[i] = 0;
    }
    
    for (i = oldStart; i <= oldEnd; i++) {
      const oldChild = oldChildren[i];
      
      if (patched >= toBePatched) {
        unmount(oldChild);
        continue;
      }
      
      let newIndex;
      if (oldChild.key != null) {
        newIndex = keyToNewIndexMap.get(oldChild.key);
      } else {
        // 没有key的情况，遍历查找
        for (let j = newStart; j <= newEnd; j++) {
          if (isSameVNodeType(oldChild, newChildren[j])) {
            newIndex = j;
            break;
          }
        }
      }
      
      if (newIndex === undefined) {
        unmount(oldChild);
      } else {
        newIndexToOldIndexMap[newIndex - newStart] = i + 1;
        if (newIndex >= maxNewIndexSoFar) {
          maxNewIndexSoFar = newIndex;
        } else {
          moved = true;
        }
        patch(oldChild, newChildren[newIndex], container, parentComponent);
        patched++;
      }
    }
    
    // 使用最长递增子序列算法优化移动
    const increasingNewIndexSequence = moved 
      ? getSequence(newIndexToOldIndexMap)
      : [];
    
    let j = increasingNewIndexSequence.length - 1;
    for (i = toBePatched - 1; i >= 0; i--) {
      const nextIndex = newStart + i;
      const nextChild = newChildren[nextIndex];
      const anchor = nextIndex + 1 < newLength ? newChildren[nextIndex + 1].elm : null;
      
      if (newIndexToOldIndexMap[i] === 0) {
        // 新节点
        patch(null, nextChild, container, parentComponent, anchor);
      } else if (moved) {
        if (j < 0 || i !== increasingNewIndexSequence[j]) {
          // 需要移动
          insert(nextChild.elm, container, anchor);
        } else {
          j--;
        }
      }
    }
  }
}

// 最长递增子序列算法
function getSequence(arr) {
  const p = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = (u + v) >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}

// 挂载子节点
function mountChildren(children, container, parentComponent) {
  for (let i = 0; i < children.length; i++) {
    patch(null, children[i], container, parentComponent);
  }
}

// 卸载子节点
function unmountChildren(children) {
  for (let i = 0; i < children.length; i++) {
    unmount(children[i]);
  }
}

// 卸载节点
function unmount(vnode) {
  // 用 & 运算符可以判断 shapeFlag 位掩码中是否包含某种类型标志（即包含 COMPONENT 标志）。
  // shapeFlag 是一个由多个标志位按位或组成的数字（比如 5 代表 ELEMENT|COMPONENT），
  // 所以要检查是不是组件节点，需要用按位与（&）判断是否包含 COMPONENT 标志位（大于0说明包含）。
  if (vnode.shapeFlag & ShapeFlags.COMPONENT) {
    // 组件卸载逻辑
    unmountComponent(vnode);
  } else {
    // 元素节点卸载
    remove(vnode.elm);
  }
}

// 卸载组件
function unmountComponent(vnode) {
  // 组件卸载逻辑
  remove(vnode.elm);
}

// 核心patch函数（Vue3优化版）
function patch(oldVNode, newVNode, container, parentComponent, anchor) {
  // 如果旧节点不存在，直接挂载新节点
  if (!oldVNode) {
    mount(newVNode, container, parentComponent, anchor);
    return;
  }
  
  // 如果新节点不存在，卸载旧节点
  if (!newVNode) {
    unmount(oldVNode);
    return;
  }
  
  // 如果节点类型不同，直接替换
  if (!isSameVNodeType(oldVNode, newVNode)) {
    unmount(oldVNode);
    mount(newVNode, container, parentComponent, anchor);
    return;
  }
  
  // 相同节点，进行patch
  if (newVNode.patchFlag === PatchFlags.HOISTED) {
    // 静态提升的节点，直接复用
    newVNode.elm = oldVNode.elm;
    return;
  }
  
  if (newVNode.patchFlag === PatchFlags.BAIL) {
    // 需要全量diff
    patchElement(oldVNode, newVNode, container, parentComponent);
  } else {
    // 使用PatchFlags优化
    patchElementOptimized(oldVNode, newVNode, container, parentComponent);
  }
}

// 挂载节点
function mount(vnode, container, parentComponent, anchor) {
  const { type, shapeFlag } = vnode;
  
  if (shapeFlag & ShapeFlags.ELEMENT) {
    mountElement(vnode, container, parentComponent, anchor);
  } else if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    mountTextNode(vnode, container);
  }
}

// 挂载元素节点
function mountElement(vnode, container, parentComponent, anchor) {
  const { type, props, children, shapeFlag } = vnode;
  
  // 创建真实DOM元素
  const el = createElement(type);
  vnode.elm = el;
  
  // 设置属性
  if (props) {
    for (const key in props) {
      patchProp(el, key, null, props[key]);
    }
  }
  
  // 处理子节点
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    setText(el, children);
  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    mountChildren(children, el, parentComponent);
  }
  
  // 插入到容器中
  insert(el, container, anchor);
}

// 挂载文本节点
function mountTextNode(vnode, container) {
  const el = createText(vnode.children);
  vnode.elm = el;
  insert(el, container);
}

// 优化版元素patch
function patchElementOptimized(oldVNode, newVNode, container, parentComponent) {
  const el = newVNode.elm = oldVNode.elm;
  const { patchFlag, dynamicProps } = newVNode;
  
  // 根据PatchFlag进行优化更新
  if (patchFlag & PatchFlags.TEXT) {
    if (oldVNode.children !== newVNode.children) {
      setText(el, newVNode.children);
    }
  }
  
  if (patchFlag & PatchFlags.CLASS) {
    if (oldVNode.props.class !== newVNode.props.class) {
      patchProp(el, 'class', oldVNode.props.class, newVNode.props.class);
    }
  }
  
  if (patchFlag & PatchFlags.STYLE) {
    if (oldVNode.props.style !== newVNode.props.style) {
      patchProp(el, 'style', oldVNode.props.style, newVNode.props.style);
    }
  }
  
  if (patchFlag & PatchFlags.PROPS) {
    // 只更新动态属性
    if (dynamicProps) {
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        const newValue = newVNode.props[key];
        const oldValue = oldVNode.props[key];
        if (newValue !== oldValue) {
          patchProp(el, key, oldValue, newValue);
        }
      }
    }
  }
  
  // 处理子节点
  patchChildren(oldVNode.children, newVNode.children, el, parentComponent);
}

// 全量元素patch
function patchElement(oldVNode, newVNode, container, parentComponent) {
  const el = newVNode.elm = oldVNode.elm;
  
  // 全量更新属性
  patchProps(oldVNode, newVNode, el);
  
  // 全量更新子节点
  patchChildren(oldVNode.children, newVNode.children, el, parentComponent);
}

// 导出主要函数
module.exports = {
  VNode,
  createVNode,
  createTextVNode,
  createBlock,
  patch,
  PatchFlags,
  ShapeFlags
};

// 示例用法
if (require.main === module) {
  console.log('Vue3 Diff算法实现完成');
  
  // 创建虚拟DOM树
  const oldTree = createVNode('div', { id: 'app', class: 'container' }, [
    createVNode('h1', { key: 'title' }, 'Hello'),
    createVNode('p', { key: 'content' }, 'World')
  ]);
  
  const newTree = createVNode('div', { id: 'app', class: 'container' }, [
    createVNode('h1', { key: 'title' }, 'Hello'),
    createVNode('p', { key: 'content' }, 'Vue3'),
    createVNode('span', { key: 'new' }, 'New!')
  ]);
  
  console.log('旧虚拟DOM:', oldTree);
  console.log('新虚拟DOM:', newTree);
  console.log('PatchFlags:', PatchFlags);
}
