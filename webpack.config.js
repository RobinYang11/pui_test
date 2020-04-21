const htmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const path = require('path');
const yargs = require("yargs");
const argv = yargs.alias('env', 'enviroment').argv
const port = 3000;


module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "dist")
	},
	mode: argv.env,
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 3000,
		quiet: true, //隐藏打包信息 ，配合友好提示插件
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
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: ExtractCssChunks.loader,
						options:{
							publicPath: '/dist',
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: ExtractCssChunks.loader,
						options:{
							publicPath: '/dist',
						}
					},
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new ExtractCssChunks({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`you app running on localhost:${port}`],
				notes: ["notes"]
			},
			onErrors: function (a, b) {

			},
			clearConsole: true,
		}),
		new htmlWebpackPlugin({
			title: "PUI",
			template: "./site/index.html"
		})
	]
}