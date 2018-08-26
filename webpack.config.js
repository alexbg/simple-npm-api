const path = require('path');


module.exports = (env,args) => {
  let distPath = 'devDist';
  let mode = 'development'
  let config;
  if(args.pro){
    distPath = 'dist';
    mode = 'production';
  }

  config = {
    entry: './index.js',
    mode: mode,
    target: 'node',
    watchOptions: {
      ignored: /node_modules/
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, distPath),
      libraryExport: 'default',
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  };
  return config;
}