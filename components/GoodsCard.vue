<template>
	<view class="goods-card relative  mx-20"
		style="background-image: url('https://cdn.uviewui.com/uview/swiper/swiper3.png'); background-position: center center; background-size: cover; background-repeat: no-repeat;">
		<view class="absolute b-0 fulled">
			<view class="text-white px-20 text-5xl">
				会员8折|新势人气榜
			</view>
			<view class="text-size-lg px-20 py-10 text-white">
				王牌套组王牌套组王牌套组王牌套组王牌套组
			</view>
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
				<view class="list flex px-10">
					<view v-for="(item, index) in list" :key="item._id" class="pa-10 fulled">
						<view class="white text-center p-20 round-2 shadow-10 overflow item">
							<image  :src="item.pic" mode=""></image>
							<view class="text-size-xs fulled">
								<view class="text-overflow-2 px-10">{{ item.title }}</view>
							</view>
							<view class="price text-primary text-left mt-10 pa-10">
								<text class="text-size-xs">￥</text><text>{{ item.price }}</text>
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
