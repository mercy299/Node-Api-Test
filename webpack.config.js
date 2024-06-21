const path = require('path');

module.exports = {
  entry: './app.js', // Replace with your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  },
  // Add loaders, plugins, and other configurations as needed
};
