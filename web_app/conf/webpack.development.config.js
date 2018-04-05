import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/../dist',
    }
});