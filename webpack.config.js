module.exports = {
  mode: "development",
  devtool: "#eval-source-map",
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
