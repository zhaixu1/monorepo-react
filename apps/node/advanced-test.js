// 高级测试 - 展示 reduceRight 函数组合的多种应用场景

console.log('=== 高级 reduceRight 函数组合测试 ===\n');

// 场景1: 数据转换管道
console.log('=== 场景1: 数据转换管道 ===');
const dataTransformers = [
    (data, next) => {
        console.log('转换器1: 添加前缀');
        next('处理后的_' + data);
    },
    (data, next) => {
        console.log('转换器2: 转换为大写');
        next(data.toUpperCase());
    },
    (data, next) => {
        console.log('转换器3: 添加后缀');
        next(data + '_完成');
    }
];

const transformPipeline = dataTransformers.reduceRight((next, transformer) => {
    return (data) => transformer(data, next);
}, (data) => {
    console.log('最终结果:', data);
});

transformPipeline('原始数据');
console.log('');

// 场景2: 权限验证链
console.log('=== 场景2: 权限验证链 ===');
const authMiddlewares = [
    (user, next) => {
        console.log('验证1: 检查用户是否存在');
        if (!user) {
            console.log('❌ 用户不存在');
            return;
        }
        console.log('✅ 用户存在');
        next(user);
    },
    (user, next) => {
        console.log('验证2: 检查用户权限');
        if (user.role !== 'admin') {
            console.log('❌ 权限不足');
            return;
        }
        console.log('✅ 权限验证通过');
        next(user);
    },
    (user, next) => {
        console.log('验证3: 检查用户状态');
        if (user.status !== 'active') {
            console.log('❌ 用户状态异常');
            return;
        }
        console.log('✅ 用户状态正常');
        next(user);
    }
];

const authChain = authMiddlewares.reduceRight((next, middleware) => {
    return (user) => middleware(user, next);
}, (user) => {
    console.log('🎉 所有验证通过，用户:', user.name);
});

// 测试不同用户
console.log('\n测试用户1 (管理员):');
authChain({ name: 'admin', role: 'admin', status: 'active' });

console.log('\n测试用户2 (普通用户):');
authChain({ name: 'user', role: 'user', status: 'active' });

console.log('\n测试用户3 (状态异常):');
authChain({ name: 'admin', role: 'admin', status: 'inactive' });

// 场景3: 日志记录链
console.log('\n=== 场景3: 日志记录链 ===');
const logMiddlewares = [
    (request, next) => {
        const startTime = Date.now();
        console.log('📝 开始处理请求:', request.url);
        next(request);
        const endTime = Date.now();
        console.log('⏱️ 请求处理完成，耗时:', endTime - startTime, 'ms');
    },
    (request, next) => {
        console.log('🔍 验证请求参数');
        if (!request.params) {
            console.log('⚠️ 缺少参数');
        }
        next(request);
    },
    (request, next) => {
        console.log('💾 保存请求记录');
        next(request);
    }
];

const logChain = logMiddlewares.reduceRight((next, middleware) => {
    return (request) => middleware(request, next);
}, (request) => {
    console.log('🎯 执行业务逻辑:', request.action);
});

logChain({ url: '/api/users', action: 'getUsers', params: { page: 1 } });

// 场景4: 错误处理链
console.log('\n=== 场景4: 错误处理链 ===');
const errorHandlers = [
    (error, next) => {
        console.log('错误处理器1: 记录错误');
        console.log('📋 错误详情:', error.message);
        next(error);
    },
    (error, next) => {
        console.log('错误处理器2: 格式化错误');
        const formattedError = {
            message: error.message,
            timestamp: new Date().toISOString(),
            level: 'ERROR'
        };
        next(formattedError);
    },
    (error, next) => {
        console.log('错误处理器3: 发送通知');
        console.log('📧 发送错误通知:', error.message);
        next(error);
    }
];

const errorChain = errorHandlers.reduceRight((next, handler) => {
    return (error) => handler(error, next);
}, (error) => {
    console.log('🏁 错误处理完成，最终错误:', error);
});

errorChain(new Error('数据库连接失败'));

console.log('\n=== 测试总结 ===');
console.log('✅ 数据转换管道: 展示了数据在多个函数间传递和转换');
console.log('✅ 权限验证链: 展示了条件验证和提前终止');
console.log('✅ 日志记录链: 展示了请求处理的全流程记录');
console.log('✅ 错误处理链: 展示了错误的多层处理');
console.log('\n这种模式的核心优势:');
console.log('1. 模块化: 每个函数职责单一');
console.log('2. 可组合: 可以灵活组合不同的函数');
console.log('3. 可扩展: 易于添加新的处理函数');
console.log('4. 可测试: 每个函数都可以独立测试'); 