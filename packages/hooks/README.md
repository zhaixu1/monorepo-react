# zxreact-hooks

常用的React Hooks


## 安装 Installation
```js
npm install zxreact-hooks --save
```

## 使用 Usage
```js
import { useStorage } from 'zxreact-hooks';
```

### 使用示例
```tsx
import { useStorage } from 'zxreact-hooks';

function Demo() {
  const [value, setValue] = useStorage('my-key', '默认值');
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}
```


## 贡献 Contributing

欢迎提 issue 或 PR！

Welcome issues and PRs!

---

## License

MIT