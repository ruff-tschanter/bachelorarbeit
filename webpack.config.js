let mode = "development";

if (process.env.NODE_ENV === "production"){
    mode = "production";
}

module.exports = {
    mode: mode, 
    module: {
        rules: [
            {
                test: /\.js$/, // any file that ends in .js
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    devtool: "source-map",
    devServer: {
      static: "./dist",
    },
  };