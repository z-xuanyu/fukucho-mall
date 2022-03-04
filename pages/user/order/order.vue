<template>
	<view class="order-page">
		<u-subsection :list="list" activeColor="#f56c6c" :fontSize="28" :current="1"></u-subsection>

		<view class="p-2">
			<view class="p-2 px-3 bg-white rounded mb-2" v-for="item in 5" :key="item">
				<view class="flex">
					<image
						src="https://img11.360buyimg.com/n1/s450x450_jfs/t1/126847/16/21955/208530/6202422cEad2c824a/669bbf18fad63728.jpg"
						mode=""></image>
					<view class="flex-1 ml-2">
						<view class="text-2xl">
							<u--text :lines="2" text="康惠尔颈椎按摩垫全身按摩床垫肩颈背腰腿部按摩床垫靠椅垫家用 升级版-按摩床垫（带头枕）"></u--text>
						</view>
						<view class="text-2xl mt-2 text-color-gray">
							<text>x 1</text>
							<text class="ml-2">黑色</text>
						</view>
						<view class="mt-2 text-color-primary">
							<text class="text-2xl">￥</text>
							<text>4299</text>
						</view>
					</view>
				</view>
				<view class="text-right">
					<text class="text-2xl">实际付款</text>
					<text class="text-2xl ml-2">￥</text>
					<text>4299</text>
				</view>
				<view class="flex justify-between mt-2 items-center">
					<text class="text-2xl text-color-gray">待付款</text>
					<view class="flex">
						<u-button type="info" shape="circle" size="mini" text="取消订单"></u-button>
						<u-button type="error" class="ml-2" plain shape="circle" size="mini" text="立即支付"></u-button>
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
				list: ['全部', '待付款', '待发货', '待收货', '待评价']
			};
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
