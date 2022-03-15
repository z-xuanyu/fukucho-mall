<template>
	<view class="footer-bar">
		<view class="fixed b-0 white r-0 l-0 pa-20">
			<view class="flex flex-between">
				<view class="flex">
					<view class="flex flex-col items-center" @click="jumpHome">
						<tm-icons size="40" name="icon-home" color="black"></tm-icons>
						<text class="text-size-xs">首页</text>
					</view>
					<view class="flex flex-col ml-40 items-center">
						<tm-icons size="40" name="icon-headset" color="black"></tm-icons>
						<text class="text-size-xs">客服</text>
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
					<view class="orange add-cart text-color-white" @click="show = true">
						加入购物车
					</view>
					<view class="primary text-color-white buy" @click="show = true">
						立即购买
					</view>
				</view>
			</view>
		</view>
		<!-- sku popup -->
		<view class="goods-sku">
			<tm-poup v-model="show" position="bottom" :height="600">
				<view class="pa-20 relative">
					<view class="flex">
						<view class="goods-img">
							<image src="http://nestshop.oss-cn-shenzhen.aliyuncs.com/images/0220307182009.png" mode=""></image>
						</view>
						<view class="ml-10 mt-20">
							<view class="price text-primary">
								<text class="text-size-xs">￥</text>
								<text class="text-size-lg">{{ info.price }}</text>
								<text class="text-size-s text-grey ml-20">原价</text>
								<text class="text-size-s text-grey">￥</text>
								<text class="text-grey text-size-n text-delete">4900.00</text>
							</view>
							<view class="inventory text-size-s mt-10 text-grey">
								库存: {{ info.inventory }}
							</view>
							<view class="select mt-10 text-size-s text-grey">
								已选：500ml
							</view>
							<tm-tags size="s" class="ml-0 mt-20" model="fill">包邮</tm-tags>
						</view>
					</view>
					<view class="sku-name mt-20 ml-20" v-if="info.skuType == 2">
						<text class="text-grey">容量</text>
						<view class="flex mt-5">
							<tm-tags class="ml-0" size="s" model="outlined">500ml</tm-tags>
						</view>
					</view>
					<view class="sku-name flex flex-between items-center mt-20 ml-30">
						<text>数量</text>
						<tm-stepper circular v-model="num" :width="120" :height="38" :min="0" :max="10" :step="1" :round="24"></tm-stepper>
					</view>
					
					<!-- 底部按钮 -->
					<view class="btn flex fixed b-30 fulled items-center flex-center mt-40">
						<view class="orange text-align-center add-cart text-color-white" @click="onClickAddCart">
							加入购物车
						</view>
						<view class="primary text-color-white buy text-align-center" @click="onClickBuyNow">
							立即购买
						</view>
					</view>
					<!-- 关闭icon -->
					<tm-icons size="46" name="icon-times-circle" color="grey" @click="onClickClose" class="absolute t-20 r-20"></tm-icons>
				</view>
			</tm-poup>
		</view>
		<tm-message ref="toast"></tm-message>
	</view>
</template>

<script>
	import { collectionGoods } from "../../../api/goods.js"
	import { addCart } from "../../../api/cart.js"
	export default {
		name: 'FooterActionBar',
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
				show: false,
				num: 1,
			}
		},
		methods: {
			// 回到首页
			jumpHome(){
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
			onClickClose(){
				this.show = !this.show;
			},
			async onClickAddCart() {
				await addCart({ productId: this.info._id, num: this.num, skuName: '500ml', price: this.info.price });
				this.$refs.toast.show({model:'success', label: '添加成功'});
				this.show = !this.show;
				// this.$emit('addCart', [])
			},
			onClickBuyNow() {
				this.$emit('buyNow', [])
			},
			// 点击收藏商品
			async onClickColletionGodds() {
				await collectionGoods(this.info._id);
				if(this.info.isCollection) {
					this.$refs.toast.show({model:'success', label: '取消收藏'})
				}else {
					this.$refs.toast.show({model:'success', label: '收藏成功'})
				}
				this.info.isCollection = !this.info.isCollection;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-cart {
		padding: 15rpx 20rpx;
		border-radius: 50rpx 0 0 50rpx;
		font-size: 24rpx;
	}
	.buy {
		padding: 15rpx 20rpx;
		border-radius: 0 50rpx 50rpx 0;
		font-size: 24rpx;
	}
	
	.goods-sku {
		.goods-img{
			width: 250rpx;
			height: 250rpx;
			overflow: hidden;
			image{
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
