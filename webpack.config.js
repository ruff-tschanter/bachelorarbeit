const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



let mode = "development";
let target = "web";

/* MULTIPLE html pages */
let htmlPageNames = ['map', 'moisture', 'weather'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/templates/${name}.html`, // relative path to the HTML files
    filename: `./pages/${name}.html`, // output HTML files,
    inject: 'body'
  })
});

/* MULTIPLE MODALS */
let modalNames = ['placeSensorModal'];
let multipleModalHtmlPlugins = modalNames.map(name => {
  return new HtmlWebpackPartialsPlugin({
    path: `./src/modals/${name}.html`, // relative path to the HTML files
    location: `${name}`, 
  })
});


/* MULTIPLE PARTIALS */
let partialNames = ['navigation'];
let multiplePartialsHtmlPlugins = partialNames.map(name => {
  return new HtmlWebpackPartialsPlugin({
    path: `./src/partials/${name}.html`, // relative path to the HTML files
    location: `${name}`, 
  })
});


if (process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {

    mode: mode, 
    target: target, 

    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, "dist"), // get the absolute path to dirname dist by calling path.resolve on dirname dist
        assetModuleFilename: "images/[hash][ext][query]"
    },

    optimization: {
      minimizer: [new UglifyJsPlugin({
          uglifyOptions: {
              compress: {
                  unused: false
              },
              mangle: {
                  keep_fnames: true
              }
          }
      })]
  },

    module: {
        rules: [
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader',
            }
          },
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
        ],
    },

    plugins: [
        //new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: 'body',
            favicon: './src/images/sun.svg'
        }),
        new CopyPlugin({
          patterns: [
            { from: "./src/images", to: "images" },
          ],
        }),
    ].concat(multipleHtmlPlugins, multipleModalHtmlPlugins, multiplePartialsHtmlPlugins),

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: "source-map",
    devServer: {
      static: "./dist",
      hot: true, //will make temporary changes made in browser stay visible
    },
  };