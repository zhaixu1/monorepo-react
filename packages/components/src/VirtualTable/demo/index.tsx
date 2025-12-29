import React from 'react'
import VirtualTable from '../index.tsx'
import { dataSource } from './mock.js'
export default function Index() {
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        },
        {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
        },
    ]

  return (
    <VirtualTable columns={columns} dataSource={dataSource} scroll={{ y: 300 }} />
  )
}   