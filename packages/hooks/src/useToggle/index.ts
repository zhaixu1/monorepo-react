import { useMemo, useState } from 'react';

export interface Actions<T> {
  setLeft: () => void;   // 设置为默认值
  setRight: () => void;  // 设置为反转值
  set: (value: T) => void; // 设置为指定值
  toggle: () => void;    // 在默认值和反转值之间切换
}

// 函数重载声明：无参数时，返回 [boolean, Actions<boolean>]
function useToggle<T = boolean>(): [boolean, Actions<T>];

// 函数重载声明：有一个默认值参数时，返回 [T, Actions<T>]
function useToggle<T>(defaultValue: T): [T, Actions<T>];

// 函数重载声明：有默认值和反转值时，返回 [T | U, Actions<T | U>]
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

// useToggle 的具体实现
function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  // 使用 useState 保存当前状态，初始值为 defaultValue
  const [state, setState] = useState<D | R>(defaultValue);

  // 用 useMemo 缓存 actions，避免每次渲染都新建对象
  const actions = useMemo(() => {
    // 计算反转值，如果未传入 reverseValue，则取 defaultValue 的布尔反值
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

    // 切换状态：如果当前是 defaultValue，则切换为 reverseValueOrigin，反之亦然
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    // 设置为指定值
    const set = (value: D | R) => setState(value);
    // 设置为默认值
    const setLeft = () => setState(defaultValue);
    // 设置为反转值
    const setRight = () => setState(reverseValueOrigin);

    // 返回包含四个操作方法的对象
    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []); // 注意：此处依赖项应包含 defaultValue 和 reverseValue，防止参数变化时 actions 不更新

  // 返回当前状态和操作方法
  return [state, actions];
}

// 默认导出 useToggle
export default useToggle;
