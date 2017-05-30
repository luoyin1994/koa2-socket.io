/** 配置文件 **/
const path     = require('path')
module.exports = {
    //静态资源配置
    serve : {
        path: path.resolve(__dirname, '../public'), //定义静态资源路径
    },
    //视图配置
    views : {
        path    : path.resolve(__dirname, '../views'), //定义视图文件入口路径
        template: 'jade', //定义模板引擎
    },
    //路由配置
    router: [
        {
            path  : '/', //路由地址
            render: 'index.html', //路由地址对应的渲染文件
            body  : '', //路由地址直接渲染的body内容，优先级低于render
        }
    ],
    //网站入口url配置
    url   : {
        scheme: 'http', //http协议方案
        host  : 'localhost', //主机名
        port  : 3000, //端口号
    }
}