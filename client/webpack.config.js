const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js", publicPath: '/' },
    mode: "development",
    resolve: { 
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.re', '.ml', '.web.js', '.js', '.json', '.web.jsx', '.jsx', '.mjs'],
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        compress: true,
        historyApiFallback: true,
        port: 9000,
        hot: true
      },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 10000,
          minRemainingSize: 0,
          minChunks: 2,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            defaultVendors: {
              minChunks: 20,
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              chunks: 'all',
              reuseExistingChunk: true,
            },
          },
        },
      }
};