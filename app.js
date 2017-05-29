let app = new (require('koa'))();

//初始化
require('./controller/koaMiddleware').forEach((value) => {
    app.use(value)
})
//socket.io
let server = require('http').Server(app.callback());
let io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});


//监听端口
server.listen(require('./config/config').port);
