<template>
	<view class="footer-bar fixed bottom-0 bg-white right-0 left-0 p-2">
		<view class="flex justify-between">
			<view class="flex">
				<view class="flex flex-column items-center" @click="jumpHome">
					<u-icon name="home" size="45"></u-icon>
					<text class="text-2xl">首页</text>
				</view>
				<view class="flex flex-column ml-2 items-center">
					<u-icon name="chat" size="45"></u-icon>
					<text class="text-2xl">客服</text>
				</view>
				<view class="flex flex-column ml-2 items-center">
					<u-icon name="star" size="45"></u-icon>
					<text class="text-2xl">收藏</text>
				</view>
			</view>
			<view class="btn flex items-center">
				<view class="bg-yellow add-cart text-color-white">
					加入购物车
				</view>
				<view class="bg-primary text-color-white buy">
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
