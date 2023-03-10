const path = require('path');

const PACKAGE_NAME = '@js_fleet/random-array-elements';

const config = {
  context: __dirname,
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: PACKAGE_NAME,
    umdNamedDefine: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};

module.exports = (env, argv) => {
  return config;
};
