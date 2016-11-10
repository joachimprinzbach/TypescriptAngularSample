const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {

    entry: {
        app: './app/app.ts',
        vendor: './app/vendor.ts'
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: ['node_modules']
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new ngAnnotatePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};


