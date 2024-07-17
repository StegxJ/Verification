const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify your entry point here
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
