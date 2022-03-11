<template>
	<view class="login-page">
		<view class="flex flex-center mt-50">
			<image src="../../static/images/logo.png" mode=""></image>
		</view>
		<view class="form-wrap px-50 mt-50">
			<tm-form @submit="handleClickLogin" ref="userInfo">
				<tm-input name="email" required title="账号" placeholder="请输入邮箱账号" v-model="userInfo.email" />
				<tm-input name="password" required title="密码" placeholder="请输入密码" input-type="password"
					v-model="userInfo.password" />
				<tm-button class="mt-30" block :round="24" :loading="loading" navtie-type="form">登录</tm-button>
			</tm-form>
		</view>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex';
	export default {
		data() {
			return {
				userInfo: {
					email: '',
					password: ''
				},
				loading: false
			};
		},
		methods: {
			...mapActions(['postLogin']),
			handleClickLogin(values) {
				this.loading = true;
				setTimeout(()=>{
					values && this.postLogin(values);
					this.loading = false;
					uni.navigateBack()
				},1000)
			}
		}
	}
</script>

<style lang="scss">
	.login-page {
		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
