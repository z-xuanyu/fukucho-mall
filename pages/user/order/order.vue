<template>
	<view class="order-page">
		<tm-tabs v-model="activeIndex" :list="list" ></tm-tabs>
		<view class="pa-20">
			<view class="pa-20 px-30 white round-2 mb-20" v-for="item in 5" :key="item">
				<view class="flex" @click="jumpOrderDetail">
					<image
						src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/126847/16/21955/208530/6202422cEad2c824a/669bbf18fad63728.jpg"
						mode=""></image>
					<view class="flex-1 ml-20">
						<view class="text-size-xs text-overflow-2">
							康惠尔颈椎按摩垫全身按摩床垫肩颈背腰腿部按摩床垫靠椅垫家用 升级版-按摩床垫（带头枕）
						</view>
						<view class="text-size-xs mt-20 text-gray">
							<text>x 1</text>
							<text class="ml-20">黑色</text>
						</view>
						<view class="mt-20 text-primary">
							<text class="text-size-xs">￥</text>
							<text>4299</text>
						</view>
					</view>
				</view>
				<view class="text-align-right">
					<text class="text-size-xs">实际付款</text>
					<text class="text-size-xs ml-20">￥</text>
					<text>4299</text>
				</view>
				<view class="flex flex-between mt-20 items-center">
					<text class="text-size-xs text-grey">待付款</text>
					<view class="flex">
						<tm-button theme="grey" size="xs" :round="24">取消</tm-button>
						<tm-button theme="primary" size="xs" :round="24">立即支付</tm-button>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserOrder',
		data() {
			return {
				activeIndex: 0,
				list: ['全部', '待付款', '待发货', '待收货', '待评价']
			};
		},
		methods: {
			jumpOrderDetail() {
				uni.navigateTo({
					url: '/pages/user/order/detail'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);

		image {
			width: 200rpx;
			height: 200rpx;
		}
	}
</style>
