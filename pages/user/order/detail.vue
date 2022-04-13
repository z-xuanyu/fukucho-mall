<template>
	<view class="order-detail">
		<!-- 订单支付时间 -->
		<tm-sheet color="primary" :shadow="24">
			<view class="flex flex-center items-center text-size-n">
				<tm-icons size="40" color="white" name="icon-yinhangqia"></tm-icons>
				<view class="ml-20">订单待支付</view>
			</view>
			<view class="flex flex-center text-size-xs mt-20">
				<view class="mr-10">
					剩余时间:
				</view>
				<tm-countdown format="HH时MM分SS秒" :time="60*60*1000"></tm-countdown>
			</view>
		</tm-sheet>
		<!-- 地址 -->
		<tm-sheet :shadow="24">
			<view class="flex items-center">
				<tm-icons size="38" color="black" name="icon-position-fill"></tm-icons>
				<view class="ml-20 text-size-xs">
					<view class="mb-10">
						{{ addressInfo.address }}
					</view>
					<view class="mb-10">
						{{ addressInfo.detail }}
					</view>
					<view>
						<text>{{ addressInfo.name }}</text>
						<text>{{ addressInfo.phone }}</text>
					</view>
				</view>
			</view>
		</tm-sheet>
		<!-- 商品信息 -->
		<tm-sheet :shadow="24" :padding="[25,10]">
			<view class="flex py-20" v-for="item in orderInfo.products" :key="item._id">
				<image class="goods-img" :src="item.productId.pic" mode=""></image>
				<view class="ml-20 text-size-xs flex-1">
					<view class="mb-10 text-overflow-2">
						{{ item.productId.title }}
					</view>
					<view class="mb-10 ml-10 text-grey">
						x {{ item.num }}
					</view>
					<view class="text-primary mt-40">
						<text>￥</text>
						<text class="text-size-g">{{ item.price }}</text>
					</view>
				</view>
			</view>
		</tm-sheet>
		<!-- 订单信息 -->
		<tm-sheet :shadow="24">
			<view class="text-size-s">
				<view class="mb-20">
					<text class="mr-20">订单编号:</text>
					<text>164564564564564</text>
				</view>
				<view class="my-20">
					<text class="mr-20">下单时间:</text>
					<text>2022-03-18 17:53:43</text>
				</view>
				<view class="my-20">
					<text class="mr-20">支付方式:</text>
					<text>164564564564564</text>
				</view>
				<view>
					<text class="mr-20">支付编号:</text>
					<text>164564564564564</text>
				</view>
			</view>
		</tm-sheet>
		
		<!-- 订单支付金额 -->
		<tm-sheet :shadow="24">
			<view class="text-size-s">
				<view class="mb-20 flex flex-between">
					<text class="mr-20 text-grey">总计</text>
					<text>￥{{ orderInfo.totalPrice }}</text>
				</view>
				<view class="my-20 flex flex-between">
					<text class="mr-20 text-grey">优惠</text>
					<text>￥0</text>
				</view>
				<view class="my-20 flex flex-between">
					<text class="mr-20 text-grey">运费</text>
					<text>￥0</text>
				</view>
				<view class="flex flex-between">
					<text class="mr-20">实际实付</text>
					<view class="text-primary">
						<text>￥</text>
						<text class="text-size-g">{{ orderInfo.totalPrice }}</text>
					</view>
				</view>
			</view>
		</tm-sheet>
		
		<view class="fixed b-0 r-0 l-0 white pa-20">
			<view class="flex flex-between">
				<view class="flex flex-col items-center pl-20" @click="jumpHome">
					<tm-icons size="40" color="black" name="icon-home"></tm-icons>
					<text class="text-size-s mt-2">首页</text>
				</view>
				<view class="flex">
					<tm-button theme="grey" size="s" :round="24">取消订单</tm-button>
					<tm-button theme="primary" size="s" :round="24">立即支付</tm-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getOderInfo } from "../../../api/order.js"
	export default {
		data() {
			return {
				orderInfo: '',
				addressInfo: '',
			};
		},
		onLoad(option) {
			this.fetchData(option.id);
		},
		methods: {
			async fetchData(id) {
				const res = await getOderInfo(id);
				this.orderInfo = res;
				this.addressInfo = res.addressId;
			},
			jumpHome() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-detail {
		background-color: #F6F6F6;
		min-height: calc(100vh - 44px);
		padding-bottom: 100rpx;
		.goods-img {
			width: 200rpx;
			height: 200rpx;
		}
	}
	
</style>
