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
					<view v-for="(item, index) in list" :key="item._id" class="p-1 w-full">
						<view class="bg-white text-center p-2 rounded item">
							<image  :src="item.pic" mode=""></image>
							<view class="text-2xl w-full text-left">
								<u--text :lines="2" :text="item.title"></u--text>
							</view>
							<view class="price text-color-primary text-left mt-1">
								<text class="text-2xl">￥</text><text>{{ item.price }}</text>
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
		props: {
			list: {
				type: Array,
				default: ()=> []
			}
		},
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
