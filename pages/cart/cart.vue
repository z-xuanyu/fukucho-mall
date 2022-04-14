<template>
	<view class="cart-page px-20 py-10">
		<tm-groupcheckbox @change="groupCheckboxChange">
			<view class="mt-20 round-4 overflow shadow-10" v-for="item in list" :key="item._id">
				<view class="fulled white">
					<view class="flex align-items round-2">
						<view class="ml-10">
							<tm-checkbox v-model="item.checked" model="round" round="rounded"
								:border-color="item.checked ? 'primary': 'grey'" />
						</view>
						<view class="goods-info py-30 pr-10">
							<view class="flex">
								<image :src="item.productId.pic" mode="aspectFit"></image>
								<view class="right">
									<view class="text-overflow-2 text-size-m">
										{{ item.productId.title }}
									</view>
									<view class="my-15 text-size-xs text-grey">
										{{ item.skuName }}
									</view>
									<view class="flex items-center flex-between">
										<view class="price text-primary">
											<text class="text-size-g">￥</text><text>{{ item.price }}</text>
										</view>
										<!-- <tm-stepper :width="150" :height="38" v-model="word" :step="10" :round="25"></tm-stepper> -->
										<tm-stepper circular v-model="item.num" :width="120" :height="38" :min="0"
											:max="10" :step="1" :round="24"></tm-stepper>
										<tm-icons size="32" class="mr-10" name="icon-delete-fill" color="grey"
											@click="handleClickDel(item._id)" />
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</tm-groupcheckbox>
		<!-- 操作 -->
		<view class="fixed cart-action-bar r-0 l-0 white zIndex-10 border-b-1">
			<view class="flex flex-between items-center px-20 py-10">
				<view @click="changeCheAll">
					<tm-groupcheckbox>
						<tm-checkbox v-model="checkAll" model="round" round="rounded"
							:border-color="checkAll ? 'primary': 'grey'" />
					</tm-groupcheckbox>
				</view>

				<view class="flex items-center">
					<view class="price text-primary mr-20">
						<text class="text-size-xs">￥</text>
						<text>{{ totalPrice }}</text>
					</view>
					<tm-button theme="primary" :round="10" size="s" @click="jumpCreateOrder">去结算</tm-button>
				</view>
			</view>
		</view>

		<!-- 提示modal -->
		<tm-dialog v-model="isShowDelModal" content="您确认要移除该商品？" @confirm="handleDelConfirm" theme="split"></tm-dialog>
		<tm-message ref="toast"></tm-message>
		<!-- 空数据 -->
		<template v-if="!list.length && !isLoading">
			<tm-empty color="black" label="空空如也,去选购一下吧!" icon="../../static/images/empty/cart.png" :size="600">
				<tm-button theme="primary" @click='jumpGoodsAll'>去选购</tm-button>
			</tm-empty>
		</template>
	</view>
</template>

<script>
	import {
		getCartList,
		removeCartInfo
	} from "../../api/cart.js"
	export default {
		data() {
			return {
				cartInfoId: null,
				checkAll: true,
				isShowDelModal: false,
				isLoading: true,
				list: []
			};
		},
		onShow() {
			this.fetchData()
		},
		methods: {
			async fetchData() {
				const res = await getCartList();
				this.list = res.map(item => {
					return {
						...item,
						checked: true,
					}
				})
				this.isLoading = false;
				const cartCount = res.length;
				if (cartCount) {
					uni.setTabBarBadge({
						index: 2,
						text: `${cartCount}`
					})
				}

			},
			checkboxChange() {

			},
			// 点击删除
			handleClickDel(id) {
				this.cartInfoId = id;
				this.isShowDelModal = true;
			},
			// 确认删除
			async handleDelConfirm() {
				await removeCartInfo(this.cartInfoId)
				this.$refs.toast.show({
					model: 'success',
					label: '删除成功'
				})
				this.fetchData();
			},
			// 取消删除
			handleCancelDel() {
				this.isShowDelModal = false;
			},
			// 跳转创建订单
			jumpCreateOrder() {
				const selectCartList = this.list.filter(item => item.checked);
				uni.setStorageSync('selectCartList', selectCartList);
				uni.navigateTo({
					url: '/pages/create-order/create-order',
				});
			},
			// 复选组改变
			groupCheckboxChange(values) {
				if (values.length && (this.list.length === values.length)) {
					this.checkAll = true;
				} else {
					if (this.list.length) this.checkAll = false;
				}
			},
			// 全选改变
			changeCheAll() {
				this.list.forEach(item => item.checked = this.checkAll)
			},
			// 跳转所有商品
			jumpGoodsAll() {
				uni.navigateTo({
					url: '/pages/goods-all/goods-all'
				})
			}
		},
		computed: {
			// 合计
			totalPrice() {
				return this.list.filter(item => item.checked).reduce((pre, next) => {
					return pre + next.price
				}, 0)
			}
		}
	}
</script>

<style lang="scss">
	.cart-page {
		//#ifdef H5
		min-height: calc(100vh - 94px);
		//#endif
		//#ifdef MP
		min-height: calc(100vh - 54px);
		//#endif

		background-color: #f6f6f6;

		.align-items {
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

		.cart-action-bar {
			//#ifdef H5
			bottom: 44px;
			//#endif
			//#ifdef MP
			bottom: 0;
			//#endif
		}
	}
</style>
