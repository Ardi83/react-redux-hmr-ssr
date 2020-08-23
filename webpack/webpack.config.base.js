const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '../source/client'),
  target: 'web',
  stats: {
    assets: true
  },
  resolve: {
    alias: require('../config/aliases'),
    extensions: ['*', '.js', '.tsx', '.ts'],
  },
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader'
      // },
      // {
      //   test: /\.tsx?$/,
      //   enforce: 'pre',
      //  loader: 'tslint-loader',
      // },
      {
        test: /\.(js|ts|)x?$/,
        include: path.resolve(__dirname, '../source'),
        exclude: path.resolve(__dirname, '../source/server'),
        loader: 'babel-loader'
      },
      {
        test: /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ['file-loader?name=fonts/[name].[ext]']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader?name=images/[name].[ext]']
      }
    ]
  },
}
