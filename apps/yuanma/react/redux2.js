function createStore(reducer, initialState) {
    let state = initialState;

    let listeners = []; // 订阅者列表

    const getState = () => state;

    function subscribe(listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    }

    function dispatch(action) {
        if (typeof action !== "object" || action === null || !action.type) {
            return new Error("Action must be an object with a type property");
        }

        state = reducer(state, action);

        listeners.forEach(listener => listener());

        return action;
    }

    dispatch({type: '@redux/INIT'});

    return {
        getState,
        subscribe,
        dispatch
    }
}

// function combineReducers(reducers) {
//     return function(state = {}, action) {
//         return Object.keys(reducers).reduce((nextState, key) => {
//             nextState[key] = reducers[key](state[key], action);
//             return nextState;
//         }, {});
//     }
// }

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

const store = createStore(userReducer, userInitialState);

store.subscribe(() => {
    console.log('state:', store.getState());
})

store.dispatch({type: 'SET_NAME', payload: 'Mike'});

