<template>
	<view class="goods-detail">
		<!-- 轮播图 -->
		<BannerSwiper :list="info.bannerImg" heigth="600" />
		<view class="pa-0">
			<view class="round-2 white pa-20">
				<view class="flex items-center">
					<tm-tags size="xs" model="fill">会员价</tm-tags>
					<view class="ml-2">
						<text class="text-size-xs text-primary">￥</text>
						<text class="text-primary text-size-lg text-weight-b">{{ info.price }}</text>
						<text class="ml-10 text-size-xs text-grey">原价</text>
						<text class="text-size-xs text-grey">￥</text>
						<text class="text-grey">3999</text>
					</view>
				</view>
				<view class="mt-20 text-size-m">
					{{ info.title }}
				</view>
				<view class="flex flex-between mt-20">
					<view class="round-2 text-size-xs pa-10 px-20 grey-lighten-3">
						购买可得<text class="text-primary px-5 text-weight-b">1</text>积分
					</view>
					<view class="flex items-center">
						<text class="text-size-xs text-grey mr-10">销量: {{ info.views }}</text>
						<view class="rounded pa-10 gray">
							<tm-icons size="35" color="grey" name="icon-share" @click="onClickShare"></tm-icons>
						</view>
					</view>
				</view>
			</view>
			<!-- 选规格 -->
			<view class="white px-30 py-20 mt-20 round-2 text-size-xs">
				<view class="flex py-20 flex-between">
					<view>
						<text class="text-grey cell-label">已选</text>
						<text>黑色套组</text>
					</view>
					<tm-icons size="20" color="grey" name="icon-angle-right"></tm-icons>
				</view>
				<view class="flex py-20 flex-between items-center" @click="showCoupon = true">
					<view>
						<text class="text-grey cell-label">优惠券</text>
						<text>领取优惠券</text>
					</view>
					<view class="flex items-center">
						<view class="text-white primary px-10 coupon-tag">
							2张可用
						</view>
						<tm-icons size="20" color="grey" name="icon-angle-right"></tm-icons>
					</view>
				</view>
				<view class="flex py-20 flex-between">
					<view>
						<text class="text-grey cell-label">服务</text>
						<text>假一赔四。极速退款。7七天无理由退换</text>
					</view>
					<tm-icons size="20" color="grey" name="icon-angle-right"></tm-icons>
				</view>
			</view>
			<!-- 商品评价 -->
			<GoodsComment />
			<!-- 商品介绍 -->
			<view class="mt-20 white">
				<tm-sheet :margin="[0,0]">
					<view class="text-size-lg text-weight-b mb-24">商品介绍</view>
					<view class="content py-30">
						<image
							src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg"
							mode="aspectFill"></image>
						<image
							src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg"
							mode="aspectFill"></image>
						<image
							src="http://img30.360buyimg.com/popWareDetail/jfs/t1/194591/29/8506/102052/60c9f55aEb1de625d/c357afb095110fe3.jpg"
							mode="aspectFill"></image>
					</view>
				</tm-sheet>

			</view>
		</view>
		<!-- 底部操作栏 -->
		<FooterActionBar :info="info" />
		<!-- 面板 -->
		<tm-shareSheet @change="onClickShareSheet" v-model="showShare"></tm-shareSheet>
		<!-- 优惠券弹出层 -->
		<tm-poup v-model="showCoupon" :height='400' position="bottom">
			<view class="ma-32 ">
				<tm-coupon color="orange" :hdata="d_1"></tm-coupon>
			</view>
		</tm-poup>
	</view>
</template>

<script>
	import FooterActionBar from "./components/FooterActionBar.vue"
	import BannerSwiper from "../../components/BannerSwiper.vue"
	import GoodsComment from "./components/GoodsComment.vue"
	import GoodsSkuPopup from "./components/GoodsSkuPopup.vue"
	import {
		getGoodsInfo
	} from "../../api/goods.js"
	export default {
		components: {
			FooterActionBar,
			BannerSwiper,
			GoodsComment,
			GoodsSkuPopup
		},
		onLoad(option) {
			this.fetchData(option.id);
		},
		data() {
			return {
				// 是否打开SKU弹窗
				skuKey: false,
				// SKU弹窗模式
				skuMode: 1,
				// 后端返回的商品信息
				goodsInfo: {},
				info: '',
				showShare: false,
				showSku: true,
				showCoupon: false,
				d_1: {
					sale: '50',
					saleSplit: '￥',
					saleLable: '买满79元可用',
					title: '满79减15元券',
					time: '2021.11.11-2021.11.12 15:00:00',
					btnText: '去使用',
					label: '说明：优惠券说明优惠券说明优'
				},
			};
		},
		methods: {
			async fetchData(id) {
				const result = await getGoodsInfo(id);
				this.info = result;
			},
			onClickShare() {
				this.showShare = !this.showShare;
			},
			onClickShareSheet(value) {
				console.log(value, 566456)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-detail {
		background-color: #f6f6f6;
		padding-bottom: 120rpx;

		.coupon-tag {
			border-radius: 30rpx;
			margin-right: 5rpx;
		}

		.cell-label {
			width: 100rpx;
			display: inline-block;
		}
	}
</style>
