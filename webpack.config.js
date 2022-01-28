const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    mode: mode, 
    target: target, 

    output:{
        path: path.resolve(__dirname, "dist"), // get the absolute path to dirname dist by calling path.resolve on dirname dist
        assetModuleFilename: "images/[hash][ext][query]"
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // the i stands for case insensitiveness, (s[ac]|c)ss$ is supporting sass, scss and css
                type: "asset", //decides by filesizes over 8KB wether it should be inline js - rest will be a seperate output file, "asset/resource" only has original size output files, "asset/inline" sets images to inline javascript
                /* parser:{
                    dataUrlCondition: {
                        maxSize: 30*1024,
                    }
                } */
            },
            {
                test: /\.(s[ac]|c)ss$/i, // the i stands for case insensitiveness, (s[ac]|c)ss$ is supporting sass, scss and css
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.jsx?$/, // any file that ends in .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader'
                  }
                ]
              },
        ],
    },

    plugins: [
        //new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true, //will make temporary changes made in browser stay visible
    },
  };