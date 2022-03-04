<template>
	<view class="goods-card relative  mx-2"
		style="background-image: url('https://cdn.uviewui.com/uview/swiper/swiper3.png'); background-position: center center; background-size: cover; background-repeat: no-repeat;">
		<view class="absolute bottom-0 w-full">
			<view class="text-bg-white px-2 text-5xl">
				会员8折|新势人气榜
			</view>
			<view class="text-2xl px-2 py-1 text-bg-white">
				王牌套组王牌套组王牌套组王牌套组王牌套组
			</view>
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
				<view class="list flex px-1">
					<view v-for="(item, index) in 10" :key="item" class="p-1 w-full">
						<view class="bg-white text-center p-2 rounded item">
							<image  src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/5433329e-95c5-4973-aa87-86c4d1815771.jpg" mode=""></image>
							<view class="text-2xl w-full text-left">
								<u--text :lines="2" text="关于uView的取名来由，首字母u来自于uni-app首字母，
								uni-app是基Vuejs，Vue和View(延伸为UI、视图之意)同音，同时view组件uni-app中
								最础最重要的组件，故取名uView，表达源于uni-app和Vue之意，同时在此也对它示感谢。"></u--text>
							</view>
							<view class="price text-color-primary text-left mt-1">
								<text class="text-2xl">￥</text><text>1380</text>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "GoodsCard",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.goods-card {
		height: 750rpx;
		border-radius: 10rpx;
		.scroll-view{
			white-space: nowrap;
			.list{
				.item{
					width: 220rpx;
					image{
						width: 200rpx;
						height: 200rpx;
					}
				}
			}
		}
	}
</style>
