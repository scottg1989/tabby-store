const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './client/assets')
]

module.exports = {
    entry: './client/assets/js/entry.js',
    output: {
        path: __dirname + '/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    plugins: [
        new ExtractTextPlugin('stylesheets/[name].css')
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        root: [path.join(__dirname, './client/assets')]
    }
};
