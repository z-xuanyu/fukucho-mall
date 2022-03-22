<template>
	<view class="pay-success pt-50">
		<tm-empty color="primary" label="支付成功" icon="icon-check-circle-fill">
			<tm-button @click="jumpOrderList">全部订单</tm-button>
		</tm-empty>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			jumpOrderList() {
				uni.navigateTo({
					url: '/pages/user/order/order'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
