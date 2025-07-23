# Modal 弹窗组件

### 示例
<code src="./demo/index.tsx"></code>

## 组件简介

ModalList 是一个基于 antd Modal 和 Form 封装的弹窗表单组件，支持自定义表单项、loading 状态、宽度、标题等。

ModalList is a modal form component based on antd Modal and Form, supporting custom form items, loading state, width, title, etc.

## 属性 Props

| 属性名      | 说明                | 类型      | 默认值   |
| ----------- | ------------------- | --------- | -------- |
| open        | 是否显示弹窗        | boolean   | false    |
| loading     | 提交按钮 loading    | boolean   | false    |
| isloading   | 表单内容 loading    | boolean   | false    |
| data        | 弹窗和表单配置      | object    | -        |
| onCancel    | 关闭弹窗回调        | function  | -        |
| onFinish    | 表单提交回调        | function  | -        |

### data 配置说明

| 属性名         | 说明             | 类型     | 示例值         |
| -------------- | ---------------- | -------- | -------------- |
| title          | 弹窗标题         | string   | '示例弹窗'     |
| width          | 弹窗宽度         | number   | 400            |
| layout         | 表单布局         | string   | 'vertical'     |
| initialValues  | 表单初始值       | object   | { name: '' }   |
| listData       | 表单项配置数组   | array    | 见下方示例     |

#### listData 每项配置
| 属性名   | 说明         | 类型     |
| -------- | ------------ | -------- |
| label    | 表单项标签   | string   |
| name     | 字段名       | string   |
| render   | 渲染内容     | ReactNode|
| rules    | 校验规则     | array    |
| style    | 样式         | object   |

## 使用示例 Example

```tsx
import React, { useState } from 'react';
import ModalList from './index';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const data = {
    title: '示例弹窗',
    width: 400,
    layout: 'vertical',
    initialValues: { name: '' },
    listData: [
      {
        label: '姓名',
        name: 'name',
        render: <input placeholder="请输入姓名" />,
        rules: [{ required: true, message: '请输入姓名' }],
      },
    ],
  };

  const handleFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      alert('提交成功：' + JSON.stringify(values));
    }, 1000);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>打开弹窗</button>
      <ModalList
        open={open}
        loading={loading}
        isloading={isloading}
        data={data}
        onCancel={() => setOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  );
}
```
