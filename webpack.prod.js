const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const remotes = {
  insurance_detail_app: "nagp@https://mittalankit.github.io/nagp-insurance-detail/remoteEntry.js",
  insurance_renew_app: "nagp@https://mittalankit.github.io/nagp-insurance-renew/remoteEntry.js",
};


module.exports = merge(common, {
    mode: 'production',

    output: {
        publicPath: "https://mittalankit.github.io/nagp-insurance-app/",
    },

    plugins: [
        new ModuleFederationPlugin({
          name: "nagp_insurance_app",
          filename: "remoteEntry.js",
          remotes: remotes,
          exposes: {},
          shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
        new HtmlWebPackPlugin({
          template: "./src/index.html",
        }),
      ],
});
