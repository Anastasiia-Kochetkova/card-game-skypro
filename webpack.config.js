const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        clean: true,
        path: path.resolve(__dirname, "dist"),
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            /*{
                test: /\.(s*)css$/,     убрать старую версию, если всё заработает
                use: [
                    "style-loader",
                    miniCss.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },*/
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "static", to: "static" }],
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new miniCss({
            filename: "style.css",
        }),
    ],
};
