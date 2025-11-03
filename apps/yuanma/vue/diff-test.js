/**
 * Vue2 Diff算法测试用例
 * 演示diff算法的各种场景
 */

const { VNode, createTextVNode, createElementVNode, patch, sameVnode } = require('./diff.js');

// 创建测试用的DOM容器
function createTestContainer() {
  const container = document.createElement('div');
  container.id = 'test-container';
  document.body.appendChild(container);
  return container;
}

// 清理测试环境
function cleanup() {
  const container = document.getElementById('test-container');
  if (container) {
    document.body.removeChild(container);
  }
}

// 测试1: 基本节点比较
function testBasicNodeComparison() {
  console.log('=== 测试1: 基本节点比较 ===');
  
  const vnode1 = createElementVNode('div', { id: 'test' }, [
    createTextVNode('Hello World')
  ]);
  
  const vnode2 = createElementVNode('div', { id: 'test' }, [
    createTextVNode('Hello Vue')
  ]);
  
  console.log('节点1:', vnode1);
  console.log('节点2:', vnode2);
  console.log('是否为相同节点:', sameVnode(vnode1, vnode2));
  console.log('');
}

// 测试2: 子节点diff算法
function testChildrenDiff() {
  console.log('=== 测试2: 子节点diff算法 ===');
  
  // 旧虚拟DOM
  const oldChildren = [
    createElementVNode('li', { key: '1' }, [createTextVNode('Item 1')]),
    createElementVNode('li', { key: '2' }, [createTextVNode('Item 2')]),
    createElementVNode('li', { key: '3' }, [createTextVNode('Item 3')])
  ];
  
  // 新虚拟DOM - 重新排序
  const newChildren = [
    createElementVNode('li', { key: '3' }, [createTextVNode('Item 3')]),
    createElementVNode('li', { key: '1' }, [createTextVNode('Item 1')]),
    createElementVNode('li', { key: '2' }, [createTextVNode('Item 2')])
  ];
  
  console.log('旧子节点:', oldChildren.map(child => child.key));
  console.log('新子节点:', newChildren.map(child => child.key));
  console.log('diff算法会识别出这是重新排序操作');
  console.log('');
}

// 测试3: 节点增删
function testNodeAddRemove() {
  console.log('=== 测试3: 节点增删 ===');
  
  // 旧虚拟DOM
  const oldTree = createElementVNode('ul', {}, [
    createElementVNode('li', { key: '1' }, [createTextVNode('Item 1')]),
    createElementVNode('li', { key: '2' }, [createTextVNode('Item 2')])
  ]);
  
  // 新虚拟DOM - 添加和删除节点
  const newTree = createElementVNode('ul', {}, [
    createElementVNode('li', { key: '1' }, [createTextVNode('Item 1')]),
    createElementVNode('li', { key: '3' }, [createTextVNode('Item 3')]),
    createElementVNode('li', { key: '4' }, [createTextVNode('Item 4')])
  ]);
  
  console.log('旧树结构:');
  console.log('- Item 1 (key: 1)');
  console.log('- Item 2 (key: 2)');
  console.log('');
  console.log('新树结构:');
  console.log('- Item 1 (key: 1)');
  console.log('- Item 3 (key: 3) [新增]');
  console.log('- Item 4 (key: 4) [新增]');
  console.log('');
  console.log('diff算法会:');
  console.log('1. 保留Item 1 (相同key)');
  console.log('2. 删除Item 2 (key不存在)');
  console.log('3. 创建Item 3和Item 4 (新key)');
  console.log('');
}

// 测试4: 文本节点更新
function testTextNodeUpdate() {
  console.log('=== 测试4: 文本节点更新 ===');
  
  const oldVNode = createElementVNode('div', {}, [
    createTextVNode('Hello World')
  ]);
  
  const newVNode = createElementVNode('div', {}, [
    createTextVNode('Hello Vue')
  ]);
  
  console.log('旧文本:', oldVNode.children[0].text);
  console.log('新文本:', newVNode.children[0].text);
  console.log('diff算法会直接更新文本内容');
  console.log('');
}

// 测试5: 属性更新
function testAttributeUpdate() {
  console.log('=== 测试5: 属性更新 ===');
  
  const oldVNode = createElementVNode('div', { 
    id: 'container',
    class: 'old-class',
    style: 'color: red;'
  }, [createTextVNode('Content')]);
  
  const newVNode = createElementVNode('div', { 
    id: 'container',
    class: 'new-class',
    style: 'color: blue; font-size: 16px;'
  }, [createTextVNode('Content')]);
  
  console.log('旧属性:');
  console.log('- id: container');
  console.log('- class: old-class');
  console.log('- style: color: red;');
  console.log('');
  console.log('新属性:');
  console.log('- id: container');
  console.log('- class: new-class');
  console.log('- style: color: blue; font-size: 16px;');
  console.log('');
  console.log('diff算法会:');
  console.log('1. 保留id属性 (未变化)');
  console.log('2. 更新class属性');
  console.log('3. 更新style属性');
  console.log('');
}

// 测试6: 复杂场景 - 混合操作
function testComplexScenario() {
  console.log('=== 测试6: 复杂场景 - 混合操作 ===');
  
  // 旧虚拟DOM
  const oldTree = createElementVNode('div', { id: 'app' }, [
    createElementVNode('h1', { key: 'title' }, [createTextVNode('Todo List')]),
    createElementVNode('ul', { key: 'list' }, [
      createElementVNode('li', { key: '1' }, [createTextVNode('Learn Vue')]),
      createElementVNode('li', { key: '2' }, [createTextVNode('Build App')]),
      createElementVNode('li', { key: '3' }, [createTextVNode('Deploy')])
    ]),
    createElementVNode('p', { key: 'footer' }, [createTextVNode('Footer')])
  ]);
  
  // 新虚拟DOM - 复杂的变更
  const newTree = createElementVNode('div', { id: 'app' }, [
    createElementVNode('h1', { key: 'title' }, [createTextVNode('Updated Todo List')]),
    createElementVNode('ul', { key: 'list' }, [
      createElementVNode('li', { key: '2' }, [createTextVNode('Build App')]),
      createElementVNode('li', { key: '4' }, [createTextVNode('Test App')]),
      createElementVNode('li', { key: '1' }, [createTextVNode('Learn Vue')])
    ]),
    createElementVNode('div', { key: 'new-section' }, [createTextVNode('New Section')])
  ]);
  
  console.log('复杂变更场景:');
  console.log('1. 标题文本更新: "Todo List" → "Updated Todo List"');
  console.log('2. 列表项重新排序: 1,2,3 → 2,4,1');
  console.log('3. 删除项目: "Deploy" (key: 3)');
  console.log('4. 新增项目: "Test App" (key: 4)');
  console.log('5. 替换节点: <p>Footer</p> → <div>New Section</div>');
  console.log('');
  console.log('diff算法优化策略:');
  console.log('- 使用key进行高效比较');
  console.log('- 最小化DOM操作');
  console.log('- 复用相同节点');
  console.log('- 批量更新DOM');
  console.log('');
}

// 运行所有测试
function runAllTests() {
  console.log('🚀 Vue2 Diff算法测试开始\n');
  
  testBasicNodeComparison();
  testChildrenDiff();
  testNodeAddRemove();
  testTextNodeUpdate();
  testAttributeUpdate();
  testComplexScenario();
  
  console.log('✅ 所有测试完成');
  console.log('\n📝 Vue2 Diff算法核心特点:');
  console.log('1. 同层比较: 只比较同一层级的节点');
  console.log('2. 双端比较: 头头、尾尾、头尾、尾头四种比较方式');
  console.log('3. Key优化: 使用key值进行高效节点识别');
  console.log('4. 最小化操作: 尽可能复用现有DOM节点');
  console.log('5. 批量更新: 减少DOM操作次数');
}

// 如果直接运行此文件，执行测试
if (require.main === module) {
  runAllTests();
}

module.exports = {
  testBasicNodeComparison,
  testChildrenDiff,
  testNodeAddRemove,
  testTextNodeUpdate,
  testAttributeUpdate,
  testComplexScenario,
  runAllTests
};
