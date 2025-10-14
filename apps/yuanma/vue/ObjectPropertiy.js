let car = {};
let val = 3000;

Object.defineProperty(car, "price", {
    configurable: true, // 是否可以删除
    enumerable: true, // 是否可以枚举
    get() {
        console.log("触发get方法");

        return val;
    },
    set(newVal) {
        console.log("触发set方法");
        val = newVal;
    },
});

car.price = 4000;
console.log(car.price);

console.log(car);
const property = Object.getOwnPropertyDescriptor(car, "price");
console.log(property);

export function defineReactive(obj, key, val) {
    const dep = new Dep();
    // 获取对象的属性描述
    const property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
        // 如果属性不可配置，则返回 false
        return false;
    }
    const getter = property && property.get;
    const setter = property && property.set;

    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key];
    }

    Object.defineProperty(obj, key, {
        enumerable: true, // 是否可以枚举
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val;
            if (Dep.target) {
                dep.depend(); // 收集
            }
            return value;
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val; // 获取旧值
            if (setter) {
                setter.call(obj, newVal);
            }
            dep.notify(); // 通知
        },
    });
}

export class Dep {
    // 在 class 中加上 static 关键字，表示该属性是类的静态属性，属于类本身而不是实例共享。
    // 比如 Dep.target 它存储全局唯一的依赖目标（watcher），而不是每个 Dep 实例都独立拥有 target 属性。
    static target = null;
    constructor() {
        this.id = id++;
        this.subs = []; // 订阅者列表
    }
    addSub(sub) {
        this.subs.push(sub);
    }
    removeSub(sub) {
        remove(this.subs, sub);
    }
    // 该方法用于依赖收集。当存在全局的 Dep.target（即当前需要被依赖收集的 watcher）时，
    // 会调用 watcher 的 addDep 方法，将当前 Dep 实例加入 watcher 的依赖列表，从而实现依赖的追踪和响应式更新机制。
    depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    }
    notify() {
        const subs = this.subs.slice();
        subs.forEach((sub) => sub.update());
    }
}

Dep.target = null;
const targetStack = []; // 存储当前的依赖目标
export function pushTarget(target) {
    targetStack.push(target);
    Dep.target = target;
}
export function popTarget() {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
}


export class Watcher{
    constructor(vm, expOrFn, cb) {
        this.vm = vm;
        this.expOrFn = expOrFn;
        this.cb = cb;
        this.deps = [];
        this.depIds = new Set();
        this.newDeps = [];
    }
    // 将当前的 Dep 实例添加到 Watcher 的依赖列表中
    addDep(dep) {
        const id = dep.id;
        if(!this.depIds.has(id)) {
            this.depIds.add(id);
            this.deps.push(dep);
        }
    }
    teardown() {
        let i = this.deps.length;
        while(i--) {
            this.deps[i].removeSub(this);
        }
    }
    update() {
        this.run();
    }
    run() {
        const value = this.get();
        if(value !== this.value) {
            this.value = value;
        }
    }
    get() {
        pushTarget(this);
        const vm = this.vm;
        const value = this.getter.call(vm, vm);
        popTarget();
        this.cleanupDeps();
    }
    cleanupDeps() {
        let i = this.deps.length;
        while(i--) {
            const dep = this.deps[i];
            if(!this.newDeps.has(dep)) {
                dep.removeSub(this);
            }
        }
    }
}
