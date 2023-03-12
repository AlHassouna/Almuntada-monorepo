const {composePlugins, withNx} = require('@nrwl/webpack');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
  // Add the Dotenv plugin to load environment variables from .env file in the root directory.
  config.plugins.push(new Dotenv());

  // Add the CopyWebpackPlugin to copy the .env file from root directory to the dist folder.
  config.plugins.push(new CopyWebpackPlugin({
    patterns: [
      {
        from: '../../.env',
        to: ''
      }
    ]
  }));

  // Add the nodeExternals plugin to exclude node_modules from the bundle.
  config.externals = [nodeExternals()];

  return config;
});
