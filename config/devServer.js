const webpack = require('webpack');

exports.devServer = function (options) {
    return {
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },

        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            quiet: false,
            stats: {
                colors: true
            },

            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };
}