const webpack = require('webpack');

const plugins = [
  new webpack.DefinePlugin({
    ENV: JSON.stringify({
      CLIENT: true,
      SERVER: false
    }),
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
];

plugins.push(new webpack.optimize.UglifyJsPlugin({
    include: /\.js$/,
    mangle: true,
    comments: false,
    compress: {
      warnings: true
    },
    minimize: true
  }));

module.exports = {
    entry: "./index.js",
    target: 'node',
    plugins: plugins,
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
};
