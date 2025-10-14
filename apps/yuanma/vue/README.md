# 简易 Vue 响应式框架

一个从零实现的简易 Vue 响应式系统，帮助理解 Vue 2.x 的核心原理。

## 📁 文件说明

- `SimpleVue.js` - 完整的响应式框架实现（包含使用示例）
- `SimpleVue.html` - 可视化交互演示页面
- `ObjectPropertiy.js` - 原始的响应式代码片段

## ✨ 核心功能

### 1. 数据劫持（Observer）
使用 `Object.defineProperty` 劫持对象属性的 getter 和 setter：
```javascript
Object.defineProperty(obj, key, {
    get() {
        // 依赖收集
        if (Dep.target) {
            dep.depend();
        }
        return value;
    },
    set(newVal) {
        // 派发更新
        value = newVal;
        dep.notify();
    }
});
```

### 2. 依赖收集（Dep）
每个响应式属性都有一个 `Dep` 实例，用于管理依赖：
```javascript
class Dep {
    constructor() {
        this.subs = []; // 订阅者列表
    }
    depend() {
        // 收集当前 watcher
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    }
    notify() {
        // 通知所有订阅者更新
        this.subs.forEach(sub => sub.update());
    }
}
```

### 3. 观察者（Watcher）
连接数据和回调函数的桥梁：
```javascript
class Watcher {
    constructor(vm, expOrFn, cb) {
        this.getter = expOrFn; // 表达式或函数
        this.cb = cb;          // 回调函数
        this.value = this.get(); // 立即求值，触发依赖收集
    }
    
    update() {
        // 数据变化时被调用
        this.run();
    }
}
```

### 4. 简易 Vue 实例
提供类似 Vue 的 API：
```javascript
const vm = new SimpleVue({
    data: {
        message: 'Hello'
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    watch: {
        message(newVal, oldVal) {
            console.log(`message 变化: ${oldVal} -> ${newVal}`);
        }
    }
});
```

## 🚀 使用方法

### 方式 1：Node.js 运行
```bash
# 直接运行 JS 文件
node apps/yuanma/vue/SimpleVue.js
```

输出示例：
```
==================== 简易 Vue 响应式框架示例 ====================

【示例 1】基本响应式：
[Getter] message 收集依赖 Watcher-0
✅ 组件挂载完成

--- 修改数据 ---
[Setter] message: Hello Vue! -> Hello SimpleVue!
[Dep 0] 通知 1 个订阅者更新
✅ message 变化: Hello Vue! -> Hello SimpleVue!
```

### 方式 2：浏览器运行
1. 直接双击打开 `SimpleVue.html`
2. 或使用 Live Server 打开
3. 在输入框中修改数据，观察响应式效果

## 📚 核心原理

### 依赖收集流程

```
1. 创建 Watcher
   ↓
2. 执行 watcher.get()
   ↓
3. 设置 Dep.target = watcher
   ↓
4. 执行 getter 函数（访问数据）
   ↓
5. 触发属性的 get 拦截器
   ↓
6. dep.depend() 收集依赖
   ↓
7. watcher.addDep(dep) 双向记录
   ↓
8. 清空 Dep.target
```

### 派发更新流程

```
1. 修改数据 (obj.key = newVal)
   ↓
2. 触发属性的 set 拦截器
   ↓
3. dep.notify() 通知所有订阅者
   ↓
4. 遍历 subs，调用 watcher.update()
   ↓
5. watcher.run() 执行回调
   ↓
6. 回调函数执行（视图更新/用户回调）
```

### 双向记录机制

**为什么 Watcher 和 Dep 要互相记录？**

```javascript
// Watcher 记录 Dep
watcher.deps = [dep1, dep2, dep3];
// 作用：知道自己依赖哪些数据，方便清理不再使用的依赖

// Dep 记录 Watcher  
dep.subs = [watcher1, watcher2, watcher3];
// 作用：数据变化时，知道要通知哪些 watcher
```

### 嵌套 Watcher 处理

使用栈结构处理嵌套场景：
```javascript
const targetStack = [];

function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}

function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}
```

**嵌套场景示例：**
```javascript
// 渲染 Watcher
pushTarget(renderWatcher);  // Dep.target = renderWatcher
    // 访问计算属性
    pushTarget(computedWatcher);  // Dep.target = computedWatcher
        // 访问数据，收集到 computedWatcher
    popTarget();  // Dep.target = renderWatcher（恢复）
    // 继续访问数据，收集到 renderWatcher
popTarget();  // Dep.target = null
```

## 🎯 代码示例

### 示例 1：基本响应式
```javascript
const vm = new SimpleVue({
    data: {
        message: 'Hello Vue!',
        count: 0
    },
    watch: {
        message(newVal, oldVal) {
            console.log(`message 变化: ${oldVal} -> ${newVal}`);
        }
    }
});

vm.message = 'Hello SimpleVue!'; // 触发 watch 回调
```

### 示例 2：计算属性
```javascript
const vm = new SimpleVue({
    data: {
        firstName: '三',
        lastName: '张'
    },
    computed: {
        fullName() {
            return this.lastName + this.firstName;
        }
    }
});

console.log(vm.fullName); // '张三'
vm.firstName = '四';
console.log(vm.fullName); // '张四'
```

### 示例 3：嵌套对象
```javascript
const vm = new SimpleVue({
    data: {
        user: {
            profile: {
                name: '小明',
                age: 25
            }
        }
    },
    watch: {
        'user.profile.name'(newVal, oldVal) {
            console.log(`name 变化: ${oldVal} -> ${newVal}`);
        }
    }
});

vm.user.profile.name = '小红'; // 触发 watch
```

### 示例 4：多个 Watcher
```javascript
const vm = new SimpleVue({
    data: { score: 80 }
});

// 添加多个监听器
vm.$watch('score', (newVal) => {
    console.log(`Watcher 1: 分数变为 ${newVal}`);
});

vm.$watch('score', (newVal) => {
    console.log(`Watcher 2: ${newVal >= 60 ? '及格' : '不及格'}`);
});

vm.score = 95; // 两个 watcher 都会执行
```

## 🔍 与 Vue 2.x 的区别

| 特性 | 本项目 | Vue 2.x |
|------|--------|---------|
| 数组响应式 | ❌ 未实现 | ✅ 重写数组方法 |
| 异步更新队列 | ❌ 同步更新 | ✅ nextTick 批量更新 |
| 虚拟 DOM | ❌ 未实现 | ✅ 完整实现 |
| 模板编译 | ❌ 未实现 | ✅ 模板转 render 函数 |
| 组件系统 | ❌ 未实现 | ✅ 完整的组件系统 |
| 生命周期 | ⚠️ 仅 mounted | ✅ 完整的生命周期 |
| computed 缓存 | ⚠️ 简化版 | ✅ 带缓存和惰性求值 |

## 💡 学习要点

1. **Object.defineProperty 的使用**
   - 如何劫持对象属性
   - getter/setter 的作用

2. **发布-订阅模式**
   - Dep 作为发布者
   - Watcher 作为订阅者

3. **依赖收集的时机**
   - 什么时候收集依赖？
   - 为什么要用 Dep.target？

4. **双向记录的意义**
   - Watcher 记录 Dep（依赖清理）
   - Dep 记录 Watcher（派发更新）

5. **闭包的应用**
   - 每个属性的 dep 通过闭包保存
   - 每个属性的 val 通过闭包保存

## 🐛 已知限制

1. **不支持数组响应式**
   ```javascript
   vm.arr.push(1);  // ❌ 无法监听
   vm.arr[0] = 1;   // ❌ 无法监听
   ```

2. **不支持动态添加属性**
   ```javascript
   vm.newProp = 'value';  // ❌ 不是响应式的
   ```

3. **没有实现 computed 缓存**
   ```javascript
   // 每次访问都会重新计算，没有缓存
   console.log(vm.computedProp);
   ```

4. **同步更新，性能较差**
   ```javascript
   // 修改 100 次数据，会同步更新 100 次
   for (let i = 0; i < 100; i++) {
       vm.count++;
   }
   ```

## 🎓 扩展思考

1. **如何实现数组响应式？**
   - 重写数组的 7 个变异方法
   - 使用 Proxy（Vue 3 的方案）

2. **如何实现异步更新队列？**
   - 收集需要更新的 watcher
   - 使用 nextTick 批量更新

3. **如何优化性能？**
   - computed 添加缓存和惰性求值
   - 使用虚拟 DOM 减少 DOM 操作

4. **Vue 3 为什么改用 Proxy？**
   - Proxy 可以监听动态属性
   - Proxy 可以监听数组索引
   - Proxy 性能更好

## 📖 相关资源

- [Vue 2.x 源码](https://github.com/vuejs/vue)
- [Vue 响应式原理文档](https://v2.cn.vuejs.org/v2/guide/reactivity.html)
- [Object.defineProperty MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

## 🙋 常见问题

**Q: 为什么要用 `Dep.target` 而不是直接传参？**

A: 因为访问属性时（触发 getter）我们不知道是谁在访问，所以要提前把当前的 watcher 设置到全局变量 `Dep.target` 上。

**Q: 为什么 `notify` 要用 `slice()` 复制数组？**

A: 防止遍历时数组被修改（比如 watcher 在更新时取消订阅），导致遍历错乱。

**Q: 什么时候会有嵌套 Watcher？**

A: 计算属性依赖其他数据时，会形成嵌套：外层是组件的 renderWatcher，内层是计算属性的 computedWatcher。

**Q: 为什么 Watcher 要记录依赖的 Dep？**

A: 为了在下次更新时清理不再使用的依赖。比如 `v-if` 切换后，某些数据不再被访问，就要从这些数据的 dep.subs 中移除当前 watcher。

---

**Happy Coding! 🎉**

