import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
    output: {
        path: __dirname + '/../../dist/web_app',
        filename: 'bundle.min.js'
    },
    mode: 'production',
});