module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:8081', //API服务器的地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	}

}