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
		<!-- 确认支付 -->
		<view class="fixed b-50 l-20 r-20">
			<tm-button size="m" :round="24" block @click="paySubmit">确认支付</tm-button>
		</view>
		<tm-maskFlow v-model="show">
			<tm-sheet :shadow="24">
				<view class="text-size-s text-weight-b mb-24">请输入密码</view>
				<tm-password :round="24" :shadow="16" bg-color="white" text-color='primary' :height='80' :width='80'
					v-model="password" :code-length="6" noval="mline" @confirm="handleConfirm" />

			</tm-sheet>
		</tm-maskFlow>
	</view>
</template>

<script>
	import { weixinPay } from "@/api/pay.js"
	export default {
		data() {
			return {
				orderId: null,
				checked: true,
				show: false,
				password: '',
			};
		},
		onLoad(option) {
			this.orderId = option.id
		},
		methods: {
			paySubmit() {
				this.show = !this.show;
			},
			async handleConfirm() {
				this.show = !this.show;
				this.password = '';
				await weixinPay({ orderId: this.orderId });
				uni.navigateTo({
					url: '/pages/payment/success'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
