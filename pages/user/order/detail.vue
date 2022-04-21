<template>
	<view class="order-detail">
		<!-- 订单支付时间 -->
		<tm-sheet color="primary" :shadow="24">
			<view class="flex flex-center items-center">
				<tm-icons size="38" color="white" name="icon-yinhangqia"></tm-icons>
				<view class="ml-20">订单待支付</view>
			</view>
			<view class="flex flex-center text-size-xs mt-20">
				<view class="mr-10">
					剩余时间:
				</view>
				<tm-countdown format="HH时MM分SS秒" :time="60*60*1000"></tm-countdown>
			</view>
		</tm-sheet>
		<!-- 步骤 -->
		<tm-sheet :shadow="24">
			<tm-steps model="number" color="primary" activeFontColor="primary" line-color="primary" v-model="active" :list="list"></tm-steps>
		</tm-sheet>
		<!-- 地址 -->
		<tm-sheet :shadow="24">
			<view class="flex items-center">
				<tm-icons size="38" color="black" name="icon-position-fill"></tm-icons>
				<view class="ml-20 flex-1">
					<view class="mb-10">
						{{ addressInfo.address }}-{{ addressInfo.detail }}
					</view>
					<view>
						<text>{{ addressInfo.name }}</text>
						<text class="ml-10">{{ addressInfo.phone }}</text>
					</view>
				</view>
			</view>
		</tm-sheet>
		<!-- 商品信息 -->
		<tm-sheet :shadow="24" :padding="[0,0]">
			<view class="border-b-1 pa-20">
				共 {{ orderInfo.products.length }}件商品
			</view>
			<view class="flex pa-10" v-for="item in orderInfo.products" :key="item._id">
				<image class="goods-img" :src="item.productId.pic" mode=""></image>
				<view class="ml-20 flex-1">
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
			<view class="flex items-center flex-center border-t-1 pa-20 text-blue">
				<tm-icons name='icon-headset-fill' color="blue"></tm-icons>
				<text class="ml-10">联系客服</text>
			</view>
		</tm-sheet>
		<!-- 订单信息 -->
		<tm-sheet :shadow="24">
			<view class="mb-20 flex flex-between">
				<text class="mr-20">订单编号:</text>
				<text>wx248462889885630464</text>
			</view>
			<view class="my-20 flex flex-between">
				<text class="mr-20">下单时间:</text>
				<text>2022-03-18 17:53:43</text>
			</view>
			<view class="my-20 flex flex-between">
				<text class="mr-20">支付状态:</text>
				<text>未支付</text>
			</view>
			<view class="flex flex-between">
				<text class="mr-20">支付方式:</text>
				<text>微信</text>
			</view>
		</tm-sheet>
		
		<!-- 订单支付金额 -->
		<tm-sheet :shadow="24">
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
				active: 1,
				list:['待付款','待发货','待收货','待评价', '已完成'],
				
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
