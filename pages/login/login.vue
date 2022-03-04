<template>
	<view class="login-page">
		<view class="flex justify-center mt-8 p-8">
			<image src="../../static/images/logo.png" mode=""></image>
		</view>
		<view class="form-wrap px-8">
			<u--form labelPosition="left" labelWidth="120" :model="loginFormModel">
				<u-form-item label="邮箱" leftIcon="email" prop="userInfo.email" borderBottom>
					<u--input placeholder="请输入邮箱" v-model="loginFormModel.userInfo.email" border="none"></u--input>
				</u-form-item>
				
				<u-form-item label="密码" leftIcon="lock" prop="userInfo.email" borderBottom>
					<u--input placeholder="请输入密码" v-model="loginFormModel.userInfo.email" border="none"></u--input>
				</u-form-item>
			</u--form>
			
			<view class="mt-5">
				<u-button type="error" shape="circle" text="登录"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loginFormModel: {
					userInfo:{
						
					}
				}
			};
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
