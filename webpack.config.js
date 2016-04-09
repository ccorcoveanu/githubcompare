var HtmlWebpackPlugin       = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({

    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    entry: [
        'babel-polyfill',
        './app/index.js'
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    output: {
        filename: 'index_bundle.js',
        path: __dirname + '/dist'
    },

    plugins: [HtmlWebpackPluginConfig]
};