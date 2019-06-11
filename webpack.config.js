const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
	mode: 'development',
	entry: `${SRC_DIR}/index.js`,
	output: {
		path: DIST_DIR,
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ { loader: 'babel-loader' } ]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	plugins: [ new CleanWebpackPlugin() ],
	devServer: {
		host: 'localhost',
		port: 3000,
		open: true
	}
};
