const {composePlugins, withNx} = require('@nrwl/webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Add the Dotenv plugin to load environment variables from .env file in the root directory.

  return config;
});
