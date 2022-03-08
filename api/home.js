import request from "../utils/http/request.js"

export function getUserInfo() {
	return request.get('https://api.tianapi.com/txapi/tiangou/index', {
		params: {
			key: "3c4494e1a9b02bebc99ec1b8480e4c8e"
		}
	})
}


// 获取首页数据
export function getHomeData() {
	return request.get('homeData')
}