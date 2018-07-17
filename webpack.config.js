
const htmlwebpackPlugin  = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry : "./index.js",
    devtool: "cheap-eval-source-map",
    mode : "development",
    output:{
        filename :"test.js",
        path : path.join(__dirname  , 'dist')

    },
    module : {
        rules:[
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            
            {
                test:/\.css$/,
                use : [ {loader:'style-loader'},{loader :'css-loader'}
                        
                    ]
            }

        ]
    },
    plugins:[
        new htmlwebpackPlugin({
            template :'./index.html'
        })
    ]
    //watch: true

}