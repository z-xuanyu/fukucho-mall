<template>
	<view class="pay-page">
		<view class="text-align-center fulled mt-50 pt-50 text-size-s text-grey">
			支付金额
		</view>
		<view class="text-align-center mt-20">
			<text class="text-size-xs text-primary">￥</text>
			<text class="text-primary text-size-xl">539</text>
		</view>
		
		<tm-listitem left-icon="icon-weixin" show-left-icon left-icon-color="green" :left-icon-size="58">
			<view>
				微信支付
			</view>
			<view class="text-size-xs mt-5 text-grey">
				推荐使用，方便便捷！
			</view>
			<template #rightIcon>
				<tm-radio v-model="checked"></tm-radio>
			</template>
		</tm-listitem>
		
		<view class="fixed b-50 l-20 r-20">
			<tm-button size="m" :round="24" block @click="paySubmit">确认支付</tm-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
			};
		},
		methods: {
			paySubmit() {
				uni.navigateTo({
					url: '/pages/user/order/order'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
