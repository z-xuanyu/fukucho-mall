<template>
	<view class="search-page p-2">
		<u-search inputAlign="center" searchIconSize="48" bgColor="#fff" :actionStyle="actionStyle" height="70"></u-search>
		<view class="mt-2 bg-white p-3">
			<text class="text-color-gray text-2xl">热门搜索</text>
			<view class="mt-2 flex flex-wrap">
				<text class="search-tag text-2xl mx-2 my-1" v-for="item in 3" :key="item">手机</text>
			</view>
		</view>
		<view class="mt-2 bg-white p-3">
			<text class="text-color-gray text-2xl">热门搜索</text>
			<view class="mt-2 flex flex-wrap">
				<text class="search-tag text-2xl mx-2 my-1" v-for="item in 8" :key="item">手机</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actionStyle: {
					backgroundColor: '#f56c6c',
					color: '#fff',
					padding: '18rpx',
					width: '150rpx',
					borderRadius: '0 100rpx 100rpx 0',
					marginLeft: '-20rpx'
				}
			};
		}
	}
</script>

<style lang="scss" scoped>
.search-page{
	background-color: #f6f6f6;
	min-height: calc(100vh - 44px);
	.search-tag{
		background-color: #eeeeee;
		padding: 10rpx 30rpx;
		border-radius: 30rpx;
	}
}
</style>
