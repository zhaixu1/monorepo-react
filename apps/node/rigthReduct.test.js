// 测试 reduceRight 函数组合
const { performance } = require('perf_hooks');

// 模拟原始代码中的函数数组
const createTestFunctions = (count = 3) => {
    return Array.from({ length: count }, (_, index) => {
        return (res, req) => {
            console.log(`执行函数 ${index + 1}, 参数:`, req);
            setTimeout(() => {
                res(req + ` -> 经过函数${index + 1}`);
            }, 100); // 减少延迟时间便于测试
        };
    });
};

// 测试用例1: 基本功能测试
function testBasicFunctionality() {
    console.log('\n=== 测试1: 基本功能测试 ===');
    
    const arrayFn = createTestFunctions(3);
    
    const reduceArray = arrayFn.reduceRight((res) => {
        return (req) => {
            res(req);
        }
    }, (req) => {
        console.log('最终结果:', req);
    });

    reduceArray('初始数据');
}

// 测试用例2: 不同数量的函数
function testDifferentFunctionCounts() {
    console.log('\n=== 测试2: 不同数量的函数 ===');
    
    const counts = [1, 2, 5];
    
    counts.forEach(count => {
        console.log(`\n测试 ${count} 个函数:`);
        const arrayFn = createTestFunctions(count);
        
        const reduceArray = arrayFn.reduceRight((res) => {
            return (req) => {
                res(req);
            }
        }, (req) => {
            console.log(`最终结果 (${count}个函数):`, req);
        });

        reduceArray('测试数据');
    });
}

// 测试用例3: 异步执行顺序测试
function testAsyncExecutionOrder() {
    console.log('\n=== 测试3: 异步执行顺序测试 ===');
    
    const arrayFn = [
        (res, req) => {
            console.log('函数1开始执行');
            setTimeout(() => {
                console.log('函数1完成');
                res(req + ' -> 函数1');
            }, 200);
        },
        (res, req) => {
            console.log('函数2开始执行');
            setTimeout(() => {
                console.log('函数2完成');
                res(req + ' -> 函数2');
            }, 150);
        },
        (res, req) => {
            console.log('函数3开始执行');
            setTimeout(() => {
                console.log('函数3完成');
                res(req + ' -> 函数3');
            }, 100);
        }
    ];

    const reduceArray = arrayFn.reduceRight((res) => {
        return (req) => {
            res(req);
        }
    }, (req) => {
        console.log('所有函数执行完成，最终结果:', req);
    });

    reduceArray('开始');
}

// 测试用例4: 错误处理测试
function testErrorHandling() {
    console.log('\n=== 测试4: 错误处理测试 ===');
    
    const arrayFn = [
        (res, req) => {
            console.log('正常函数执行');
            setTimeout(() => {
                res(req + ' -> 正常');
            }, 100);
        },
        (res, req) => {
            console.log('错误函数执行');
            setTimeout(() => {
                try {
                    throw new Error('模拟错误');
                } catch (error) {
                    console.log('捕获错误:', error.message);
                    res(req + ' -> 错误已处理');
                }
            }, 100);
        }
    ];

    const reduceArray = arrayFn.reduceRight((res) => {
        return (req) => {
            res(req);
        }
    }, (req) => {
        console.log('错误处理测试完成:', req);
    });

    reduceArray('错误测试');
}

// 测试用例5: 性能测试
function testPerformance() {
    console.log('\n=== 测试5: 性能测试 ===');
    
    const startTime = performance.now();
    
    const arrayFn = createTestFunctions(10);
    
    const reduceArray = arrayFn.reduceRight((res) => {
        return (req) => {
            res(req);
        }
    }, (req) => {
        const endTime = performance.now();
        console.log('性能测试完成，耗时:', (endTime - startTime).toFixed(2), 'ms');
        console.log('最终结果:', req);
    });

    reduceArray('性能测试数据');
}

// 运行所有测试
async function runAllTests() {
    console.log('开始运行 reduceRight 函数组合测试...\n');
    
    // 使用 Promise 来确保异步测试按顺序执行
    await new Promise(resolve => {
        testBasicFunctionality();
        setTimeout(resolve, 500);
    });
    
    await new Promise(resolve => {
        testDifferentFunctionCounts();
        setTimeout(resolve, 1000);
    });
    
    await new Promise(resolve => {
        testAsyncExecutionOrder();
        setTimeout(resolve, 800);
    });
    
    await new Promise(resolve => {
        testErrorHandling();
        setTimeout(resolve, 400);
    });
    
    await new Promise(resolve => {
        testPerformance();
        setTimeout(resolve, 200);
    });
    
    console.log('\n所有测试完成！');
}

// 如果直接运行此文件，则执行测试
if (require.main === module) {
    runAllTests();
}

module.exports = {
    createTestFunctions,
    testBasicFunctionality,
    testDifferentFunctionCounts,
    testAsyncExecutionOrder,
    testErrorHandling,
    testPerformance
}; 