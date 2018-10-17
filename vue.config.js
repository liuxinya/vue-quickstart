module.exports = {
    devServer: {
        port: 11000
    },
    css: {
        loaderOptions: {
            css: {
              // 这里的选项会传递给 css-loader
              test: /\.less$/,
              use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
              }] 
            },
        } 
    },
    chainWebpack: config => {
        // console.log(config.resolve.extensions)
    }
}