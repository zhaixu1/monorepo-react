# MessageChannel 通信示例

这个示例演示了如何使用 `MessageChannel` API 在主页面和 iframe 之间建立直接的双向通信通道。

## 文件结构

- `index.html`: 主页面，创建 Channel 并将端口发送给 iframe。
- `iframe.html`: 子页面，接收端口并进行通信。

## 如何运行

1. 由于浏览器的安全策略，建议使用本地服务器运行这些文件，而不是直接双击打开 `file://...`。
2. 如果你安装了 `live-server` 或 `http-server`，可以在当前目录下运行：
   ```bash
   npx http-server .
   ```
3. 然后访问 `index.html`。

## 原理说明

1. **创建通道**: 主页面调用 `const channel = new MessageChannel()` 创建两个相互连接的端口 `port1` 和 `port2`。
2. **端口传递**: 主页面通过 `iframe.contentWindow.postMessage` 将 `port2` 发送给 iframe。关键在于 `postMessage` 的第三个参数 `[port2]`，这会将端口的所有权“转移”给 iframe。
3. **建立连接**: 
   - 主页面监听 `port1.onmessage`。
   - iframe 监听 `window.onmessage` 收到端口后，监听 `port.onmessage`。
4. **双向通信**: 之后双方就可以直接通过 `port` 对象互发消息，而不需要每次都通过 `window.postMessage` 进行转发。这在多个 iframe 互通或 Worker 通信中非常有用，因为它可以建立点对点的直接链接。


