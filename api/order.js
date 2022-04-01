import request from "../utils/http/request.js"

// 生成订单
export function craateOrder(data){
  return request.post('order',data)
}

// 获取用户订单列表
export function getUserOrders(params) {
	return request.get('order',{
		params
	})
}

// 获取订单信息
export function getOderInfo(id) {
	return request.get(`order/${id}`)
}

// 取消订单
export function cancelOder(id) {
	return request.delete(`order/${id}`)
}

// 确认收货
export function confirmTake(id) {
	return request.put(`order/${id}/take`)
}


export function submitOrderComment(data) {
	return request.post('product-comment', data, {
		header: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})
}