// Minimal Redux-like implementation (simple, linter-safe)

export type Action = {
  type: string;
  [extraProps: string]: any;
};

export type Reducer<S = any, A extends Action = Action> = (
  state: S | undefined,
  action: A
) => S;

export type Listener = () => void;
export type Unsubscribe = () => void;

export interface Store<S = any, A extends Action = Action> {
  getState(): S;
  dispatch(action: A): A;
  subscribe(listener: Listener): Unsubscribe;
  replaceReducer(nextReducer: Reducer<S, A>): void;
}

export type StoreCreator = (reducer: Reducer, preloadedState?: any) => Store;
export type StoreEnhancer = (next: StoreCreator) => StoreCreator;

export interface MiddlewareAPI<S = any, A extends Action = Action> {
  getState(): S;
  dispatch(action: A): A;
}

export type Middleware<S = any, A extends Action = Action> = (
  api: MiddlewareAPI<S, A>
) => (next: (action: A) => A) => (action: A) => A;

const INIT_ACTION_TYPE = "@@redux/INIT_" + Math.random().toString(36).slice(2);

export function createStore<S = any, A extends Action = Action>(
  reducer: Reducer<S, A>,
  preloadedState?: S,
  enhancer?: StoreEnhancer
): Store<S, A> {
  if (typeof reducer !== "function") {
    throw new Error("Expected the reducer to be a function.");
  }

  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error("Expected the enhancer to be a function.");
    }
    const enhancedCreateStore = enhancer(
      ((r: Reducer, s?: any) => createStore<any, any>(r as any, s)) as StoreCreator
    );
    return enhancedCreateStore(
      reducer as unknown as Reducer,
      preloadedState
    ) as Store<S, A>;
  }

  let currentReducer: Reducer<S, A> = reducer;
  let currentState: S = preloadedState as S;
  let isDispatching = false;
  const listeners: Listener[] = [];

  function getState(): S {
    return currentState;
  }

  function subscribe(listener: Listener): Unsubscribe {
    if (typeof listener !== "function") {
      throw new Error("Expected the listener to be a function.");
    }
    let isSubscribed = true;
    listeners.push(listener);

    return () => {
      if (!isSubscribed) return;
      isSubscribed = false;
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }

  function dispatch(action: A): A {
    if (typeof action !== "object" || action === null) {
      throw new Error("Actions must be plain objects.");
    }
    if (typeof (action as Action).type === "undefined") {
      throw new Error("Actions must have a 'type' field.");
    }
    if (isDispatching) {
      throw new Error("Reducers may not dispatch actions.");
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    const snapshot = listeners.slice();
    for (let i = 0; i < snapshot.length; i++) {
      snapshot[i]();
    }

    return action;
  }

  function replaceReducer(nextReducer: Reducer<S, A>): void {
    if (typeof nextReducer !== "function") {
      throw new Error("Expected the nextReducer to be a function.");
    }
    currentReducer = nextReducer;
    dispatch({ type: INIT_ACTION_TYPE } as unknown as A);
  }

  // Initialize state
  dispatch({ type: INIT_ACTION_TYPE } as unknown as A);

  return {
    getState,
    dispatch,
    subscribe,
    replaceReducer,
  };
}

export function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args: any[]) => a(b(...args)));
}

export function applyMiddleware(
  ...middlewares: Middleware[]
): StoreEnhancer {
  return (next: StoreCreator) => (reducer: Reducer, preloadedState?: any) => {
    const store = next(reducer, preloadedState) as Store;
    let dispatch: (action: any) => any = () => {
      throw new Error(
        "Dispatching while constructing your middleware is not allowed."
      );
    };

    const middlewareAPI: MiddlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };

    const chain = middlewares.map((mw) => mw(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    } as Store;
  };
}

export function combineReducers(
  reducers: Record<string, Reducer>
): Reducer {
  const reducerKeys = Object.keys(reducers);

  return function combination(state: any = {}, action: Action) {
    const nextState: any = {};
    let hasChanged = false;

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}
