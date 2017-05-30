/** socket初始化 **/
module.exports = function (app) {
    let server = require('http').Server(app.callback());
    let io     = require('socket.io')(server);
    require('./main')(io);
    return server;
}