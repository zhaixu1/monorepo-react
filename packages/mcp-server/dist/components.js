export const components = {
    Button: {
        name: 'Button',
        description: '基础按钮组件，继承所有原生 HTML button 属性，附带 my-btn 样式类。',
        importPath: "import { Button } from 'zxreact-components'",
        props: [
            {
                name: 'children',
                type: 'React.ReactNode',
                required: true,
                description: '按钮内容',
            },
            {
                name: '...rest',
                type: 'React.ButtonHTMLAttributes<HTMLButtonElement>',
                required: false,
                description: '所有原生 button HTML 属性，如 onClick、disabled、type 等',
            },
        ],
        example: `import React from 'react';
import { Button } from 'zxreact-components';

export default function App() {
  return (
    <div>
      {/* 基础用法 */}
      <Button>按钮</Button>

      {/* 禁用状态 */}
      <Button disabled>禁用按钮</Button>

      {/* 点击事件 */}
      <Button onClick={() => console.log('clicked')}>点击我</Button>
    </div>
  );
}`,
    },
    Modal: {
        name: 'Modal',
        description: '基于 antd Modal + Form 封装的弹窗表单组件（导出名为 ModalList）。支持动态表单项、加载状态、提交/取消回调。',
        importPath: "import { Modal } from 'zxreact-components'",
        props: [
            {
                name: 'open',
                type: 'boolean',
                required: true,
                description: '控制弹窗显示/隐藏',
            },
            {
                name: 'loading',
                type: 'boolean',
                required: false,
                default: 'false',
                description: '提交按钮的 loading 状态',
            },
            {
                name: 'isloading',
                type: 'boolean',
                required: false,
                default: 'false',
                description: '整个表单区域的 Spin loading 状态',
            },
            {
                name: 'data',
                type: 'ModalData',
                required: true,
                description: '弹窗配置对象，包含 title(标题)、width(宽度,默认520)、layout(表单布局)、initialValues(初始值)、listData(表单项数组)',
            },
            {
                name: 'data.listData',
                type: 'Array<{ label, name, render, rules?, style? }>',
                required: true,
                description: '表单项列表。label:标签名, name:字段名, render:表单控件(ReactNode), rules:校验规则, style:样式',
            },
            {
                name: 'onFinish',
                type: '(values: any) => void',
                required: true,
                description: '表单提交成功回调，参数为表单值对象',
            },
            {
                name: 'onCancel',
                type: '() => void',
                required: true,
                description: '点击取消或关闭弹窗时的回调',
            },
        ],
        example: `import React, { useState } from 'react';
import { Modal } from 'zxreact-components';
import { Input } from 'antd';

export default function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalData = {
    title: '新增用户',
    width: 500,
    layout: 'vertical',
    initialValues: { username: '', email: '' },
    listData: [
      {
        label: '用户名',
        name: 'username',
        render: <Input placeholder="请输入用户名" />,
        rules: [{ required: true, message: '请输入用户名' }],
      },
      {
        label: '邮箱',
        name: 'email',
        render: <Input placeholder="请输入邮箱" />,
        rules: [
          { required: true, message: '请输入邮箱' },
          { type: 'email', message: '邮箱格式不正确' },
        ],
      },
    ],
  };

  const handleFinish = (values: any) => {
    setLoading(true);
    // 调用接口...
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>打开弹窗</button>
      <Modal
        open={open}
        loading={loading}
        data={modalData}
        onCancel={() => setOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  );
}`,
    },
    TextEllipsis: {
        name: 'TextEllipsis',
        description: '文本超出容器宽度时自动截断并显示 Tooltip 提示完整内容。内容为 undefined/null 时显示 "------"。',
        importPath: "import { TextEllipsis } from 'zxreact-components'",
        props: [
            {
                name: 'content',
                type: 'string',
                required: true,
                description: '要显示的文本内容。为 undefined/null 时自动展示 "------"',
            },
        ],
        example: `import React from 'react';
import { TextEllipsis } from 'zxreact-components';

export default function App() {
  return (
    <div>
      {/* 需要给父容器设置宽度，组件才能判断是否溢出 */}
      <div style={{ width: 200 }}>
        <TextEllipsis content="这是一段很长的文字，超出容器后会自动省略并显示Tooltip" />
      </div>

      {/* 内容为空时显示 ------ */}
      <div style={{ width: 200 }}>
        <TextEllipsis content={null} />
      </div>
    </div>
  );
}`,
    },
    VirtualTable: {
        name: 'VirtualTable',
        description: '基于 antd Table 封装的表格组件，支持分页配置和透传所有 antd Table 属性。',
        importPath: "import { VirtualTable } from 'zxreact-components'",
        props: [
            {
                name: 'columns',
                type: 'ColumnsType[]',
                required: true,
                default: '[]',
                description: 'antd Table columns 配置，每项包含 title、dataIndex、key 等',
            },
            {
                name: 'dataSource',
                type: 'any[]',
                required: true,
                default: '[]',
                description: '表格数据源',
            },
            {
                name: 'pagination',
                type: 'TablePaginationConfig | false',
                required: false,
                default: 'undefined',
                description: '分页配置。false 关闭分页；不传或 true 使用默认分页；传对象则合并配置',
            },
            {
                name: 'defaultPageSize',
                type: 'number',
                required: false,
                default: '10',
                description: '默认每页条数',
            },
            {
                name: '...rest',
                type: 'TableProps<any>',
                required: false,
                description: '所有 antd Table 支持的属性，如 scroll、rowKey、loading、onChange 等',
            },
        ],
        example: `import React from 'react';
import { VirtualTable } from 'zxreact-components';

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '邮箱', dataIndex: 'email', key: 'email' },
  {
    title: '操作',
    key: 'action',
    render: (_: any, record: any) => (
      <a onClick={() => console.log(record)}>编辑</a>
    ),
  },
];

const dataSource = [
  { key: '1', name: '张三', age: 28, email: 'zhangsan@example.com' },
  { key: '2', name: '李四', age: 32, email: 'lisi@example.com' },
];

export default function App() {
  return (
    <VirtualTable
      columns={columns}
      dataSource={dataSource}
      defaultPageSize={20}
      scroll={{ y: 400 }}
    />
  );
}`,
    },
};
export const componentNames = Object.keys(components);
