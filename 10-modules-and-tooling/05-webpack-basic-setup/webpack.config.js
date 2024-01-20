const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    /*
    path is a key in the output object of the Webpack configuration. It specifies the output directory for your project's bundled files.

    path.resolve is a method provided by Node.js's path module. It resolves a sequence of paths or path segments into an absolute path.

    __dirname is a global variable in Node.js that contains the directory path of the current module (in this case, the Webpack configuration file).

    'dist' is a subdirectory where you want your bundled files to be output.  
    */
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
