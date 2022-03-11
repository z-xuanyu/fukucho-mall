<template>
	<view class="footer-bar fixed b-0 white r-0 l-0 pa-20">
		<view class="flex flex-between">
			<view class="flex">
				<view class="flex flex-col items-center" @click="jumpHome">
					<tm-icons size="40" name="icon-home" color="black"></tm-icons>
					<text class="text-size-xs">首页</text>
				</view>
				<view class="flex flex-col ml-40 items-center">
					<tm-icons size="40" name="icon-headset" color="black"></tm-icons>
					<text class="text-size-xs">客服</text>
				</view>
				<view class="flex flex-col ml-40 items-center">
					<tm-icons size="40" name="icon-like" color="black"></tm-icons>
					<text class="text-size-xs">收藏</text>
				</view>
			</view>
			<view class="btn flex items-center">
				<view class="orange add-cart text-color-white">
					加入购物车
				</view>
				<view class="primary text-color-white buy">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'FooterActionBar',
		data() {
			return {

			}
		},
		methods: {
			jumpHome(){
				uni.switchTab({
				    url: '/pages/index/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-cart {
		padding: 15rpx 20rpx;
		border-radius: 50rpx 0 0 50rpx;
		font-size: 24rpx;
	}
	.buy {
		padding: 15rpx 20rpx;
		border-radius: 0 50rpx 50rpx 0;
		font-size: 24rpx;
	}
</style>
