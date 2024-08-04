const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = (env) => {
  console.log(`***********ENVIRONMENT - ${env.NODE_ENV}***********`);
  return {
    // Where files should e sent once they are bundled
    output: {
      path: path.join(__dirname, `/${env.BUILD_NAME}`),
      filename: "index.bundle.js",
      publicPath: "/",
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
      port: 4002,
      historyApiFallback: true,
      host: '0.0.0.0', // Allow access from external devices
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /nodeModules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif|ico)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        favicon: "src/favicon.ico",
        template: "src/index.html",
        minify: {
          minifyJS: true,
          minifyCSS: true,
        },
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      }),
    ],
    resolve: {
      fallback: {
        crypto: false,
        stream: false,
        assert: false,
      },
    },
  };
};
