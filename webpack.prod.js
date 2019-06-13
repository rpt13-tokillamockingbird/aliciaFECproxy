const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: DIST_DIR,
		filename: 'bundle.[contentHash].js'
	}
});
