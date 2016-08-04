const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const devServerConfig = require('./config/devServer');

const common = {

    entry: {
        app: './app/app.module.ts'
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};

var config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
    case 'stats':
        config = merge(
            common,
            {
                output: {
                    publicPath: '/TypescriptAngularSample/'
                }
            }
        );
        break;
    default:
        config = merge(
            common,
            devServerConfig.devServer({
                host: process.env.HOST,
                port: 3000
            })
        );
}

module.exports = validate(config);

