
module.exports = {
    output: {
      publicPath: "http://localhost:8080/",
    },
  
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
  
    devServer: {
      port: 8080,
      historyApiFallback: true,
    },
  
    module: {
      rules: [
        {
          test: /\.m?js/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    }
  };