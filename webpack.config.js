const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 專案的載入點
  entry: {
    main: ["./src/base.js", "./src/scss/base.scss"], // output 檔名為 main.js, main.scss
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        use: [
          { loader: MiniCssExtractPlugin.loader }, // 將 CSS 抽取成獨立檔案
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"), // css 前綴
                  require("cssnano")({
                    preset: [
                      "default",
                      { discardComments: { removeAll: true } },
                    ], // 用 cssnano 壓縮 css
                  }),
                ],
              },
            },
          },
          { loader: "sass-loader" },
        ],
        test: /\.(scss|sass)$/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
