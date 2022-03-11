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
			<view class="text-size-s text-weight-b mb-24">我的订单</view>
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
						text: 'QQ',
						color: 'blue'
					},
					{
						icon: 'icon-weibo',
						text: '微博',
						iconSize: 40,
						color: 'blue'
					},
					{
						icon: 'icon-pengyouquan',
						text: '朋友圈',
						color: 'green',
						fontColor: 'green'
					},
					{
						icon: 'icon-aliwangwang',
						text: '阿里旺旺',
						color: 'blue-grey'
					},
				],
			}
		},
		methods: {
			iconClick(){},
			change(){}
		}
	}
</script>

<style scoped lang="scss">
	.user-vip-card {
		color: #c6b181;
		background-image: linear-gradient(to right, #3a3a3a, #000000);
	}
</style>
