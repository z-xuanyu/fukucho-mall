<template>
	<view class="p-2 category-page">
		<u-search height="60" searchIconSize="44" :showAction="false" placeholder="请输入关键词" v-model="keyword"></u-search>
		<view class="content flex">
			<view class="left p-3">
				<view class="flex flex-column">
					<text class="my-3" :class="item == 1 && 'active'" v-for="item in 6" :key="item">清酒</text>
				</view>
				
			</view>
			<view class="right flex-1 pr-3 mt-2">
				<view class="bg-white flex flex-wrap px-3 pb-5 rounded">
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-center text-2xl mt-1">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-center text-2xl mt-1">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-center text-2xl mt-1">
							清酒
						</view>
					</view>
					<view class="item">
						<image src="https://img15.shop-pro.jp/PA01085/674/product/163522767.jpg?cmsp_timestamp=20210929162906" mode=""></image>
						<view class="text-center text-2xl mt-1">
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
					color: #aaaaaa;
					font-weight: 200;
					cursor: pointer;
				}
				.active{
					color: #f56c6c;
					font-weight: 600;
					font-size: 40rpx;
				}
			}
			.right{
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
