const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [ 
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
          },
          {
            test: /\.(woff(2)?|ttf|eot|jpg|svg)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                  useRelativePath: true
             }
            }]
         }
    ] },
    plugins: [ 
        new ExtractTextPlugin(
          {filename: 'style.css'}
        )]


};