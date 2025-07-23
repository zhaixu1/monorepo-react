import React, { useState } from 'react'
import ModalList from '../index'

export default function ModalDemo() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  // 模拟表单数据
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
  }

  const handleFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      alert('提交成功：' + JSON.stringify(values))
    }, 1000)
  }

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
  )
}
