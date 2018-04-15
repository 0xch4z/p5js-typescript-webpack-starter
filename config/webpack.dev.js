const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: {
    vendor: [
      './node_modules/p5/lib/p5.js',
      './node_modules/p5/lib/addons/p5.dom.js',
      './node_modules/p5/lib/addons/p5.sound.js',
    ],
    main: './src/main.ts'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({ configFile: './tsconfig.json' })
    ],
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
      },
    ]
  },
  devServer: {
    contentBase: 'public'
  }
};
