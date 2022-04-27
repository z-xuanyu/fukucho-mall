import request from "../utils/http/request.js";


// 获取客服聊天信息
export function getChatMessageList(id) {
	return request.get('chatMessage', {
		params: {
			cuServiceId: id
		}
	})
}