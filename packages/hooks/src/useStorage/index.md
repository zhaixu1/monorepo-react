---
title: useStorage
path: /hooks/use-toggle  # 必须和菜单配置的 path 一致
---

# useStorage

`useStorage` 是一个用于在 React 组件中便捷地读写本地存储（localStorage/sessionStorage）的自定义 Hook。它让你像使用 useState 一样操作本地存储的数据，并且数据会自动同步到存储中。

## 用法
<code src="./demo/index.tsx" />

## API

### `const [value, setValue] = useStorage(key, initialValue?, storage?)`

| 参数         | 说明                                   | 类型                | 默认值                  |
| ------------ | -------------------------------------- | ------------------- | ----------------------- |
| key          | 存储的 key                             | `string`            | -                       |
| initialValue | 初始值                                 | `any`               | `undefined`             |
| storage      | 存储类型，localStorage 或 sessionStorage | `Storage`           | `window.localStorage`   |

- `key`：必填，存储的键名。
- `initialValue`：可选，初始值。
- `storage`：可选，存储类型，默认为 localStorage。

### 返回值

- `value`：当前存储的值。
- `setValue`：设置值的方法，调用后会自动同步到本地存储。

## 示例

### 基本用法

```js
const [value, setValue] = useStorage('my-key', '默认值');
setValue('新值');
```

### 使用 sessionStorage

```js
const [value, setValue] = useStorage('my-key', '默认值', window.sessionStorage);
```

### 存储对象

```js
const [user, setUser] = useStorage('user', { name: '张三' });
```

## 注意事项

- `useStorage` 会自动将非字符串类型的值用 JSON 序列化存储。
- 读取时会自动反序列化为原始类型。
- 适用于 localStorage 和 sessionStorage。
