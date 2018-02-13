var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry: './login.jsx',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015','react']
					}
				}
			},
			{ 
				test: /\.css$/, 
				use: [
					{
						loader: 'style-loader'
					}, 
					{
						loader: 'css-loader'
					}
				]
			}
		]
	},
	plugins: [
	
		new HtmlwebpackPlugin({
			title: 'Login',
			filename: 'index.html'
		}),
		new OpenBrowserPlugin({
			url: 'http://localhost:8080'
		})
	
	]
}