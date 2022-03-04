<template>
	<view class="user-means">
		<view class="flex justify-around text-center">
			<view v-for="item in 4" :key="item" class="my-4">
				<view class="text-2xl">
					3
				</view>
				<view class="text-2xl">
					优惠券
				</view>
			</view>
		</view>

		<view class="user-vip-card mx-4 p-2">
			<view class="flex justify-between">
				<view class="flex">
					<u-icon name="integral" color="#ff6a6c" size="50"></u-icon>
					<view class="ml-2">
						会员立享5大权益！
					</view>
				</view>
				<view class="">
					<u-button type="primary" color="#ff6a6c" shape="circle" size="mini" :plain="true" text="立即开通">
					</u-button>
				</view>
			</view>
		</view>
		<view class="bg-white mx-2 pb-3 rounded">
			<u-cell :border="false" title="我的订单" value="所有订单" :isLink="true"></u-cell>
			<u-grid :border="false" col="5">
				<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="55"></u-icon>
					<text class="text-2xl mt-1">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: 'coupon',
						title: '待付款'
					},
					{
				 	name: 'car',
						title: '代发货'
					},
					{
						name: 'car',
						title: '已发货'
					},
					{
						name: 'chat',
						title: '待评价'
					},
					{
						name: 'order',
						title: '退货/售后'
					},
				],
			}
		},
	}
</script>

<style scoped lang="scss">
	.user-vip-card {
		color: #c6b181;
		background-image: linear-gradient(to right, #3a3a3a, #000000);
	}
</style>
