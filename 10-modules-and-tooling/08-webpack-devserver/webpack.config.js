const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Export the configuration object
module.exports = {
  // Set the mode to 'development'
  mode: "development",

  // Specify the entry point of the application
  entry: "./src/index.js",

  // Specify the output configuration
  output: {
    // Set the output path to the 'dist' directory
    path: path.resolve(__dirname, "dist"),

    // Set the output filename to 'bundle.js'
    filename: "bundle.js",
  },

  // Configure the webpack dev server
  devServer: {
    // Specify the static directory for serving files
    static: {
      directory: path.resolve(__dirname, "dist"),
    },

    // Set the port number to 3000
    port: 3000,

    // Automatically open the browser when the server starts
    open: false,

    // Enable hot module replacement
    hot: true,

    // Enable gzip compression
    compress: true,
  },

  // Configure the module rules
  module: {
    rules: [
      {
        // Apply the following rule to files with '.css' extension
        test: /\.css$/,

        // Use 'style-loader' and 'css-loader' to handle CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // Configure the plugins
  plugins: [
    // Generate an HTML file with the specified options
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
