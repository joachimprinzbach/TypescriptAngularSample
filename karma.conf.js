'use strict';

var webpackConfig = require('./config/webpack.test.config.js');
webpackConfig.entry = {};

module.exports = function (config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './app/**/*.spec.ts'
        ],
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        preprocessors: {
            'app/**/*.spec.ts': ['webpack']
        },
        webpack: webpackConfig,
        webpackServer: { noInfo: true },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        reporters: [
            'progress'
        ]
    };
    config.set(configuration);
};