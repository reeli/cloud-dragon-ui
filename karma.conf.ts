module.exports = function (config) {
    const _config = {
        basePath: "",

        frameworks: ["jasmine"],

        files: [
            {pattern: "./config/karma-test-shim", watched: false}
        ],

        preprocessors: {
            "./config/karma-test-shim": ["webpack"]
        },

        webpack: require("./config/webpack.test"),

        webpackMiddleware: {
            stats: "errors-only"
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["PhantomJS"],
        singleRun: true
    };

    config.set(_config);
};
