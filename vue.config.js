module.exports = {
    baseUrl: '',
    devServer: {
        port: 11000
    },
    css: {
        loaderOptions: {
            less: {
                test: /\.less$/,
                loader: 'less-loader'
            }
        }
    }
}