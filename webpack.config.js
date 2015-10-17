'use strict';

var webpack = require('webpack');
var plugins = [new webpack.NoErrorsPlugin()];

module.exports = {  
    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'donutpie.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: 'style-loader!css' },
            { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
        ]
    },
    plugins: plugins
};