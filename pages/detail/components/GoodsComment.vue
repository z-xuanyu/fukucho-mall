<template>
	<view class="bg-white mt-2 rounded">
		<u-cell :border="false" title="用户评价" value="查看全部" :isLink="true"></u-cell>
		<view class="px-3 pb-3" v-for="item in 3" :key="item">
			<view class="flex items-center justify-between">
				<view class="flex items-center">
					<u-avatar size="75" src="https://img1.baidu.com/it/u=2201498406,3778061117&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"></u-avatar>
					<view class="info ml-1">
						<view class="name text-2xl mb-1">
							爱一个人
						</view>
						<u-rate :count="5"></u-rate>
					</view>
				</view>
				<text class="text-2xl text-color-gray">2022/03/01</text>
			</view>
			<view class="content text-2xl mt-2">
				电池太给了。非常不错!
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'GoodsComment',
		data() {
			return {
				
			}
		},
	}
</script>

<style>
</style>
