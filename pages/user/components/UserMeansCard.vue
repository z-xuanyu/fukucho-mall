<template>
	<view class="user-means">
		<tm-sheet :padding="[0,0]" :shadow="10">
			<view class="flex flex-around text-align-center">
				<view v-for="(item, index) in navList" :key="index + 'c'" class="my-40" @click="jumpPage(index)">
					<view class="text-weight-b text-size-lg">
						{{ item.num }}
					</view>
					<view class="mt-5">
						{{ item.text }}
					</view>
				</view>
			</view>
		</tm-sheet>
		<tm-sheet :shadow="10" :padding="[0,0]">
			<tm-listitem title="我的订单" @click="jumpOrderList" :margin="[0,0]" left-icon="icon-database" show-left-icon
				left-icon-color="pink" value="查看全部"></tm-listitem>
			<tm-grid @click-dot="iconClick" @change="change" :grid="5" :maxGrid="10" color="blue" :list="list">
			</tm-grid>
		</tm-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [{
						text: '我的余额',
						num: '188.00',
					},
					{
						text: '我的积分',
						num: 6574,
					},
					{
						text: '我的优惠券',
						num: 5,
					},
					{
						text: '我的收藏',
						num: 65,
					}
				],
				list: [{
						icon: 'myicon-daifukuan',
						text: '待支付',
						color: 'black'
					},
					{
						icon: 'myicon-daifahuo',
						text: '待发货',
						iconSize: 40,
						color: 'black'
					},
					{
						icon: 'myicon-yiqianshou',
						text: '待收货',
						color: 'black',
					},
					{
						icon: 'myicon-xinxi',
						text: '待评价',
						color: 'black'
					},
					{
						icon: 'myicon-tuikuan',
						text: '售后/退款',
						color: 'black'
					},
				],
			}
		},
		methods: {
			iconClick() {},
			change() {},
			jumpOrderList() {
				uni.navigateTo({
					url: '/pages/user/order/order'
				})
			},
			jumpPage(index) {
				switch (index) {
					case 0:
						break;
					case 1:
						break;
					case 2:
						uni.navigateTo({
							url: '/pages/user/coupon/coupon'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '/pages/user/collection/collection'
						})
						break;
					default:
						break;
				}
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
