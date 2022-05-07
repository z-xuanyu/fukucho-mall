<template>
	<view class="login-page flex flex-center items-center">
		<view class="fulled px-30">
			<view class="flex flex-center mb-30">
				<image class="shadow-24" src="../../static/images/logo.png" mode=""></image>
			</view>
			<view class="form-wrap pt-30">
				<tm-form @submit="handleClickLogin" ref="userInfo">
					<tm-input prefixp-icon="icon-account" class="shadow-24" :height="80" name="email"
						prefixp-icon-color="grey" bg-color="grey-lighten-5" :border-bottom="false"
						border-color="grey-lighten-3" required placeholder="请输入邮箱账号" v-model="userInfo.email" />
					<tm-input prefixp-icon="icon-lock" :height="80" bg-color="grey-lighten-5" prefixp-icon-color="grey"
						:border-bottom="false" border-color="grey-lighten-3" name="password" required
						placeholder="请输入密码" input-type="password" v-model="userInfo.password" />
					<tm-button class="mt-30 mx-30" block :round="24" :loading="loading" navtie-type="form">登录
					</tm-button>
				</tm-form>
			</view>

			<view class="mt-30 pb-30 flex text-grey flex-center">
				<text>找回密码</text>
				<text class="px-30">|</text>
				<text class="text-black" @click="handleReg">新用户注册</text>
			</view>

			<view class="px-30 my-30 pt-30">
				<tm-divider color="grey-lighten-3" text="第三方登录"></tm-divider>
			</view>
			<view class="flex flex-center">
				<view class="green pa-15 rounded shadow-15 flex items-center flex-center">
					<tm-icons color="white" :size="30" name="icon-weixin"></tm-icons>
				</view>
				<view class="blue pa-15 mx-20 rounded shadow-15 flex items-center flex-center">
					<tm-icons color="white" :size="30" name="icon-QQ"></tm-icons>
				</view>
				<view class="pink pa-15 rounded shadow-15 flex items-center flex-center">
					<tm-icons color="white" :size="30" name="icon-weibo"></tm-icons>
				</view>
				<view class="black ml-20 pa-15 rounded shadow-15 flex items-center flex-center">
					<tm-icons color="white" :size="30" name="icon-ios"></tm-icons>
				</view>
			</view>
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
				loading: false,
				fromUrl: '',
			};
		},
		onLoad(options) {
			if (options.from) {
				this.fromUrl = options.from;
			}
		},
		onBackPress() {
			uni.switchTab({
				url: '/pages/index/index',
			});
			return true;
		},
		methods: {
			...mapActions(['postLogin']),
			// 添加登录
			async handleClickLogin(values) {
				this.loading = true;
				values && await this.postLogin(values);
				this.loading = false;
				// 是否未授权跳转
				if (this.fromUrl) {
					// 是否是tabbar 页面
					const isTabbarPage = ['/pages/cart/cart', '/pages/user/user'].indexOf(this.fromUrl);

					if (isTabbarPage === -1) {
						console.log(this.fromUrl,12121)
						return uni.navigateTo({
							url: this.fromUrl
						})
					}
					uni.switchTab({
						url: this.fromUrl,
					});
					return;
				}
				uni.switchTab({
					url: '/pages/index/index',
				});
			},
			handleReg() {
				console.log('注册')
			}
		},

	}
</script>

<style lang="scss">
	.login-page {
		padding-top: 150rpx;

		image {
			width: 100rpx;
			height: 100rpx;
		}
	}
</style>
