const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Replace 'index.js' with the entry point of your library
  output: {
    filename: 'ripple.min.js', // Replace 'example-library' with your library name
    path: __dirname + '/dist',
    library: 'ripple', // Replace 'ExampleLibrary' with your library's exported global variable name
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
