
const htmlwebpackPlugin  = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry : "./index.js",
    output:{
        filename :"test.js",
        path : path.join(__dirname  , 'dist')

    },
    plugins:[
        new htmlwebpackPlugin({
            template :'./index.html'
        })
    ],
    watch: true
}