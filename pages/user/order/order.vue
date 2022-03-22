<template>
	<view class="order-page">
		<tm-tabs v-model="activeIndex" :list="list" @change="changeTabs"></tm-tabs>
		<view class="pa-20">
			<view class="pa-20 px-30 white round-2 mb-20" v-for="item in orderList" :key="item._id">
				<view class="flex py-20" @click="jumpOrderDetail(item._id)" v-for="goods in item.products" :key="goods._id">
					<image
						:src="goods.productId.pic"
						mode=""></image>
					<view class="flex-1 ml-20">
						<view class="text-size-xs text-overflow-2">
							{{ goods.productId.title }}
						</view>
						<view class="text-size-xs mt-20 text-gray">
							<text>x 1</text>
							<text class="ml-20">{{ goods.skuName }}</text>
						</view>
						<view class="mt-20 text-primary">
							<text class="text-size-xs">￥</text>
							<text>{{ goods.price }}</text>
						</view>
					</view>
				</view>
				<view class="text-align-right">
					<text class="text-size-xs">实际付款</text>
					<text class="text-size-xs ml-20">￥</text>
					<text>{{ item.totalPrice }}</text>
				</view>
				<view class="flex flex-between mt-20 items-center">
					<text class="text-size-s text-grey">{{ item.status | orderStatusText }}</text>
					<view class="flex mr--35">
						<!-- 待付款 -->
						<template v-if="item.status === 1">
							<tm-button theme="grey" size="s" :round="24" @click="showCancelOrderModal = true; orderId = item._id">取消</tm-button>
							<tm-button theme="primary" size="s" :round="24" @click="handlePay(item._id)">立即支付</tm-button>
						</template>
						<!-- 待发货 -->
						<template v-if="item.status === 2">
							<tm-button theme="blue" size="s" :round="24" @click="handlEamendAddress">修改地址</tm-button>
							<tm-button theme="primary" size="s" :round="24" @click="handleRemindDelivery">提醒发货</tm-button>
						</template>
						<!-- 待收货 -->
						<template v-if="item.status === 3">
							<tm-button theme="grey" size="xs" :round="24" @click="handleRemindDelivery">查看物流</tm-button>
							<tm-button theme="primary" size="xs" :round="24" @click="showConfirmTakeModal = true; orderId = item._id">确认收货</tm-button>
						</template>
						<template v-if="item.status === 4">
							<tm-button theme="primary" size="s" plan :round="24" @click="handleRemindDelivery">评价</tm-button>
						</template>
					</view>
				</view>
			</view>
		</view>
		<!-- 取消 -->
		<tm-dialog style="height: 100%;" v-model="showCancelOrderModal" content="您确认要取消该订单?" @confirm="confirmCancelOrder" theme="split"></tm-dialog>
		<tm-message ref="toast"></tm-message>
		<!-- 空数据 -->
		<template v-if="!orderList.length">
			<tm-empty color="black" icon="../../../static/images/empty/list.png" label="暂无数据" :size="600" />
		</template>
		
		<!-- 确认收货 -->
		<tm-dialog style="height: 100%;" v-model="showConfirmTakeModal" content="您确认收到货了吗?" @confirm="confirmTake" theme="split"></tm-dialog>
	</view>
</template>

<script>
	import { getUserOrders, cancelOder, confirmTake } from "../../../api/order.js"
	export default {
		name: 'UserOrder',
		data() {
			return {
				activeIndex: 0,
				orderId: null,
				list: ['全部', '待付款', '待发货', '待收货', '待评价'],
				orderList: [],
				showCancelOrderModal: false,
				// 确认收货
				showConfirmTakeModal: false,
				
			};
		},
		onShow() {
			this.fetchData();
		},
		methods: {
			async fetchData(){
				const res = await getUserOrders({
					status: this.activeIndex,
				});
				this.orderList = res;
			},
			jumpOrderDetail(id) {
				uni.navigateTo({
					url: `/pages/user/order/detail?id=${id}`
				})
			},
			// 取消订单提交
			async confirmCancelOrder() {
				await cancelOder(this.orderId);
				this.fetchData();
				this.$refs.toast.show({model:'success', label: '取消成功'})
			},
			// tabs 改变
			changeTabs() {
				this.fetchData();
			},
			// 修改地址
			handlEamendAddress() {
				
			},
			// 提醒发货
			handleRemindDelivery() {
				
			},
			// 处理支付
			handlePay(id) {
			   uni.navigateTo({
			   	url: `/pages/payment/payment?id=${id}`
			   })
			},
			// 确认收货
			async confirmTake() {
				await confirmTake(this.orderId);
				this.fetchData();
				this.$refs.toast.show({model:'success', label: '确认成功'});
				
			}
		},
		filters: {
			orderStatusText(value) {
				return ['待付款', '待发货', '待收货', '待评价', '退款'][value - 1]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);

		image {
			width: 200rpx;
			height: 200rpx;
		}
	}
</style>
