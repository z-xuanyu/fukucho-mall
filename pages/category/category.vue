<template>
	<view class="category-page">
		<view class="py-12 white">
			<tm-search v-model="keyword"  bgColor="white" color="white" placeholder="搜索关键词" insertColor="grey" :round="25" :show-right="false"></tm-search>
		</view>
		<view class="content flex px-20">
			<view class="left pa-3">
				<view class="flex flex-col">
					<text class="my-30" :class="item == 1 && 'active primary'" v-for="item in 6" :key="item">清酒</text>
				</view>
				
			</view>
			<view class="right flex-1 pl-30">
				<view class="white flex flex-wrap px-30 pb-50 round-2">
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-align-center text-size-xs mt-10">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-align-center text-size-xs mt-10">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-align-center text-size-xs mt-10">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-align-center text-size-xs mt-10">
							清酒
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			};
		}
	}
</script>

<style lang="scss" scoped>
	.category-page {
		background-color: #f6f6f6;
		height: calc(100vh - 94px);
		.content {
			.left {
				text {
					font-weight: 200;
					cursor: pointer;
					padding: 10rpx 26rpx;
					
				}
				.active{
					font-weight: 600;
					color: white;
					border-radius: 50rpx;
				}
			}
			.right{
				height: 100%;
				.item{
					margin-top: 50rpx;
					width: 33%;
					image{
						width: 100%;
						height: 200rpx;
					}
				}
				
			}
		}
	}
</style>
