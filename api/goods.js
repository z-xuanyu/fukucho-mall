import request from "../utils/http/request.js"

// 获取商品详细信息
export function getGoodsInfo(id){
	return request.get(`product/${id}`)
}

// 获取热门商品
export function getHotGoods(){
	return request.get('product/hot')
}