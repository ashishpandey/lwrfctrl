var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: "./src/app/index.jsx",
	output: {
		path: path.join(__dirname, "src/assets"),
		publicPath: "src/assets/",
		filename: "bundle.js"
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
		loaders: [
		    { test: /\.jsx?$/,   loader: "babel", include: path.join(__dirname, "src/app") },
			{ test: /\.css$/,    loader: "style-loader!css-loader" },
			{ test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
			{ test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },
		]
	},
	amd: { jQuery: true },
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 20 }),
		new HtmlWebpackPlugin()
	],
	fakeUpdateVersion: 0
};