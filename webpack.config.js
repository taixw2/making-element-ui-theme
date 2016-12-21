var path = require('path')
var webpack = require('webpack')
var et = require('./element-theme')

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/',     
        filename: 'build.js'
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query : {
              "presets": [
                ["es2015", { "modules": false }]
              ],
              "plugins": ["transform-vue-jsx"]
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader" //ExtractTextPlugin.extract({fallbackLoader:'style-loader',loader:'css-loader'})
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader" //ExtractTextPlugin.extract({loader:'css-loader!sass-loader',fallbackLoader:'style-loader'})
        }]
    },
    plugins : [
      new htmlWebpackPlugin({
        filename : "index.html",
        template : "index.html"
      })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost',
                secure: false,
                // pathRewrite : {
                //   "^/api" : ""
                // }
            }
        }
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("style.css")

    ]);

    module.exports.module.loaders.pop();
    module.exports.module.loaders.pop();

    module.exports.module.loaders.push({
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallbackLoader:'style-loader',loader:'css-loader'})
    }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({loader:'css-loader!sass-loader',fallbackLoader:'style-loader'})
    })

    et.run({
        config: './element-variables.css',
        out: './dist/theme'
    })

} else {

    et.watch({
        config: './element-variables.css',
        out: './src/theme'
    })

}
