<template>
	<view class="user-means">
		<view class="flex flex-around text-align-center">
			<view v-for="item in 4" :key="item" class="my-40">
				<view class="text-size-g">
					3
				</view>
				<view class="text-size-xs mt-5">
					优惠券
				</view>
			</view>
		</view>

		<view class="user-vip-card mx-40 pa-20">
			<view class="flex flex-between">
				<view class="flex">
					<tm-icons :size="48" name="icon-gem"></tm-icons>
					<view class="ml-20">
						会员立享5大权益！
					</view>
				</view>
				<view>
					<tm-button theme="primary" :round="20" size="xs">立即开通</tm-button>
				</view>
			</view>
		</view>
		<tm-sheet :shadow="24">
			<tm-listitem title="我的订单" @click="jumpOrderList" :margin="[0,0]" left-icon="icon-database" show-left-icon left-icon-color="pink" value="查看全部"></tm-listitem>
			<tm-grid @click-dot="iconClick" @change="change" color="blue" :list="list"></tm-grid>
		</tm-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						icon: 'icon-QQ',
						text: '待支付',
						color: 'blue'
					},
					{
						icon: 'icon-weibo',
						text: '待发货',
						iconSize: 40,
						color: 'blue'
					},
					{
						icon: 'icon-pengyouquan',
						text: '待收货',
						color: 'green',
						fontColor: 'green'
					},
					{
						icon: 'icon-aliwangwang',
						text: '待评价',
						color: 'blue-grey'
					},
					{
						icon: 'icon-aliwangwang',
						text: '售后/退款',
						color: 'blue-grey'
					},
				],
			}
		},
		methods: {
			iconClick(){},
			change(){},
			jumpOrderList() {
				uni.navigateTo({
					url: '/pages/user/order/order'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.user-vip-card {
		color: #c6b181;
		background-image: linear-gradient(to right, #3a3a3a, #000000);
	}
</style>
