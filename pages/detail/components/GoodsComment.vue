<template>
	<view class="white mt-20 pb-20 round-2">
		<tm-listitem :round="0" :margin="[0,0]"  title="用户评价" value="查看全部"></tm-listitem>
		<view class="px-30 my-30" v-for="item in 3" :key="item">
			<view class="flex items-center flex-between">
				<view class="flex items-center">
					<tm-avatar src="https://img1.baidu.com/it/u=2201498406,3778061117&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"></tm-avatar>
					<view class="info ml-10">
						<view class="name text-size-xs">
							爱一个人
						</view>
						<tm-rate v-model="rate" :size="26"></tm-rate>
					</view>
				</view>
				<text class="text-size-xs text-grey">2022/03/01</text>
			</view>
			<view class="content text-size-xs mt-20">
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
				rate:5
			}
		},
	}
</script>

<style>
</style>
