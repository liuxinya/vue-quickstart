const path = require('path');
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'vue-template-loader',
                    exclude: [path.join(__dirname, './public/index.html')],
                    options: {
                        transformToRequire: {
                            img: 'src'
                        },
                        scoped: true
                    }
                }
            ]
        }
    },
  }