"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		compress: true,
		port: 9000,
	},
	entry: {
		app: './src/index.tsx'
	},
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', {
					loader: 'css-loader',
					options: {
						importLoaders: 1,
					},
				}, 'postcss-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	},
};
