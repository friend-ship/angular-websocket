import {Server} from 'ws';
const wsServer = new Server({port:8081});
//当有任何一个客户端连接到服务器时，给这个客户端推送一条消息
wsServer.on("connection",websocket => {
    //  连接成功
    websocket.send("hello world welcome");
    // 接收客户端发来消息
    websocket.on('message',message => {
        console.log(message)
        websocket.send("ok");
    });    
});