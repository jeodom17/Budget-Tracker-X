
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
plugins: [
    new WebpackPwaManifest({
        filename: 'manifest.json',
        fingerprints: false,
        inject: false,
        name: 'Budget App',
        short_name: 'Budget App',
        description: 'A budget tracking app that allows you to track your withdrawals and deposits with or without a data/internet connection',
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: 'standalone',
        start_url: '/',
        icons: [
            {
                src: path.resolve(__dirname, 'public/icons/icon-512x512.png'),
                sizes: [72, 96, 128, 192, 256, 384, 512],

            }
        ]
    })
]

  };

//* export config

module.exports = config;