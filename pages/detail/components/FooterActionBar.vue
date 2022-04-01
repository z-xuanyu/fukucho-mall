<template>
	<view class="footer-bar">
		<view class="fixed b-0 white r-0 l-0 pa-20">
			<view class="flex flex-between">
				<view class="flex">
					<view class="flex flex-col items-center" @click="jumpHome">
						<tm-icons size="40" name="icon-home" color="black"></tm-icons>
						<text class="text-size-xs">首页</text>
					</view>
					<view class="flex flex-col ml-40 items-center" @click="jumpCart">
						<tm-icons size="40" name="icon-shoppingcart" color="black"></tm-icons>
						<text class="text-size-xs">购物车</text>
					</view>
					<view class="flex flex-col ml-40 items-center" @click="onClickColletionGodds">
						<tm-icons size="40" name="icon-like" v-if="!info.isCollection" color="black"></tm-icons>
						<tm-icons size="40" name="icon-heart-fill" v-if="info.isCollection"></tm-icons>
						<text class="text-size-xs">收藏</text>
					</view>
				</view>
				<view class="btn flex items-center">
					<view class="orange add-cart text-color-white" @click="openSkuPopup">
						加入购物车
					</view>
					<view class="primary text-color-white buy" @click="openSkuPopup">
						立即购买
					</view>
				</view>
			</view>
		</view>
		<!-- sku popup -->
		<GoodsSkuPopup ref="skuPopup" v-model="skuKey" border-radius="20" :localdata="goodsInfo" :mode="skuMode"
			@open="onOpenSkuPopup" @close="SkuPopup" @add-cart="addCartSubmit" @buy-now="buyNowSubmit"></GoodsSkuPopup>
		<tm-message ref="toast"></tm-message>
	</view>
</template>

<script>
	import {
		collectionGoods
	} from "../../../api/goods.js"
	import {
		addCart
	} from "../../../api/cart.js"
	import GoodsSkuPopup from "./GoodsSkuPopup.vue"
	export default {
		name: 'FooterActionBar',
		components: {
			GoodsSkuPopup
		},
		props: {
			// 规格类型 1: 单规格 2: 多规格
			type: {
				type: String | Number,
				default: 1,
			},
			info: {
				type: Object | Array,
				default: () => null
			}
		},
		data() {
			return {
				num: 1,
				skuKey: false,
				skuMode: 1,
				goodsInfo: {},
			}
		},
		methods: {
			// 回到首页
			jumpHome() {
				uni.switchTab({
					url: '/pages/index/index'
				});
			},
			// 跳转购物车
			jumpCart() {
				uni.switchTab({
					url: '/pages/cart/cart'
				})
			},
			// 点击收藏商品
			async onClickColletionGodds() {
				await collectionGoods(this.info._id);
				if (this.info.isCollection) {
					this.$refs.toast.show({
						model: 'success',
						label: '取消收藏'
					})
				} else {
					this.$refs.toast.show({
						model: 'success',
						label: '收藏成功'
					})
				}
				this.info.isCollection = !this.info.isCollection;
			},
			openSkuPopup() {
				this.goodsInfo = {
					"_id": "002",
					"name": "迪奥香水",
					"goods_thumb": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
					"sku_list": [{
							"_id": "004",
							"goods_id": "002",
							"goods_name": "迪奥香水",
							"image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
							"price": 19800,
							"sku_name_arr": ["50ml/瓶"],
							"stock": 100
						},
						{
							"_id": "005",
							"goods_id": "002",
							"goods_name": "迪奥香水",
							"image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
							"price": 9800,
							"sku_name_arr": ["70ml/瓶"],
							"stock": 100
						}
					],
					"spec_list": [{
						"list": [{
								"name": "20ml/瓶"
							},
							{
								"name": "50ml/瓶"
							},
							{
								"name": "70ml/瓶"
							}
						],
						"name": "规格"
					}]
				}
				this.skuKey = true;
			},
			// sku组件 开始-----------------------------------------------------------
			onOpenSkuPopup() {
				console.log("监听 - 打开sku组件");
			},
			SkuPopup() {
				console.log("监听 - 关闭sku组件");
			},
			// 加入购物车按钮
			addCartSubmit(selectShop) {
				console.log()
			},
			// 立即购买
			buyNowSubmit(selectShop) {
				
			},
			toast(msg) {
				uni.showToast({
					title: msg,
					icon: "none"
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-cart {
		padding: 15rpx 50rpx;
		border-radius: 50rpx 0 0 50rpx;
		font-size: 24rpx;
	}

	.buy {
		padding: 15rpx 50rpx;
		border-radius: 0 50rpx 50rpx 0;
		font-size: 24rpx;
	}

	.goods-sku {
		.goods-img {
			width: 250rpx;
			height: 250rpx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.add-cart {
			width: 40%;
			padding: 15rpx 20rpx;
			border-radius: 50rpx 0 0 50rpx;
			font-size: 24rpx;
		}

		.buy {
			padding: 15rpx 20rpx;
			border-radius: 0 50rpx 50rpx 0;
			font-size: 24rpx;
			width: 40%;
		}
	}
</style>
