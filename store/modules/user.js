import { login } from "../../api/user.js"

const state = {
	userInfo: null,
	token: null,
}

const mutations = {
	// 设置用户登录新
	SET_USER_INFO(state,data){
		state.userInfo = data;
	},
	
	// 设置用户token
	SET_USER_TOKEN(state, token) {
		state.token = token;
	}
}

const actions = {
 	async postLogin({commit},data){
		const res = await login(data);
		uni.setStorageSync('token', res.accessToken);
		console.log(res, 44444444)
		commit("SET_USER_TOKEN",res.accessToken);
	}
}

export default {
	state,
	mutations,
	actions
}