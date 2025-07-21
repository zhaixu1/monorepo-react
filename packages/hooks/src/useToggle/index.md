# useToggle

`useToggle` 是一个用于在两个状态值之间切换的 React Hook，支持布尔值或任意自定义值。常用于开关、状态切换等场景。




## API

### `const [state, actions] = useToggle(initialState?, reverseValue?)`

| 参数         | 说明           | 类型         | 默认值   |
| ------------ | -------------- | ------------ | -------- |
| initialState | 初始状态       | `T`          | `false`  |
| reverseValue | 反转状态值     | `U`          | `!T`     |

- `initialState`：可选，初始状态，默认为 `false`。
- `reverseValue`：可选，切换时的反转值，默认为 `!initialState`。

### 返回值

- `state`：当前状态值。
- `actions`：包含以下方法的对象：

| 方法名     | 说明                   | 类型             |
| ---------- | ---------------------- | ---------------- |
| toggle     | 切换状态               | `() => void`     |
| set        | 设置为指定值           | `(value: T\|U) => void` |
| setLeft    | 设置为初始状态         | `() => void`     |
| setRight   | 设置为反转值           | `() => void`     |

## 用法
<code src="./demo/index.tsx" />


## 示例

### 布尔切换

```js
const [state, { toggle }] = useToggle();
toggle(); // false -> true -> false ...
```

### 自定义值切换

```js
const [color, { toggle }] = useToggle('red', 'blue');
toggle(); // red <-> blue
```