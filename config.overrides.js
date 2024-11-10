const path = require('path');

module.exports = function override(config, env) {
  // Add a new entry for the background script
  config.entry = {
    background: path.resolve(__dirname, 'src/background/background.js'), // Background script entry
  };

  config.output = {
    path: path.resolve(__dirname, "build")
  }
  return config;
};
