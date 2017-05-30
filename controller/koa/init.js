/** koa初始化 **/
module.exports = function (config) {
    const app    = new (require('koa'))();
    //保证socket.io没有加入时也可以开启服务
    let server   = app;
    //初始化
    server       = require('./main')(app);
    //监听端口
    server.listen(config.url.port);
}
