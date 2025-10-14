/**
 * 简易 Vue 响应式框架
 * 实现核心功能：
 * 1. 数据劫持（Observer）
 * 2. 依赖收集（Dep）
 * 3. 观察者（Watcher）
 * 4. 简易 Vue 实例
 */

// ============ 工具函数 ============
let uid = 0;

function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}

function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

function isObject(obj) {
    return obj !== null && typeof obj === "object";
}

// ============ 依赖收集器 Dep ============
class Dep {
    static target = null; // 全局唯一的 watcher

    constructor() {
        this.id = uid++;
        this.subs = []; // 订阅者列表
    }

    // 添加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }

    // 移除订阅者
    removeSub(sub) {
        remove(this.subs, sub);
    }

    // 依赖收集
    depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    }

    // 通知所有订阅者更新
    notify() {
        // 创建副本，防止遍历时数组被修改
        const subs = this.subs.slice();
        console.log(`[Dep ${this.id}] 通知 ${subs.length} 个订阅者更新`);
        for (let i = 0; i < subs.length; i++) {
            subs[i].update();
        }
    }
}

// 依赖目标栈（处理嵌套依赖收集）
const targetStack = [];

function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}

function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}

// ============ 观察者 Observer ============
class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();

        // 给对象添加 __ob__ 属性，标记已被观察
        def(value, "__ob__", this);

        if (Array.isArray(value)) {
            // 数组的响应式处理（简化版，这里不处理数组）
            this.observeArray(value);
        } else {
            // 对象的响应式处理
            this.walk(value);
        }
    }

    // 遍历对象的每个属性，使其响应式
    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i]);
        }
    }

    // 观察数组的每个元素
    observeArray(items) {
        for (let i = 0; i < items.length; i++) {
            observe(items[i]);
        }
    }
}

// 观察一个值，返回 Observer 实例
function observe(value) {
    if (!isObject(value)) {
        return;
    }
    let ob;
    // __ob__ 属性用于标记一个对象已经被 Observer 实例观察过，并缓存该 Observer 实例，防止重复侦测
    if (value.__ob__ && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
    return ob;
}

// 定义响应式属性
function defineReactive(obj, key, val) {
    const dep = new Dep();

    // 获取属性描述符
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        return;
    }

    // 保存原有的 getter 和 setter
    const getter = property && property.get;
    const setter = property && property.set;

    // 如果只传了两个参数，获取初始值
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    // 递归观察子对象
    let childOb = observe(val);

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val;

            // 依赖收集
            if (Dep.target) {
                console.log(`[Getter] ${key} 收集依赖 Watcher-${Dep.target.id}`);
                // 将 Dep 实例添加到 Watcher 的依赖列表中
                dep.depend();
                if (childOb) {
                    childOb.dep.depend();
                }
            }
            return value;
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val;

            // 值没变化，不触发更新
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return;
            }

            console.log(`[Setter] ${key}: ${value} -> ${newVal}`);

            if (setter) {
                setter.call(obj, newVal);
            } else {
                val = newVal;
            }

            // 新值也要观察
            childOb = observe(newVal);

            // 通知更新
            dep.notify();
        },
    });
}

// ============ 观察者 Watcher ============
class Watcher {
    constructor(vm, expOrFn, cb, options = {}) {
        this.vm = vm;
        this.id = uid++;
        this.cb = cb; // 回调函数
        this.deps = []; // 依赖的 Dep 列表
        this.depIds = new Set(); // 依赖的 Dep id 集合
        this.newDeps = []; // 新的依赖列表
        this.newDepIds = new Set(); // 新的依赖 id 集合

        // 解析表达式或函数
        if (typeof expOrFn === "function") {
            this.getter = expOrFn;
        } else {
            this.getter = parsePath(expOrFn);
            if (!this.getter) {
                this.getter = function () {};
            }
        }

        // 立即求值，触发依赖收集
        this.value = this.get();
    }

    // 获取值，触发依赖收集
    get() {
        pushTarget(this); // 设置当前 watcher 为 Dep.target
        let value;
        const vm = this.vm;

        try {
            value = this.getter.call(vm, vm);
        } catch (e) {
            console.error(e);
        } finally {
            popTarget(); // 恢复上一个 watcher
            this.cleanupDeps(); // 清理依赖
        }

        return value;
    }

    // 添加依赖
    
    addDep(dep) {
        const id = dep.id;
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id);
            this.newDeps.push(dep);
            if (!this.depIds.has(id)) {
                dep.addSub(this);
            }
        }
    }

    // 清理依赖
    cleanupDeps() {
        // 移除旧的、不再使用的依赖
        let i = this.deps.length;
        while (i--) {
            const dep = this.deps[i];
            if (!this.newDepIds.has(dep.id)) {
                dep.removeSub(this);
            }
        }

        // 交换新旧依赖
        let tmp = this.depIds;
        this.depIds = this.newDepIds;
        this.newDepIds = tmp;
        this.newDepIds.clear();

        tmp = this.deps;
        this.deps = this.newDeps;
        this.newDeps = tmp;
        this.newDeps.length = 0;
    }

    // 更新
    update() {
        console.log(`[Watcher-${this.id}] 触发更新`);
        this.run();
    }

    // 执行更新
    run() {
        const value = this.get();
        if (value !== this.value || isObject(value)) {
            const oldValue = this.value;
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }

    // 销毁
    teardown() {
        let i = this.deps.length;
        while (i--) {
            this.deps[i].removeSub(this);
        }
    }
}

// 解析路径（如 'a.b.c'）
function parsePath(path) {
    const segments = path.split(".");
    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return;
            obj = obj[segments[i]];
        }
        return obj;
    };
}

// ============ 简易 Vue 实例 ============
class SimpleVue {
    
    constructor(options) {
        debugger
        this.$options = options;
        this._data = options.data;
        this._watchers = [];

        // 代理 data 到实例上
        this._initData();

        // 观察 data
        observe(this._data);

        // 初始化 computed
        if (options.computed) {
            this._initComputed(options.computed);
        }

        // 初始化 watch
        if (options.watch) {
            this._initWatch(options.watch);
        }

        // 创建渲染 watcher（模拟）
        if (options.render) {
            this._watcher = new Watcher(this, options.render, () => {
                console.log("[Render] 组件重新渲染");
            });
        }

        // 执行 mounted 钩子
        if (options.mounted) {
            options.mounted.call(this);
        }
    }

    // 初始化 data，代理到实例上
    _initData() {
        const keys = Object.keys(this._data);
        let i = keys.length;
        while (i--) {
            const key = keys[i];
            proxy(this, "_data", key);
        }
    }

    // 初始化计算属性
    _initComputed(computed) {
        this._computedWatchers = Object.create(null);
        for (const key in computed) {
            const userDef = computed[key];
            const getter = typeof userDef === "function" ? userDef : userDef.get;

            // 创建计算属性的 watcher
            this._computedWatchers[key] = new Watcher(this, getter, () => {});

            // 代理到实例上
            defineComputed(this, key, userDef);
        }
    }

    // 初始化 watch
    _initWatch(watch) {
        for (const key in watch) {
            const handler = watch[key];
            this.$watch(key, handler);
        }
    }

    // $watch API
    $watch(expOrFn, cb) {
        const watcher = new Watcher(this, expOrFn, cb);
        this._watchers.push(watcher);
        return function unwatchFn() {
            watcher.teardown();
        };
    }
}

// 代理属性到实例上
function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function proxyGetter() {
            return this[sourceKey][key];
        },
        set: function proxySetter(val) {
            this[sourceKey][key] = val;
        },
    });
}

// 定义计算属性
function defineComputed(target, key, userDef) {
    const getter = function computedGetter() {
        const watcher = this._computedWatchers && this._computedWatchers[key];
        if (watcher) {
            return watcher.value;
        }
    };

    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: getter,
        set: function () {},
    });
}

// ============ 使用示例 ============
console.log("==================== 简易 Vue 响应式框架示例 ====================\n");

// 示例 1：基本响应式
console.log("【示例 1】基本响应式：");
const vm = new SimpleVue({
    data: {
        message: "Hello Vue!",
        count: 0,
        user: {
            name: "张三",
            age: 25,
        },
    },
    watch: {
        message(newVal, oldVal) {
            console.log(`✅ message 变化: ${oldVal} -> ${newVal}`);
        },
        count(newVal, oldVal) {
            console.log(`✅ count 变化: ${oldVal} -> ${newVal}`);
        },
        "user.name"(newVal, oldVal) {
            console.log(`✅ user.name 变化: ${oldVal} -> ${newVal}`);
        },
    },
    mounted() {
        console.log("✅ 组件挂载完成\n");
    },
});

console.log("\n--- 修改数据 ---");
vm.message = "Hello SimpleVue!";
vm.count = 10;
vm.user.name = "李四";

// 示例 2：计算属性
console.log("\n\n【示例 2】计算属性：");
const vm2 = new SimpleVue({
    data: {
        firstName: "三",
        lastName: "张",
    },
    computed: {
        fullName() {
            console.log("💡 计算 fullName");
            return this.lastName + this.firstName;
        },
    },
    mounted() {
        console.log("✅ vm2 挂载完成");
        console.log(`📖 fullName: ${this.fullName}`);
    },
});

console.log("\n--- 修改 firstName ---");
vm2.firstName = "四";
console.log(`📖 fullName: ${vm2.fullName}`);

// 示例 3：嵌套对象响应式
console.log("\n\n【示例 3】嵌套对象响应式：");
const vm3 = new SimpleVue({
    data: {
        userInfo: {
            profile: {
                nickname: "小明",
                avatar: "avatar.jpg",
            },
            settings: {
                theme: "dark",
            },
        },
    },
    watch: {
        "userInfo.profile.nickname"(newVal, oldVal) {
            console.log(`✅ nickname 变化: ${oldVal} -> ${newVal}`);
        },
    },
});

console.log("\n--- 修改嵌套属性 ---");
vm3.userInfo.profile.nickname = "小红";
vm3.userInfo.settings.theme = "light";

// 示例 4：多个 watcher 监听同一个数据
console.log("\n\n【示例 4】多个 watcher 监听同一个数据：");
const vm4 = new SimpleVue({
    data: {
        score: 80,
    },
});

vm4.$watch("score", (newVal) => {
    console.log(`✅ Watcher 1: 分数变为 ${newVal}`);
});

vm4.$watch("score", (newVal) => {
    console.log(`✅ Watcher 2: 分数变为 ${newVal}，${newVal >= 60 ? "及格" : "不及格"}`);
});

console.log("\n--- 修改 score ---");
vm4.score = 95;

console.log("\n==================== 示例结束 ====================");

