<template>
	<view class="mx-20 my-n5 shadow-24 py-24 round-6 white"
		:class="[$tm.vx.state().tmVuetify.black?'grey-darken-5':'']">
		<tm-scroll width="650" color='bg-gradient-orange-lighten'>

			<tm-row>
				<tm-col :grid="3" v-for="(item,index) in taobao" :key="index">
					<view>
						<tm-images :previmage="false" :width="120" :src="item.icon"></tm-images>
						<view class="text-size-s py-12 text-grey-darken-1">{{item.text}}</view>
					</view>
				</tm-col>
			</tm-row>
			<tm-row>
				<tm-col :grid="3" v-for="(item,index) in taobao" :key="index">
					<view>
						<tm-images :previmage="false" :width="120" :src="item.icon"></tm-images>
						<view class="text-size-s pt-12 text-grey-darken-1">{{item.text}}</view>
					</view>
				</tm-col>
			</tm-row>

		</tm-scroll>
	</view>
</template>

<script>
	export default {
		name: "NavIconGrid",
		data() {
			return {
				taobao: [{
						text: '天猫新品',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1'
					},
					{
						text: '今日爆款',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1'
					},
					{
						text: '天猫国际',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1'
					},
					{
						text: '饿了么',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1'
					},
					{
						text: '天猫新品',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1'
					},
					{
						text: '今日爆款',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1'
					},
					{
						text: '天猫国际',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1'
					},
					{
						text: '饿了么',
						iconSize: 100,
						icon: 'https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1'
					},
				],
			};
		}
	}
</script>

<style lang="scss">
	.scroll-view {
		white-space: nowrap;

		.list {
			.item {
				image {
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
</style>
