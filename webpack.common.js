const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './source/index.js',
	plugins: [
		new CleanWebpackPlugin(['wwwroot']),
		new HtmlWebpackPlugin({
			template: './source/index.html'
		}),
		new VueLoaderPlugin()
	],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'wwwroot')
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [ 'file-loader' ]
			},
			{
				test: /\.vue$/,
				use: [ 'vue-loader' ]
			}
		]
	}
}