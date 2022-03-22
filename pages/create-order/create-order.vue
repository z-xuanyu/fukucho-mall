<template>
	<view class="create-order-page pa-20">
		<tm-sheet :margin="[0,0]">
			<view class="text-size-s text-primary text-weight-b">
				￥1元开通年VIP会员,尊享大权益
			</view>
		</tm-sheet>
		<!-- 地址 -->
		<tm-listitem :margin="[0,20]" :padding="[35,35]" left-icon="icon-position" class="address-wrapper"
			show-left-icon left-icon-color="grey" @click="jumpAddress">
			<view v-if="addressInfo">
				<view class="text-size-xs">
					{{ addressInfo.address }} {{ addressInfo.detail}}
				</view>
				<view class="text-size-xs mt-10">
					{{ addressInfo.name }} {{ addressInfo.phone }}
				</view>
			</view>
		</tm-listitem>
		<!-- 商品信息 -->
		<view class="goods-info mt-20 round-2 pa-20 white shadow-5">
			<template v-if="!type">
				<view class="flex my-25" v-for="item in selectCartList" :key="item._id">
					<view class="goods-info__img">
						<image :src="item.productId.pic" mode=""></image>
					</view>
					<view class="flex-1">
						<view class="text-overflow-2 text-size-xs">
							{{ item.productId.title }}
						</view>
						<view class="num text-size-xs text-grey my-30">
							x {{ item.num }}
						</view>
						<view class="price text-primary">
							<text class="text-size-xs">￥</text><text>{{ item.price }}</text>
						</view>
					</view>
				</view>
			</template>
			<!-- 立即购买 -->
			<template v-else>
				<view class="flex my-25">
					<view class="goods-info__img">
						<image :src="productInfo.pic" mode=""></image>
					</view>
					<view class="flex-1 ml-20">
						<view class="text-overflow-2 text-size-xs">
							{{ productInfo.title }}
						</view>
						<view class="num text-size-xs text-grey my-30">
							x {{ productInfo.num }}
						</view>
						<view class="price text-primary">
							<text class="text-size-xs">￥</text><text>{{ productInfo.price }}</text>
						</view>
					</view>
				</view>
			</template>
		</view>
		<!-- 优惠券 -->
		<view class="white round-2 mt-20">
			<tm-listitem @click="showCoupon = true" :margin="[0,20]" :padding="[35,35]" title="优惠券" value="选择优惠券">
			</tm-listitem>
		</view>
		<!--金额  -->
		<view class="white round-2 mt-20 pa-30 text-size-xs">
			<view class="flex mb-30 flex-between">
				<text>总金额</text>
				<text>￥{{ totalPrice }}</text>
			</view>
			<view class="flex flex-between">
				<text>优惠金额</text>
				<text class="text-primary">-￥0</text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="round-2 white remark-wrapper py-10 mt-20">
			<view class="mt-2">
				<tm-input v-model="remark" :vertical="true" :height="100" title="备注" :maxlength="100" :border-bottom="false"
					placeholder="请填写买家备注" input-type="textarea" bg-color="grey-lighten-5" clear></tm-input>
			</view>
		</view>
		<!-- 优惠券弹出层 -->
		<tm-poup v-model="showCoupon" :height='400' position="bottom">
			<view class="ma-32 ">
				<tm-coupon color="orange" :hdata="d_1"></tm-coupon>
			</view>
		</tm-poup>
		<!-- 底部操作栏 -->
		<view class="fixed r-0 l-0 b-0 flex flex-between white pa-20">
			<view>
				<text class="text-size-xs">实支付</text>
				<text class="text-size-xs ml-20 text-primary">￥</text>
				<text class="text-primary">{{ totalPrice }}</text>
			</view>
			<view class="primary submit-btn text-white" @click="submitOrder">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserAddressList } from "../../api/user.js"
	import { craateOrder } from "../../api/order.js"
	export default {
		data() {
			return {
				type: 0, // 0：购物车下单，1：立即下单
				addressInfo: {},
				selectCartList: [],
				productInfo: {},
				showCoupon: false,
				d_1: {
					sale: '50',
					saleSplit: '￥',
					saleLable: '买满79元可用',
					title: '满79减15元券',
					time: '2021.11.11-2021.11.12 15:00:00',
					btnText: '领取',
					label: '说明：优惠券说明优惠券说明优'
				},
				remark: '',
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		onShow() {
			const selectCartList = uni.getStorageSync('selectCartList');
			const selectProductInfo = uni.getStorageSync('selectProductInfo');
			if(selectCartList) {
				this.selectCartList = selectCartList;
			}
			if(selectProductInfo) {
				this.productInfo = selectProductInfo;
			}
		},
		created() {
			this.fetchAddressData();
		},
		methods: {
			async fetchAddressData() {
				const res = await getUserAddressList();
				this.addressInfo = res.find(item => item.isDefault);
			},
			jumpAddress() {
				uni.navigateTo({
					url: '/pages/user/address/address?from=cart',
				});
			},
			// 提交订单
			async submitOrder() {
				if(!this.selectCartList.length && !this.type) return uni.showToast({
					title: '购物车信息不存在',
					icon: 'none'
				})
				let orderData;
				// 立即购买
				if(this.type){
					orderData = await craateOrder({
						products: [
							{
								productId: this.productInfo.productId,
								num: this.productInfo.num,
								price: this.productInfo.price,
								skuName: this.productInfo.skuName,
							}
						],
						addressId: this.addressInfo._id,
						source: 'H5',
						totalPrice: this.productInfo.price,
						payment: this.productInfo.price,
						remark: this.remark,
						way:1
					})
				}else {
					// 购物车清算
					orderData = await craateOrder({
						cartIds: this.selectCartList.map(item=> item._id),
						addressId: this.addressInfo._id,
						source: 'H5',
						totalPrice: this.totalPrice,
						payment: this.totalPrice,
						remark: this.remark,
					})
				}
				
				uni.removeStorageSync('selectCartList');
				uni.removeStorageSync('selectProductInfo');
				uni.navigateTo({
					url: `/pages/payment/payment?id=${orderData._id}`
				})
			}
		},
		computed: {
			totalPrice() {
				return this.selectCartList.reduce((pre, next) => {
					return pre + (next.price * next.num)
				}, 0)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.create-order-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
		.goods-info {
			&__img {
				image {
					width: 200rpx;
					height: 200rpx;
				}
			}
		}

		.submit-btn {
			border-radius: 40rpx;
			font-size: 28rpx;
			padding: 10rpx 20rpx;
		}
		.remark-wrapper{
			margin-bottom: 100rpx;
		}
	}
</style>
