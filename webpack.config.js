const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";

if (process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    mode: mode, 
    module: {
        rules: [
            {
                test: /\.s?css$/i, // the i stands for case insensitiveness,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.js$/, // any file that ends in .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true, //will make temporary changes made in browser stay visible
    },
  };