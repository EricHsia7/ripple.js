const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  target: ['web', 'es6'], // Target the browser environment
  mode: 'production', // Set the mode to 'production' or 'development'
  entry: './src/index.ts', // Entry point of your application
  output: {
    filename: 'ripple.min.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    library: {
      name: 'ripple',
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js|ts|jsx|tsx$/, // Use babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-syntax-flow'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'], // File extensions to resolve
    mainFields: ['browser', 'module', 'main'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // Add any additional plugins and configurations as needed
};
