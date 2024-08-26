const webpack = require('webpack');

module.exports = {
  // ... other config
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
