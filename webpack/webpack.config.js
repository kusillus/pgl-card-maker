const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins.js')

module.exports = {
    entry: ["./src/js/app.js"],
    module: {
        rules: [
            loaders.SCSSLoader,
            loaders.JSLoader,
            loaders.PUGLoader,
            loaders.ESLintLoader
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js"
    },
    plugins: [
        plugins.StyleLintPlugin,
        plugins.ExtractTextPlugin,
        plugins.HtmlWebpackPlugin
    ]
};