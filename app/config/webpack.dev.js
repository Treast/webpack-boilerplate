var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve('app', 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        alias: {
            '@': path.resolve('app', 'components')
        }
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.(s?)css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./assets/css/[name].[chunkhash:10].css'),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html',
            hash: true,
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve('app', 'static'),
                to: 'assets/'
            }
        ])
    ],
    devServer: {
        contentBase: path.resolve('app'),
        watchContentBase: true,
        port: 3000,
        hot: true,
        inline: true,
        noInfo: true,
        open: true
    }
}