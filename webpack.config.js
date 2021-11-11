
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: './public/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/dist'
    },

mode: 'production',
module: {
    rules: [
        {
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
    ],
},
//* add plug-ins below
plugins: []

  };





module.exports = config;