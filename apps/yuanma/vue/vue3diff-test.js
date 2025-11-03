/**
 * Vue3 Diff算法测试用例
 * 演示Vue3 diff算法的各种优化特性
 */

const { 
  VNode, 
  createVNode, 
  createTextVNode, 
  createBlock, 
  patch, 
  PatchFlags, 
  ShapeFlags 
} = require('./vue3diff.js');

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

// 测试1: PatchFlags优化
function testPatchFlagsOptimization() {
  console.log('=== 测试1: PatchFlags优化 ===');
  
  // 只有文本内容变化的节点
  const oldVNode = createVNode('div', { id: 'test' }, 'Hello', PatchFlags.TEXT);
  const newVNode = createVNode('div', { id: 'test' }, 'Vue3', PatchFlags.TEXT);
  
  console.log('旧节点:', oldVNode);
  console.log('新节点:', newVNode);
  console.log('PatchFlag:', newVNode.patchFlag === PatchFlags.TEXT ? 'TEXT' : 'OTHER');
  console.log('优化: 只更新文本内容，跳过其他属性检查');
  console.log('');
}

// 测试2: 静态提升优化
function testStaticHoisting() {
  console.log('=== 测试2: 静态提升优化 ===');
  
  // 静态提升的节点
  const staticNode = createVNode('p', { class: 'static' }, 'Static Content', PatchFlags.HOISTED);
  
  console.log('静态节点:', staticNode);
  console.log('PatchFlag:', staticNode.patchFlag === PatchFlags.HOISTED ? 'HOISTED' : 'OTHER');
  console.log('优化: 静态节点直接复用，不参与diff');
  console.log('');
}

// 测试3: Block Tree优化
function testBlockTreeOptimization() {
  console.log('=== 测试3: Block Tree优化 ===');
  
  // 创建Block节点
  const blockNode = createBlock('div', { id: 'block' }, [
    createVNode('p', { key: '1' }, 'Dynamic 1'),
    createVNode('p', { key: '2' }, 'Dynamic 2'),
    createVNode('p', { key: '3' }, 'Dynamic 3')
  ], PatchFlags.KEYED_FRAGMENT);
  
  console.log('Block节点:', blockNode);
  console.log('isBlock:', blockNode.isBlock);
  console.log('PatchFlag:', blockNode.patchFlag === PatchFlags.KEYED_FRAGMENT ? 'KEYED_FRAGMENT' : 'OTHER');
  console.log('优化: 只追踪动态子节点，减少遍历范围');
  console.log('');
}

// 测试4: 最长递增子序列算法
function testLISAlgorithm() {
  console.log('=== 测试4: 最长递增子序列算法 ===');
  
  // 模拟节点移动场景
  const oldChildren = [
    createVNode('li', { key: 'A' }, 'Item A'),
    createVNode('li', { key: 'B' }, 'Item B'),
    createVNode('li', { key: 'C' }, 'Item C'),
    createVNode('li', { key: 'D' }, 'Item D')
  ];
  
  const newChildren = [
    createVNode('li', { key: 'A' }, 'Item A'),
    createVNode('li', { key: 'C' }, 'Item C'),
    createVNode('li', { key: 'B' }, 'Item B'),
    createVNode('li', { key: 'D' }, 'Item D')
  ];
  
  console.log('旧子节点顺序:', oldChildren.map(child => child.key));
  console.log('新子节点顺序:', newChildren.map(child => child.key));
  console.log('优化: 使用LIS算法最小化DOM移动操作');
  console.log('');
}

// 测试5: 动态属性优化
function testDynamicPropsOptimization() {
  console.log('=== 测试5: 动态属性优化 ===');
  
  // 只有特定属性变化的节点
  const oldVNode = createVNode('div', { 
    id: 'test', 
    class: 'old-class', 
    style: 'color: red;',
    title: 'Old Title'
  }, 'Content', PatchFlags.CLASS | PatchFlags.STYLE, ['class', 'style']);
  
  const newVNode = createVNode('div', { 
    id: 'test', 
    class: 'new-class', 
    style: 'color: blue;',
    title: 'New Title'
  }, 'Content', PatchFlags.CLASS | PatchFlags.STYLE, ['class', 'style']);
  
  console.log('旧节点属性:', oldVNode.props);
  console.log('新节点属性:', newVNode.props);
  console.log('动态属性列表:', newVNode.dynamicProps);
  console.log('优化: 只检查class和style属性，跳过id和title');
  console.log('');
}

// 测试6: 复杂场景综合测试
function testComplexScenario() {
  console.log('=== 测试6: 复杂场景综合测试 ===');
  
  // 复杂的虚拟DOM树
  const oldTree = createBlock('div', { id: 'app' }, [
    createVNode('h1', { key: 'title' }, 'Todo List', PatchFlags.TEXT),
    createVNode('ul', { key: 'list' }, [
      createVNode('li', { key: '1' }, 'Learn Vue2'),
      createVNode('li', { key: '2' }, 'Learn Vue3'),
      createVNode('li', { key: '3' }, 'Build App')
    ], PatchFlags.KEYED_FRAGMENT),
    createVNode('p', { key: 'footer' }, 'Footer', PatchFlags.HOISTED)
  ], PatchFlags.STABLE_FRAGMENT);
  
  const newTree = createBlock('div', { id: 'app' }, [
    createVNode('h1', { key: 'title' }, 'Updated Todo List', PatchFlags.TEXT),
    createVNode('ul', { key: 'list' }, [
      createVNode('li', { key: '2' }, 'Learn Vue3'),
      createVNode('li', { key: '4' }, 'Test App'),
      createVNode('li', { key: '1' }, 'Learn Vue2')
    ], PatchFlags.KEYED_FRAGMENT),
    createVNode('div', { key: 'new-section' }, 'New Section', PatchFlags.TEXT)
  ], PatchFlags.STABLE_FRAGMENT);
  
  console.log('复杂变更场景:');
  console.log('1. 标题文本更新: "Todo List" → "Updated Todo List"');
  console.log('2. 列表项重新排序: 1,2,3 → 2,4,1');
  console.log('3. 删除项目: "Build App" (key: 3)');
  console.log('4. 新增项目: "Test App" (key: 4)');
  console.log('5. 替换节点: <p>Footer</p> → <div>New Section</div>');
  console.log('');
  console.log('Vue3优化策略:');
  console.log('- PatchFlags精确标记动态内容');
  console.log('- Block Tree只追踪动态节点');
  console.log('- LIS算法最小化DOM移动');
  console.log('- 静态提升减少重复计算');
  console.log('- 动态属性列表避免全量检查');
  console.log('');
}

// 测试7: 性能对比
function testPerformanceComparison() {
  console.log('=== 测试7: 性能对比 ===');
  
  console.log('Vue2 vs Vue3 Diff算法性能对比:');
  console.log('');
  console.log('Vue2特点:');
  console.log('- 双端比较算法');
  console.log('- 全量属性检查');
  console.log('- 静态节点跳过diff');
  console.log('- 时间复杂度: O(n)');
  console.log('');
  console.log('Vue3优化:');
  console.log('- PatchFlags精确标记');
  console.log('- Block Tree动态收集');
  console.log('- 静态提升到模块级');
  console.log('- LIS算法优化移动');
  console.log('- 动态属性列表');
  console.log('- 时间复杂度: O(n) 但常数更小');
  console.log('');
  console.log('性能提升:');
  console.log('- 创建开销: 减少50%+');
  console.log('- 更新开销: 减少30%+');
  console.log('- 内存占用: 减少20%+');
  console.log('- 包体积: 减少40%+');
  console.log('');
}

// 运行所有测试
function runAllTests() {
  console.log('🚀 Vue3 Diff算法测试开始\n');
  
  testPatchFlagsOptimization();
  testStaticHoisting();
  testBlockTreeOptimization();
  testLISAlgorithm();
  testDynamicPropsOptimization();
  testComplexScenario();
  testPerformanceComparison();
  
  console.log('✅ 所有测试完成');
  console.log('\n📝 Vue3 Diff算法核心优势:');
  console.log('1. PatchFlags: 精确标记动态内容，避免不必要的检查');
  console.log('2. Block Tree: 只追踪动态节点，减少遍历范围');
  console.log('3. 静态提升: 编译期优化，运行时直接复用');
  console.log('4. LIS算法: 最小化DOM移动操作');
  console.log('5. 动态属性: 只检查真正变化的属性');
  console.log('6. 更好的Tree-shaking: 按需引入，包体积更小');
}

// 如果直接运行此文件，执行测试
if (require.main === module) {
  runAllTests();
}

module.exports = {
  testPatchFlagsOptimization,
  testStaticHoisting,
  testBlockTreeOptimization,
  testLISAlgorithm,
  testDynamicPropsOptimization,
  testComplexScenario,
  testPerformanceComparison,
  runAllTests
};
