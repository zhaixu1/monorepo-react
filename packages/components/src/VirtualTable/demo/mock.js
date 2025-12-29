export const dataSource = [
    { name: '张三', age: 18, gender: '男', phone: '13800138000', email: 'zhangsan@example.com', address: '北京市海淀区', remark: '备注', action: '操作' },
    { name: '李四', age: 20, gender: '女', phone: '13800138001', email: 'lisi@example.com', address: '北京市朝阳区', remark: '备注', action: '操作' },
    { name: '王五', age: 22, gender: '男', phone: '13800138002', email: 'wangwu@example.com', address: '北京市海淀区', remark: '备注', action: '操作' },
    { name: '赵六', age: 24, gender: '女', phone: '13800138003', email: 'zhaoliu@example.com', address: '北京市朝阳区', remark: '备注', action: '操作' },
    { name: '孙七', age: 26, gender: '男', phone: '13800138004', email: 'sunqi@example.com', address: '北京市海淀区', remark: '备注', action: '操作' },
    { name: '周八', age: 28, gender: '女', phone: '13800138005', email: 'zhouba@example.com', address: '北京市朝阳区', remark: '备注', action: '操作' },
    { name: '吴九', age: 30, gender: '男', phone: '13800138006', email: 'wujiu@example.com', address: '北京市海淀区', remark: '备注', action: '操作' },
    { name: '郑十', age: 32, gender: '女', phone: '13800138007', email: 'zhengshi@example.com', address: '北京市朝阳区', remark: '备注', action: '操作' },
    ...Array.from({ length: 1000 }).map((_, i) => {
        const index = i + 1;
        return {
            name: `用户${index}`,
            age: 18 + (index % 50),
            gender: index % 2 === 0 ? '男' : '女',
            phone: `138${(index % 100000000).toString().padStart(8, '0')}`,
            email: `user${index}@example.com`,
            address: index % 2 === 0 ? '北京市海淀区' : '北京市朝阳区',
            remark: `备注${index}`,
            action: '操作'
        };
    }),

]