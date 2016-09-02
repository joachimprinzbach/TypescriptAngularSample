const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const config = {

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
};

module.exports = validate(config);

