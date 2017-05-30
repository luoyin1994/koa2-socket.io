/** 项目整体初始文件 **/
module.exports = function () {
    const config = require('../config/config');
    //导入koa
    require('./koa/init')(config);
    //控制台输出url
    const url = `${config.url.scheme}://${config.url.host}:${config.url.port}`;
    console.log(`server is running at: ${url}`);
}

