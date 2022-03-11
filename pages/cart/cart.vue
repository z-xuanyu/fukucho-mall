<template>
	<view class="cart-page px-20">
		<tm-groupcheckbox>
			<view class="mt-20 round-2 overflow" v-for="item in 4" :key="item">
				<view class="fulled white">
					<view class="flex align-items round-2">
						<view class="ml-10">
							<tm-checkbox v-model="checked" model="round" round="rounded"
								:border-color="checked ? 'primary': 'grey'" />
						</view>
						<view class="goods-info py-20 pr-10">
							<view class="flex">
								<image
									src="https://img12.360buyimg.com/seckillcms/s140x140_jfs/t1/202200/26/8685/97496/6152cb3bE89f521f2/8d4dc1641d1fc2ea.jpg"
									mode="aspectFit"></image>
								<view class="right">
									<view class="text-overflow-2 text-size-m">
										凤凰（Phoenix）儿童自行车山地车男女学生脚踏车6-12岁童车 霸道 白蓝色 18寸
									</view>
									<view class="my-15 text-size-xs text-grey">
										黑色
									</view>
									<view class="flex items-center flex-between">
										<view class="price text-primary">
											<text class="text-size-g">￥</text><text>598</text>
										</view>
										<tm-stepper :width="150" :height="38" v-model="word" :step="10" :round="25"></tm-stepper>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</tm-groupcheckbox>
		<!-- 操作 -->
		<view class="fixed r-0 l-0 white zIndex-10" style="bottom: 100rpx;">
			<view class="flex flex-between px-20 py-30">
				<tm-groupcheckbox>
					<tm-checkbox v-model="checkAll" model="round" round="rounded"
						:border-color="checkAll ? 'primary': 'grey'" />
				</tm-groupcheckbox>

				<view class="flex">
					<view class="price text-primary mr-20">
						<text class="text-2xl">￥</text>
						<text>289</text>
					</view>
					<tm-button theme="primary" :round="10" size="s" @click="jumpCreateOrder">去结算</tm-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tmGroupcheckbox from "@/tm-vuetify/components/tm-groupcheckbox/tm-groupcheckbox.vue"
	import tmCheckbox from "@/tm-vuetify/components/tm-checkbox/tm-checkbox.vue"
	import tmStepper from "@/tm-vuetify/components/tm-stepper/tm-stepper.vue"
	export default {
		components: {
			tmGroupcheckbox,
			tmCheckbox,
			tmStepper
		},
		data() {
			return {
				word:0,
				checked: false,
				checkAll: false,
			};
		},
		methods: {
			checkboxChange() {

			},
			handleClickDel() {
				this.isShowDelModal = true;
			},
			// 确认删除
			handleDelConfirm() {
				setTimeout(() => {
					this.isShowDelModal = false;
				}, 2000)

			},
			// 取消删除
			handleCancelDel() {
				this.isShowDelModal = false;
			},
			// 跳转创建订单
			jumpCreateOrder() {
				uni.navigateTo({
					url: '/pages/create-order/create-order',
				});
			}
		}
	}
</script>

<style lang="scss">
	.cart-page {
		min-height: calc(100vh - 44px);
		background-color: #f6f6f6;
		.align-items{
			align-items: center;
		}
		.goods-info {
			flex: 1;
			image {
				margin-right: 20rpx;
				width: 120rpx;
				height: 90px;
			}

			.right {
				flex: 1;
			}
		}

		.buy-btn {
			padding: 25rpx 20rpx;
		}
	}
</style>
