const path = require("path");
module.exports = () => {
	let config = {
		mode: "development" ,
		entry: "./src/index.js",
		output: {
			filename: "[name].js",
			path: path.resolve(__dirname, "dist"),
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
						"style-loader", "css-loader"
					],
				},
			],
		}
	};

	config.devServer = {
		contentBase: path.resolve(__dirname, "./"),
		hot: true,
		hotOnly: true
	};

	return config;
};
