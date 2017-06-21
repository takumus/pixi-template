var path = require('path');
module.exports = {
    entry: {
        app :'./.src/main.ts'
    },
    output: {
        filename: '../www/js/bundle.js'
    },
    resolve: {
        root:[path.join(__dirname,'node_modules')],
        extensions:['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}
