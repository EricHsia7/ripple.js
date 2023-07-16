const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: 'web', // Target the browser environment
  mode: 'production', // Set the mode to 'production' or 'development'
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'ripple.min.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    library: 'ripple', // Name of the exported library (if applicable)
    libraryTarget: 'umd', // Format of the exported library (if applicable)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // File extensions to resolve
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // Add any additional plugins and configurations as needed
};
