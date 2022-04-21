<template>
	<view class="user-info primary white">
		<view class="flex flex-between px-30 pt-30">
			<view class="flex">
				<image class="avatar" src="https://img2.baidu.com/it/u=976187030,237040006&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode=""></image>
				<view class="info ml-20">
					<view class="name">
						阿宇
					</view>
					<view class="tips text-size-xs text-white mt-10">
						编辑个人简介
					</view>
				</view>
			</view>
			<view class="flex items-center">
				<tm-icons color="white" :size="35" name="icon-qrcode"></tm-icons>
				<tm-icons @click="jumpMessageCenter" color="white" :size="38" name="icon-bell" class="ml-20"></tm-icons>
			</view>
		</view>
		<view class="vip-wrapper">
			<view class="flex content flex-between items-center">
				<text>会员到期 2022-09-12</text>
				<view class="flex items-center">
					<text class="mr-10">立即续费</text>
					<tm-icons :size="20" color="black" name="icon-angle-right"></tm-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			jumpMessageCenter() {
				uni.navigateTo({
					url: "/pages/user/message-center/message-center"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-info {
		position: relative;
		background-image: url('../../../static/images/user/member_bg.png');
		background-size: 100%;
		background-repeat: no-repeat;
		margin-bottom: 24rpx;
		height: 240rpx;
		.avatar {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	  .vip-wrapper{
		  line-height: 85rpx;
		  position: absolute;
		  bottom: 0;
		  height: 85rpx;
		  width: 100%;
		  background-image: url('../../../static/images/user/vip2_bg.png');
		  background-size: 100%;
		  background-repeat: no-repeat;
		  .content{
			  padding: 0 50rpx 0 120rpx;
			  color: #905100;
		  }
	  }
	}
</style>
