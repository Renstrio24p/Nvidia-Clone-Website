const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'webpack.bundle.js',
    clean: true,
  },
  target: 'web',
  devServer: {
    port: '4500',
    static: {
      directory: path.join(__dirname, 'src/images')
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, 
        exclude: /node_modules/, 
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader",],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './', 'index.html')
    }),
    new CopyPlugin({
        patterns: [
          { from: "src/images", to: "./" },
        ],
      }),
  ]
};
