const path = require('path');
const yargs = require("yargs");
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const argv = yargs.alias('env', 'enviroment').argv

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "dist")
	},
	mode: argv.env,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		"alias": {
			// "react": "preact/compat",
			// "react-dom/test-utils": "preact/test-utils",
			// "react-dom": "preact/compat",
			// Must be below test-utils
		},
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 3000,
		quiet:true, //隐藏打包信息 ，配合友好提示插件
	},
	module: {
		rules: [
			{
				test: /\.ts?$|\.tsx?$/,
				loaders: ["babel-loader", "ts-loader"]
			},
			{
				test: /\.jsx?$|\.js?$/,
				loader: [
					"babel-loader"
				],
			}
		]
	},
	plugins: [
		// new cleanWebpackPlugin(),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo:{
				messages:["hello"],
				notes:["notes"]
			},
			onErrors:function(a,b){

			},
			clearConsole:true,
		}),
		new htmlWebpackPlugin({
			title: "PUI",
			template: "./site/index.html"
		}),
	]
}