const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: DIST_DIR,
		filename: '[name].bundle.js'
  },
  plugins: [
		new HtmlWebpackPlugin({
			template: './client/src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
	}
});
