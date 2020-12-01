"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: ['./src/index.js'],

    output: {
        filename: "js/[name].bundle-[hash].js",
        chunkFilename: "js/[name].bundle-[hash].js",
        path: path.resolve(__dirname, '..', "public"),
        publicPath: "/"
    },

    resolve: {
        modules: [path.resolve(__dirname, './src'), "node_modules"],
        extensions: ['.js']
    },

    optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },

    module: {
        rules: [
            {
                test: /(\.js)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            url: true
                        }
                    },

                ]
            },
            {
                test: /\.(jpeg|jpg|gif|png)$/i,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "images/",
                    publicPath: "images/"
                }
            },

        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            title: 'MovieSearcher',
            template: './src/index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        })
    ]
};