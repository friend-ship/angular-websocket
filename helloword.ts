import {Server} from 'ws';
const wsServer = new Server({port:8081});
//当有任何一个客户端连接到服务器时，给这个客户端推送一条消息
wsServer.on("connection",websocket => {
    websocket.send("hello world welcome");

    websocket.on('message',message => {
        console.log(message)
    })
});