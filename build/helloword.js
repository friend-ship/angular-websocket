"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = require("ws");
var wsServer = new ws_1.Server({ port: 8081 });
//当有任何一个客户端连接到服务器时，给这个客户端推送一条消息
wsServer.on("connection", function (websocket) {
    websocket.send("hello world welcome");
    websocket.on('message', function (message) {
        console.log(message);
        websocket.send("ok");
    });
});
