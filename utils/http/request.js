import Request from "./luch-request/index.js"

const http = new Request();

http.setConfig((config) => {
	/* config 为默认全局配置*/
	config.baseURL = 'http://localhost:3009/' /* 根域名 */

	config.custom = {
		loading: true // 默认有loading
	}
	return config
})

/* 请求之前拦截器。可以使用async await 做异步操作 */
http.interceptors.request.use((config) => {
   const token = uni.getStorageSync('token') || null;
	// 获取token
	config.header = {
		...config.header,
		Authorization: `Bearer ${token}` // 演示拦截器header加参
	}
	// 演示custom 用处
	if (config.custom.loading) {
		uni.showLoading()
	}
	return config
}, (config) => {
	return Promise.reject(config)
})

// 响应拦截
http.interceptors.response.use(async (response) => {
	// if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
	//   return Promise.reject(response)
	// }
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	const {
		code,
		message,
		result
	} = response.data;

	if (code == 0) {
		return result
	}
	return Promise.reject(response)
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
	console.log(response.statusCode, 555555)

	switch (response.statusCode) {
		// 提示登录
		case 401:
			uni.navigateTo({
				url: '/pages/login/login'
			})
			break;
		default:
			break;
	}
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	return Promise.reject(response)
})

export default http;
