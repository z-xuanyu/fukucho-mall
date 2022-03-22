import request from "../utils/http/request.js"

// 微信支付
export function weixinPay(data) {
	return request.post('pay/weixin',data)
}