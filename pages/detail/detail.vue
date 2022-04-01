<template>
	<view class="goods-detail">
		<!-- 轮播图 -->
		<BannerSwiper :list="info.bannerImg" heigth="600" />
		<view class="pa-20">
			<tm-sheet :margin="[0,0]">
				<view class="text-size-s text-primary text-weight-b">
					￥1元开通年VIP会员,尊享大权益
				</view>
			</tm-sheet>
			<view class="round-2 white pa-20 mt-20">
				<view class="flex items-center">
					<tm-tags size="xs" model="fill">会员价</tm-tags>
					<view class="ml-2">
						<text class="text-size-xs text-primary">￥</text>
						<text class="text-primary">{{ info.price }}</text>
						<text class="ml-10 text-size-xs text-grey">原价</text>
						<text class="text-size-xs text-grey">￥</text>
						<text class="text-grey">3999</text>
					</view>
				</view>
				<view class="mt-20 text-size-m">
					{{ info.title }}
				</view>
				<view class="flex flex-between mt-20">
					<view class="round-2 text-size-xs pa-10 px-20 grey">
						购买可得<text class="text-primary">1</text>积分
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

				openSkuPopup() {
					/**
					 * 获取商品信息
					 * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
					 */
					// 此处写接口请求，并将返回的数据进行处理成goodsInfo的数据格式，
					// goodsInfo是后端返回的数据
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
				// 加入购物车前的判断
				addCartFn(obj) {
					let {
						selectShop
					} = obj;
					// 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
					let res = {};
					let name = selectShop.goods_name;
					if (selectShop.sku_name != "默认") {
						name += "-" + selectShop.sku_name_arr;
					}
					res.msg = `${name} 已添加到购物车`;
					if (typeof obj.success == "function") obj.success(res);
				},
				// 加入购物车按钮
				addCart(selectShop) {
					console.log()
				},
				// 立即购买
				buyNow(selectShop) {
				  const that = this;
				 console.log("监听 - 立即购买");
					that.addCartFn({
						selectShop: selectShop,
						success: function(res) {
							// 实际业务时,请替换自己的立即购买逻辑
				 		that.toast("立即购买");
						}
					});
				},
				toast(msg) {
				 uni.showToast({
						title: msg,
						icon: "none"
					});
				}
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
