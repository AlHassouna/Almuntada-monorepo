import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import Dotenv from 'dotenv-webpack';

module.exports = {
  entry: './apps/server/src/main.ts',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'DB_HOST': JSON.stringify(process.env.DB_HOST),
        'DB_USER': JSON.stringify(process.env.DB_USER),
        'DB_PASSWORD': JSON.stringify(process.env.DB_PASSWORD),
        'DB_NAME': JSON.stringify(process.env.DB_NAME),
      }
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: ".env", to: 'dist/apps/server/.env'
        },
      ]
    })
  ],

};
