const path = require('path');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractTextPlugin = new _ExtractTextPlugin('[name].bundle.css');

const _StyleLintPlugin = require('stylelint-webpack-plugin');
const StyleLintPlugin = new _StyleLintPlugin({
	configFile: path.resolve(__dirname, 'stylelint.config.js'),
	context: path.resolve(__dirname, '../src/css'),
	files: '**/*.css',
	failOnError: false,
	quiet: false,
});

const _HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
	title: 'Project Demo',
	hash: true,
	template: path.resolve(__dirname,'../src/index.pug'),
	filename: "./index.html"
})

module.exports = {
  	ExtractTextPlugin: ExtractTextPlugin,
  	StyleLintPlugin: StyleLintPlugin,
  	HtmlWebpackPlugin: HtmlWebpackPlugin
};