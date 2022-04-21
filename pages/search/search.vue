<template>
	<view class="search-page">
		<tm-search v-model="value" placeholder="搜索关键词" insertColor="grey" :round="24" :show-right="false"></tm-search>
		<view class="pa-20">
			<view class="white pa-30">
				<text class="text-grey text-size-xs">热门搜索</text>
				<view class="mt-20 flex flex-wrap">
					<text @click="onClickKeyWord" class="search-tag text-size-xs mx-20 my-10" v-for="item in 3" :key="item">手机</text>
				</view>
			</view>
			<view class="mt-20 white pa-30">
				<text class="text-grey text-size-xs">热门搜索</text>
				<view class="mt-20 flex flex-wrap">
					<text class="search-tag text-size-xs mx-20 my-10" v-for="item in 3" :key="item">手机</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
			};
		},
		methods: {
			onClickKeyWord() {
				uni.navigateTo({
					url: '/pages/goods-all/goods-all'
				})
			}
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
