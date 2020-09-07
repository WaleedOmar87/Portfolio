const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
	}),
	new MiniCssExtractPlugin({
		filename: "[name].css",
		chunkFilename: "[id].css",
		allChunks: true,
	}),
];

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};

module.exports = () => {
	let config = {
		entry: "./src/index.js",
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, "./dist"),
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: "babel-loader",
					query: {
						presets: ["@babel/preset-env"],
					},
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
					],
				},
			],
		},
		plugins: plugins,
	};

	return config;
};
