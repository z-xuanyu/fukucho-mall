import { getCartList } from "../../api/cart.js"

const state = {
	cartList: [],
}

const mutations = {	
	// 设置购物车信息列表
	SET_CART_LIST(state, data) {
		state.cartList = data;
	}
}

const actions = {
	//获取购物车列表
 	async getCartList({commit}){
		const res = await getCartList();
		commit("SET_CART_LIST",res);
	}
}

export default {
	state,
	mutations,
	actions
}