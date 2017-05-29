const path     = require('path')
module.exports = {
    serve : {
        path: path.resolve(__dirname, '../public')
    },
    views : {
        path     : path.resolve(__dirname, '../views'),
        extension: 'jade'
    },
    router: [
        {
            path  : '/',
            render: 'index.html',
        }
    ],
    port  : 3000
}