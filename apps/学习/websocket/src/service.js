const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ port: 3000 });

console.log("WebSocketServer is running on port 3000");

wss.on("connection", (ws) => {
    console.log("新客户端连接");

    ws.on("message", (message) => {
        console.log("收到客户端消息", message);

        ws.send(
            `服务端已接收111：${message}，当前时间：${new Date().toLocaleString()}`
        );

        // 可选：广播消息给所有已连接的客户端（群聊效果）
        wss.clients.forEach((client) => {
            // 过滤当前连接，仅向其他客户端广播
            if (client !== ws && client.readyState === client.OPEN) {
                client.send(`其他客户端：${message}`);
            }
        });
    });

    ws.on("close", () => {
        console.log("客户端断开连接");
    });

    ws.on("error", (error) => {
        console.log("客户端连接错误", error);
    });
});
