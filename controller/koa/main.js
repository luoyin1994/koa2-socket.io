/** koa主要内容 **/
module.exports = function (app) {
    //初始化koa中间件
    require('./middleware').forEach(value => app.use(value));
    //初始化socket.io并将server返回
    return require('../socket/init')(app);
}