<template>
	<view class="create-order-page pa-20">
		<tm-sheet :margin="[0,0]">
			<view class="text-size-s text-primary text-weight-b">
				￥1元开通年VIP会员,尊享大权益
			</view>
		</tm-sheet>
		<!-- 地址 -->
		<tm-listitem :margin="[0,20]" :padding="[35,35]" title="请选择地址" left-icon="icon-position" show-left-icon left-icon-color="grey" @click="jumpAddress"></tm-listitem>
		<!-- 商品信息 -->
		<view class="goods-info flex mt-20 round-2 pa-20 white shadow-5">
			<view class="goods-info__img">
				<image src="https://img15.shop-pro.jp/PA01085/674/product/136069239.jpg?cmsp_timestamp=20211023113253"
					mode=""></image>
			</view>
			<view class="flex-1">
				<view class="text-overflow-2 text-size-n">
					凤凰（Phoenix）儿童自行车山地车男女学生脚踏车6-12岁童车 霸道 白蓝色 18寸
				</view>
				<view class="num text-size-xs text-grey my-30">
					x1
				</view>
				<view class="price text-primary">
					<text class="text-size-xs">￥</text><text>539</text>
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="white round-2 mt-20">
			<tm-listitem :margin="[0,20]" :padding="[35,35]" title="优惠券" value="选择优惠券"></tm-listitem>
		</view>
		<!--金额  -->
		<view class="white round-2 mt-20 pa-30 text-size-xs">
			<view class="flex mb-30 flex-between">
				<text>总金额</text>
				<text>￥539</text>
			</view>
			<view class="flex flex-between">
				<text>优惠金额</text>
				<text class="text-primary">-￥0</text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="round-2 white py-10 mt-20">
			<view class="mt-2">
				<tm-input :vertical="true" :height="100" title="备注" :maxlength="100" :border-bottom="false"
					placeholder="请填写买家备注" input-type="textarea"
					bg-color="grey-lighten-5" clear></tm-input>
			</view>
		</view>
		<!-- 底部操作栏 -->
		<view class="fixed r-0 l-0 b-0 flex flex-between white pa-20">
			<view>
				<text class="text-size-xs">实支付</text>
				<text class="text-size-xs ml-20 text-primary">￥</text>
				<text class="text-primary">539.00</text>
			</view>
			<view class="primary submit-btn text-white">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			jumpAddress(){
				uni.navigateTo({
					url: '/pages/user/address/address',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.create-order-page {
		background-color: #f6f6f6;
		height: calc(100vh - 44px);

		.goods-info {
			&__img {
				image {
					width: 200rpx;
					height: 200rpx;
				}
			}
		}
		.submit-btn{
			border-radius: 40rpx;
			font-size: 28rpx;
			padding: 10rpx 20rpx;
		}
	}
</style>
