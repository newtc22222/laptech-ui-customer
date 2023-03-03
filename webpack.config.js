const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function srcPath(subdir) {
  return path.join(__dirname, 'src', subdir);
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: '[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    allowedHosts: ['.preview.csb.app'],
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
