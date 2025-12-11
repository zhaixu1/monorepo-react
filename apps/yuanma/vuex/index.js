
let Vue;

class Store {
    constructor(options) {
        // 1. 保存 mutations 和 actions
        this._mutations = options.mutations || {};
        this._actions = options.actions || {};
        
        // 2. 处理 getters
        // 我们利用 Vue 的 computed 属性来实现 getters 的缓存机制
        this.getters = {};
        const computed = {};
        const store = this; 
        
        const getters = options.getters || {};
        Object.keys(getters).forEach(key => {
            // 获取用户定义的 getter 函数 (state) => {}
            const fn = getters[key];
            
            // 将其转化为 computed 属性，无参数
            // 这里使用 function 普通函数，以便内部 this 指向 _vm 实例
            computed[key] = function() {
                // 直接从 _vm 实例获取数据
                // 注意：以 $ 开头的属性不会被代理到 Vue 实例上，所以必须通过 this._data.$$state 访问
                return fn(this._data.$$state);
            };
            
            // 为 store.getters 定义只读属性
            Object.defineProperty(store.getters, key, {
                get: () => store._vm[key],
                enumerable: true // for local getters
            });
        });

        // 3. 响应式 state
        // 使用 Vue 实例来存储 state，利用 Vue 的响应式系统
        this._vm = new Vue({
            data: {
                $$state: options.state
            },
            computed // 挂载 computed
        });

        // 绑定 commit 和 dispatch 的 this 上下文
        // 这样解构使用时 const { commit } = store 也就不会报错了
        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    // 存取器属性，访问 state 时实际上访问的是 _vm 的 data
    get state() {
        return this._vm._data.$$state;
    }

    set state(v) {
        console.error('please use replaceState to reset state');
    }

    commit(type, payload) {
        const entry = this._mutations[type];
        if (!entry) {
            console.error(`[vuex] unknown mutation type: ${type}`);
            return;
        }
        // Mutation 是同步的，直接执行
        // 传入 state 作为第一个参数
        entry(this.state, payload);
    }

    dispatch(type, payload) {
        const entry = this._actions[type];
        if (!entry) {
            console.error(`[vuex] unknown action type: ${type}`);
            return;
        }
        // Action 是异步的，可能包含副作用
        // 传入 store 实例作为上下文（包含 commit, dispatch, state 等）
        // 实际上 Vuex 传的是 context 对象，这里简易版直接传 this
        return entry(this, payload);
    }
}

const install = (_Vue) => {
    Vue = _Vue;

    Vue.mixin({
        beforeCreate() {
            // 根组件有 store 选项
            if(this.$options && this.$options.store) {
                this.$store = this.$options.store;
            } else {
                // 子组件从父组件继承
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    })
}


export default {
    install,
    Store
}
