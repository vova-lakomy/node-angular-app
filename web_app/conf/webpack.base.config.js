import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
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
        })]
});