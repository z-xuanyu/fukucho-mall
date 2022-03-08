import request from "../utils/http/request.js"


// 用户登录
export function login(data){
	return request.post('auth/login', data)
}

// 获取用户浏览记录
export function getUserViewsHistory() {
	return request.get('user/viewsHistory')
}


// 获取用户收藏列表
export function getUserCollections() {
	return request.get('user/collections')
}

// 添加用户地址信息
export function createAddress(id,data) {
	return request.post(`user/address/${id}`, data)
}

// 获取用户地址列表
export function getUserAddressList() {
	return request.get('user/address')
}

// 获取地址详情
export function getAddressInfo(id){
	return request.get(`user/address/${id}`)
}

// 更新用户地址信息
export function updateAddress(id,data) {
	return request.put(`user/address/${id}`, data)
}

// 删除地址
export function removeAddress(id) {
	return request.delete(`user/address/${id}`)
}