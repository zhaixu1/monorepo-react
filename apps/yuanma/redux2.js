function createStore(reducer, initialState) {
    let state = initialState;
    const listeners = []; // 订阅者列表

    const getState = () => state;

    function subscribe(listener) {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }

    function dispatch(action) {
        if(typeof action !== 'object' || action === null || !action.type) {
            throw new Error('Action must be an object with a type property');
        }

        state = reducer(state, action);

        listeners.forEach(listener => listener());

        return action;
    }
}