const config   = require('../config/config');//引入配置文件
module.exports = [
    //静态资源设置
    require('koa-static')(config.serve.path),
    //视图文件和视图引擎设置
    require('koa-views')(config.views.path, {extension: config.views.extension}),
    //路由设置
    require('koa-simple-router')(_ => {
        let configRouter = config.router;
        configRouter.forEach((value, item) => {
            //优先渲染有render属性的
            if (typeof configRouter[item].render !== 'undefined' && configRouter[item].render.toString().trim() !== '') {
                _.get(configRouter[item].path, async (ctx, next) => {
                    await ctx.render(configRouter[item].render)
                })
            } else if (typeof configRouter[item].body !== 'undefined' && configRouter[item].body.toString().trim() !== '') {
                _.get(configRouter[item].path, async (ctx, next) => {
                    ctx.body = await configRouter[item].body
                })
            } else {
                _.get(configRouter[item].path, async (ctx, next) => {
                    ctx.body = '404 not found'
                })
            }
        })
    })
]