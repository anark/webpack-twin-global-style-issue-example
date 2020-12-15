const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(css)$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: './index.html'
    })
    // MiniCssExtractPlugin {
    //   options: {
    //     filename: 'css/[name]-[contenthash:8].css',
    //     moduleFilename: [Function: moduleFilename],
    //     ignoreOrder: false,
    //     chunkFilename: 'css/[name]-[contenthash:8].chunk.css'
    //   }
    // },
  ]
}
