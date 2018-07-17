Ref : Javascript design pattern  - addy osmani 

common js, AMD, require js, Common js + AMD 

Webpack is a module bundler , to resolve network latency , tree shaking

npm init -y

npm i webpack webpack-cli --save -dev or npm i webpack webpack-cli -D

Official website : www.webpackjs.org

1 Entry

2. outputs

3. Loaders

4. Plugins


Dependencies , Dev dependencies , Global

npm i loadash

package-lock.json -- > To genereate exact dev dependency graph


cmd : node (interpreter) -->
module -->
require -->


Module pattern :
    (function(){
        return  {

        }
    })()


To run webpack  -- ./node_modules/webpack/bin/webpack

./node_modules/webpack-cli/bin/webpack

D:\Webpack-boiler-plate\node_modules/webpack-cli/bin/cli.js



-- To install npm i html-webpack-plugin

-- Install webpack dev server 

-- npm  i babel babel-loader babel-core --save -d

Also set presets - for babel


Presets : npm i babel-preset-env --save -dev


To enable debugging in browser : configure in webpack.config.js -->

devtool: "cheap-eval-source-map",

"serve": "webpack-dev-server --open" -- to open browser also