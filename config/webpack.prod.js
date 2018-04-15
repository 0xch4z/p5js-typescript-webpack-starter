const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      './node_modules/p5/lib/p5.min.js',
      './node_modules/p5/lib/addons/p5.dom.min.js',
      './node_modules/p5/lib/addons/p5.sound.min.js',
    ],
    main: './src/main.ts'
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
    ]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  }
};
