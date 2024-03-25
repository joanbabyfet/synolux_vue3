module.exports = {
    devServer: {
        https: true, //开启https
        port: 3002, // 端口
        proxy: {
            '/api': { //遇到/api就去找代理
                target: process.env.VUE_APP_BASE_URL, //代理接口地址
                ws: false, //是否代理websocket
                changeOrigin: true, //是否跨域
                secure: false, //是否https接口
                pathRewrite: { //路径重写 
                    '^/api': '/'
                }
            }
        }
    },
    // lintOnSave: false // 取消 eslint 验证, 避免eslint报错
}