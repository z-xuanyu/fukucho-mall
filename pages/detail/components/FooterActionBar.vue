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
				// 无规格
				let data = {};
				if (this.info.skuType == 1) {
					data = {
						_id: this.info._id,
						name: this.info.title,
						goods_thumb: this.info.pic,
						sku_list: [{
							_id: this.info._id,
							goods_id: this.info._id,
							goods_name: this.info.title,
							image: this.info.pic,
							price: this.info.price * 100,
							stock: this.info.inventory,
							sku_name_arr: ['默认'],
						}],
						spec_list: [{
							list: [{
								name: "默认"
							}],
							name: "默认"
						}]
					}
				} else {
					data = {
						_id: this.info._id,
						name: this.info.title,
						goods_thumb: this.info.pic,
						sku_list: this.info.skus.map(item => ({
							_id: item._id,
							goods_id: this.info._id,
							goods_name: this.info.title,
							image: item.image ? item.image : this.info.pic,
							price: item.price * 100,
							stock: item.inventory,
							sku_name_arr: item.skuNames,
						})),
						spec_list: this.info.skuAttrs.map(item => ({
							name: item.name,
							list: item.values.map(v => ({
								name: v
							}))
						}))
					}
				}

				this.goodsInfo = data;
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
			async addCartSubmit(selectShop) {
				await addCart({
					productId: selectShop.goods_id,
					num: selectShop.buy_num,
					skuName: selectShop.sku_name_arr.join("-"),
					price: selectShop.price / 100,
				})
				this.toast('加入成功');
				this.skuKey = false;
				console.log(selectShop, '加入购物车')
			},
			// 立即购买
			buyNowSubmit(selectShop) {
				console.log(selectShop, '立即购买');
				const data = {
					productId: selectShop.goods_id,
					num: selectShop.buy_num,
					skuName: selectShop.sku_name_arr.join("-"),
					price: selectShop.price / 100,
					pic: selectShop.image,
					title: selectShop.goods_name
				}
				uni.setStorageSync('selectProductInfo', data);
				uni.navigateTo({
					url: '/pages/create-order/create-order?type=1',
				});
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
