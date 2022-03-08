<template>
	<view class="create-order-page p-2">
		<u-alert title="￥1元开通年VIP会员,尊享大权益" type="error"></u-alert>
		<!-- 地址 -->
		<view class="bg-white rounded mt-2" @click="jumpAddress">
			<u-cell-group :border="false">
				<u-cell :border="false" title="选择收人地址" :isLink="true">
					<template #icon>
						<u-icon name="map" size="35"></u-icon>
					</template>
				</u-cell>
			</u-cell-group>
		</view>
		<!-- 商品信息 -->
		<view class="goods-info flex mt-2 rounded p-2 bg-white">
			<view class="goods-info__img">
				<image src="https://img15.shop-pro.jp/PA01085/674/product/136069239.jpg?cmsp_timestamp=20211023113253"
					mode=""></image>
			</view>
			<view class="flex-1">
				<u--text :lines="2" text="凤凰（Phoenix）儿童自行车山地车男女学生脚踏车6-12岁童车 霸道 白蓝色 18寸" />
				<view class="num text-2xl text-color-gray my-3">
					x1
				</view>
				<view class="price text-color-primary">
					<text class="text-2xl">￥</text><text>539</text>
				</view>
			</view>
		</view>
		<!-- 优惠券 -->
		<view class="bg-white rounded mt-2">
			<u-cell-group :border="false">
				<u-cell :border="false" title="优惠券" value="选择优惠券" :isLink="true">
					<template #icon>
						<u-icon name="coupon" size="35"></u-icon>
					</template>
				</u-cell>
			</u-cell-group>
		</view>
		<!--金额  -->
		<view class="bg-white rounded mt-2 p-3 text-2xl">
			<view class="flex mb-3 justify-between">
				<text>总金额</text>
				<text>￥539</text>
			</view>
			<view class="flex justify-between">
				<text>优惠金额</text>
				<text class="text-color-primary">-￥0</text>
			</view>
		</view>
		<!-- 备注 -->
		<view class="rounded bg-white p-3 mt-2">
			<view class="text-2xl">
				备注
			</view>
			<view class="mt-2">
				<u--textarea height="150" placeholder="请填写买家备注" ></u--textarea>
			</view>
		</view>
		<!-- 底部操作栏 -->
		<view class="fixed right-0 left-0 bottom-0 flex justify-between bg-white p-2">
			<view>
				<text class="text-2xl">实支付</text>
				<text class="text-2xl ml-2 text-color-primary">￥</text>
				<text class="text-color-primary">539.00</text>
			</view>
			<view class="bg-primary submit-btn text-color-white">
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
