# messageChannel 和 postMessage 有什么区别

1. window.postMessage (广播)
它是基于目标窗口引用的。
场景：主页面想给 iframe 发消息。
做法：主页面必须拿到 iframe 的引用，然后喊话：“喂，iframe，给你个数据”。
缺点：
iframe 里可能有很多脚本都在监听 window 的消息，大家都能听到，必须小心判断 event.origin 和消息格式，防止处理了别人的消息。
2. MessageChannel (专线)
它是基于管道的。
场景：建立了专属通道后。
做法：MessageChannel 创建了 port1 和 port2。主页面拿着 port1，iframe 拿着 port2。
优点：
直接：主页面对着 port1 说话，只有 port2 能听到。
干净：不会触发全局 window 的事件，不会和页面上其他逻辑冲突。
灵活：你可以创建多个 Channel。比如一个专门用来传用户数据，另一个专门用来传日志，互不干扰。


## 为什么你的代码里两者都要用？
这通常是一个标准套路：
因为 iframe 刚加载时，它手里没有 MessageChannel 的电话听筒（port2）。
所以，必须先用 window.postMessage（广播）把听筒（port2）“快递” 给 iframe。
iframe 收到快递，取出听筒（port2）。
以后所有的聊天，都改用 port1 和 port2 这条专线（MessageChannel）进行了，不再使用广播。
## 总结
postMessage 是用来 “建立联系” 的（把端口送过去）。
MessageChannel 是用来 “保持通话” 的（后续的实际业务通信）