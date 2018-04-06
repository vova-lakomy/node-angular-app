import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default new Config().merge({
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [["es2015", {"modules": false}], "react"]
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: "body"
        }),
        new ExtractTextPlugin("styles.css"),
    ]
});