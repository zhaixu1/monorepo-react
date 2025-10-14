# permance
## 1. 监测用户打开时间

通过 performace.now() 获取时间

```js
  renderRef.current = performance.now();

  useEffect(() => {
    console.log('初始化组件');
    const renderEnd = performance.now();
    console.log(performance.now());
    
    const renderTime = renderEnd - renderRef.current;
    console.log(`MyComponent 首次渲染耗时: ${renderTime.toFixed(2)}ms`);
  }, []);
```

## 监测函数执行时间
通过 performace.mark 自定义范围，获取时间
```js
  const handleRefresh = () => {
    performance.mark('startRefresh');
    setTimeout(() => {
      performance.mark('endRefresh');
      console.log(performance);
      console.log(performance.getEntriesByType('mark'));
      const measure = performance.measure('12121', 'startRefresh', 'endRefresh');
      console.log(`刷新耗时: ${measure.duration.toFixed(2)}ms`);
    }, 1000);
  };
````


## 监测加载资源

```jsx
import { useEffect } from 'react';

function ResourceMonitor() {
  useEffect(() => {
    // 创建性能观察器
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        // 过滤出当前组件相关的资源（例如图片）
        if (entry.initiatorType === 'img' && entry.name.includes('/assets/')) {
          console.log(`图片 ${entry.name} 加载耗时: ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    // 观察资源加载
    observer.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect(); // 组件卸载时停止观察
    };
  }, []);

  return <div>资源监测中...</div>;
}
```

