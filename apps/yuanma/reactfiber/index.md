# fiber 工作原理

1. 有两棵fiber树，一个是current fiber， 另一个是 workInProgress Fiber树。
2. workInProgress Fiber树在内存中绘制当前动画，绘制完成后直接替换 currentFiber树，由于省去了两帧替换间的计算 time，不会出现白屏的情况。
3. `在内存中构建并直接替换的技术叫做双缓存`
   
## 双缓存 Fiber 树

1. current fiber 和 workInProgress fiber 两个fiber 通过 alternate 属性链接

```js
currentFiber.alternate === workInProgressFiber
workInProgressFiber.alternate === currentFiber
```
2. React 应用的根节点通过 `current` 指针在不同的 Fiber树的 rootFiber 间切换完成 currentFiber 树执行的切换。

3. 即当 workInProgress Fiber树 构建完成交给 renderer渲染在页面上后， 应用根节点 `current指针`指向 workInProgress Fiber 树，此时 workInProgress Fiber就变成了 current Fiber树。

4. 每次状态更新都会产生新的 workInProgress Fiber树，通过 current Fiber 和 WorkInProgress Fiber树交替进行，完成DOM更新。




