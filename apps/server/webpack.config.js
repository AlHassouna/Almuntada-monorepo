// Nx plugins for webpack.
const {composePlugins, withNx} = require("@nrwl/webpack");
module.exports = composePlugins(withNx(), (config) => {
  // Add the Dotenv plugin to load environment variables from .env file in the root directory.

  return config;
});
