<template>
	<view class="swiper-tips-box white px-10 shadow-24 py-10 flex">
		<view class="title border-r-1 px-20">
			<text class="text-primary">新闻</text>
			<text class="text-black">简报</text>
		</view>
		<view class="flex-1">
			<view class="flex px-10 pl-30 items-center">
				<swiper class="swiper-wrapper pl-20 flex-1" :autoplay="true" :interval="2000" :vertical="true">
					<swiper-item>
						<view class="swiper-item">好目睫之利者，利在害中而不弃</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">好终身之利者，利在目睫而不为。</view>
					</swiper-item>
				</swiper>
				<tm-icons :size="20" color="grey" name="icon-angle-right"></tm-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
	.swiper-tips-box{
		border-radius: 50rpx;
		line-height: 50rpx;
		.title{
			font-size: 26rpx;
			font-weight: 800;
		}
		.swiper-wrapper {
			height: 50rpx;
			font-size: 24rpx;
		}
	}
</style>
