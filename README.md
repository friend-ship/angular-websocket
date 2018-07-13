# angular-websocket
使用node.js搭建服务器环境
1.新建socket-server文件夹
  在文件夹下执行命令 npm init -y
  生成一个package.json文件
2.引入node的类型定义文件
  npm i @types/node --save
3.编写tsconfig.json配置文件，说明如何将ts文件编译为js文件
  {
      "compilerOptions": {
          "target": "es5",
          "module": "commonjs",
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          //编译输出js文件路径
          "outDir": "build",
          //  开发时用es6语法
          "lib": [
              "es6"
          ]
      },
      "exclude": [
          "node_modules"
      ]
  }
  4.添加编译工具
    npm install -g typescript
    执行编译任务
    
  5.创建服务端
    // 添加依赖库   
    npm install ws --save
    // 添加类型定义文件  
    npm install @types/ws --save
    
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
    
  
    
    
    
    
    
  
 
  
