<template>
	<view class="goods-list">
		<view class="title px-2 text-3xl mb-1">
			推荐
		</view>
		<view class="flex flex-wrap">
			<view class="w-50 p-1" v-for="item in 10" :key="item">
				<view class="bg-white pb-2 rounded">
					<image class="w-full" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/010c807f-a45e-40f7-8e08-49aa3dca8b49.jpg" mode=""></image>
					<view class="px-2">
						<u--text :lines="2" text="关于uView的取名来由，首字母u来自于uni-app首字母，
						uni-app是基Vuejs，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中
						最础最重要的组件，故取名uView，表达源于uni-app和Vue之意，同时在此也对它示感谢。"></u--text>
					</view>
					<view class="mt-2 px-1 text-color-primary">
						<text class="text-2xl">￥</text><text>1380</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"GoodsList",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list{
		image{
			height: 360rpx;
		}
	}
</style>
