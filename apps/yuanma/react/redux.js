function createStore(reducer, initialState) {
    let state = initialState;

    const listeners = [];

    const getState = () => state;

    /**
     * 订阅者
     * 作用：添加订阅者，当 state 发生变化时，会调用订阅者函数
     */
    function subscribe(listener) {
        listeners.push(listener);

        return () => {
            // 移除订阅
            listeners = listeners.filter(l => l !== listener);
        }
    }

    /**
     * 作用：触发 state 更新
     * 参数：action 是一个对象，必须包含 type 属性，用于标识 action 的类型
     * 返回值：返回 action 是为了方便链式调用
     */
    function dispatch(action) {
        if(typeof action !== 'object' || action === null || !action.type) {
            throw new Error('Action must be an object with a type property');
        }

        state = reducer(state, action); // 更新state, 从 reducer 中获取新的 state

        listeners.forEach(listener => listener());

        return action; // 返回 action 是为了方便链式调用
    }

    // 初始化 state
    dispatch({type: '@redux/INIT'});

    return {
        getState,
        subscribe,
        dispatch
    }

}

function combineReducers(reducers) {
    return function(state = {}, action) {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    }
}

// applyMiddleware 实现
// 这段代码实现了 Redux 的 applyMiddleware 功能。
// applyMiddleware 是一个高阶函数，用于增强 Redux 的 store，使其支持中间件机制。
// 它的作用是：可以让你在 action 被发送到 reducer 之前，拦截、修改、异步处理 action，或者做日志、异常捕获等扩展功能。
// 实现原理：
// 1. applyMiddleware 接收若干中间件函数（middlewares）。
// 2. 返回一个新的 createStore 增强器（高阶函数）。
// 3. 该增强器在创建 store 时，先生成原始 store，然后用中间件链包裹原始的 dispatch 方法，形l成新的 dispatch。
// 4. 每个中间件都可以拿到 getState 和 dispatch（已被中间件链包裹），实现对 action 的处理和分发。
// 5. 最终返回的 store，dispatch 已经被中间件链增强，可以支持异步、日志等功能。
// 这样，开发者可以通过中间件机制灵活扩展 Redux 的功能。
function applyMiddleware(...middlewares) {
    return function (createStore) {
        return function (reducer, preloadedState) {
            const store = createStore(reducer, preloadedState);
            let dispatch = store.dispatch;
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action) => dispatch(action)
            };
            const chain = middlewares.map(middleware => middleware(middlewareAPI));
            // 组合中间件
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        }
    }
}

// compose 实现
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}


let userInitialState = {
    name: 'John',
    age: 30
}
function userReducer(state = userInitialState, action) {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(userReducer);

store.subscribe(() => {
    console.log('state:', store.getState());
})

store.dispatch({type: 'SET_NAME', payload: 'Mike'});
store.dispatch({type: 'SET_AGE', payload: 25});

console.log(store.getState());