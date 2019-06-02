const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Webpack 4 core concepts:
// 1. Entry point - where webpack will start the bundling
// 2. The output
// 3. Loaders
// 4. Plugin

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	// Copy the dev Index.html to the dist index.html using a plugin
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
