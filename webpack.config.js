/**
 * Created by Paburitel on 27.04.2017.
 */
'use strict'

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, "./frontend"),
    entry:
        ['whatwg-fetch', './main.js']
    ,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "./public"),
        library: '[name]'
    },
    watch: NODE_ENV == 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin("style.css")
    ],
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".json", '.css']
    },
    resolveLoader: {
        modules: ["node_modules"],
        extensions: [".js", ".json"],
        moduleExtensions: ['-loader', '*']
    },
    module: {

        rules: [
            {
                // enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: 'file-loader'
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                // loader: "url?limit=10000"
                use: "url-loader"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }
};
            // {
            //     test: /font-awesome.min.css/,
            //     use: { loader: 'file?name=/css/[name].[ext]'}
            // }
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }

