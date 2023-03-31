const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
    }),
  ],
  module: {
    rules: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader?limit=10000" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "file-loader" },
      {
        test: /\.(css|scss|woff(2)?|eot|ttf|jpe?g|png|gif|svg|js)$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          "style-loader", 
          "css-loader", 
          "sass-loader",
          'svg-inline-loader',
          "svg-url-loader",
          {
            loader: ['file-loader'],
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};