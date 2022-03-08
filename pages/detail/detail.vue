<template>
	<view class="goods-detail">
		<!-- 轮播图 -->
		<BannerSwiper :list="info.bannerImg" heigth="600" />
		
		<view class="p-2">
			<u-alert type = "error" description = "￥1元开通年VIP会员,尊享大权益"></u-alert>
			<view class="rounded bg-white p-2 mt-2">
				<view class="flex items-center">
					<u-tag text="会员价" type="error" size="mini"></u-tag>
					<view class="ml-2">
						<text class="text-2xl text-color-primary">￥</text>
						<text class="text-color-primary">{{ info.price }}</text>
						<text class="ml-3 text-2xl text-color-gray">原价</text>
						<text class="text-color-gray text-2xl">￥</text>
						<text class="text-color-gray">3999</text>
					</view>
				</view>
				<view class="mt-2">
					{{ info.title }}
				</view>
				<view class="flex justify-between mt-2">
					<view class="rounded text-2xl p-1 px-2 bg-gray">
						购买可得<text class="text-color-primary">1</text>积分
					</view>
					<view class="flex items-center">
						<text class="text-2xl text-color-gray mr-2">销量: 8</text>
						<view class="rounded-full p-1 bg-gray">
							<u-icon name="share-square" size="34"></u-icon>
						</view>
					</view>
				</view>
			</view>
			<!-- 选规格 -->
			<view class="bg-white px-3 py-2 mt-2 rounded text-2xl">
				<view class="flex py-2 justify-between">
					<view>
						<text class="text-color-gray">已选</text>
						<text class="ml-3">黑色套组</text>
					</view>
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
				<view class="flex py-2 justify-between">
					<view>
						<text class="text-color-gray">优惠券</text>
						<text class="ml-3">领取优惠券</text>
					</view>
					<view class="flex">
						<view class="text-color-white bg-primary px-1 coupon-tag">
							2张可用
						</view>
						<u-icon name="arrow-right" size="28"></u-icon>
					</view>
				</view>
				<view class="flex py-2 justify-between">
					<view>
						<text class="text-color-gray">服务</text>
						<text class="ml-3">假一赔四。极速退款。7七天无理由退换</text>
					</view>
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
			</view>
			<!-- 商品评价 -->
			<GoodsComment />
			<!-- 商品介绍 -->
			<view class="mt-2 bg-white">
				<u-cell :border="false" title="商品介绍"></u-cell>
				<view class="content py-3">
					<image src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg" mode="aspectFill"></image>
					<image src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg" mode="aspectFill"></image>
					<image src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg" mode="aspectFill"></image>
				</view>
			</view>
		</view>
		<!-- 底部操作栏 -->
		<FooterActionBar />
	</view>
</template>

<script>
	import FooterActionBar from "./components/FooterActionBar.vue"
	import BannerSwiper from "../../components/BannerSwiper.vue"
	import GoodsComment from "./components/GoodsComment.vue"
	import { getGoodsInfo } from "../../api/goods.js"
	export default {
		components:{
			FooterActionBar,
			BannerSwiper,
			GoodsComment,
		},
		onLoad(option) {
			this.fetchData(option.id);
		},
		data() {
			return {
				info: '嘻嘻',
			};
		},
		methods: {
			async fetchData(id) {
				const result = await getGoodsInfo(id);
				this.info = result;
			}
		}
	}
</script>

<style lang="scss" scoped>
.goods-detail {
	background-color: #f6f6f6;
	padding-bottom: 120rpx;
	.coupon-tag{
		border-radius: 30rpx;
		margin-right: 5rpx;
	}
}
</style>
