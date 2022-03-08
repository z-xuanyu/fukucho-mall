<template>
	<view class="cart-page px-2">
		<u-checkbox-group v-model="checkboxValue1" placement="column" @change="checkboxChange">
			<view class="mt-2 rounded overflow-hidden" v-for="item in 4" :key="item">
				<u-swipe-action>
					<u-swipe-action-item :options="swipeActionOptions" @click="handleClickDel">
						<view class="swipe-action">
							<view class="swipe-action__content w-full">
								<view class="flex items-center rounded">
									<view style="width: 50rpx;" class="ml-2">
										<u-checkbox activeColor="#f56c6c" shape="circle" size="40" />
									</view>
									<view class="goods-info p-2">
										<view class="flex">
											<image
												src="https://img12.360buyimg.com/seckillcms/s140x140_jfs/t1/202200/26/8685/97496/6152cb3bE89f521f2/8d4dc1641d1fc2ea.jpg"
												mode="aspectFit"></image>
											<view class="right">
												<u--text :lines="2" text="凤凰（Phoenix）儿童自行车山地车男女学生脚踏车6-12岁童车 霸道 白蓝色 18寸">
												</u--text>
												<view class="my-3 text-2xl text-color-gray">
													黑色
												</view>
												<view class="flex items-center justify-between">
													<view class="price text-color-primary">
														<text class="text-2xl">￥</text><text>598</text>
													</view>
													<u-number-box v-model="value">
														<view slot="minus" class="minus">
															<u-icon name="minus" size="12"></u-icon>
														</view>
														<text slot="input" style="width: 50rpx;text-align: center;"
															class="input">{{value}}</text>
														<view slot="plus" class="plus">
															<u-icon name="plus" color="#FFFFFF" size="12"></u-icon>
														</view>
													</u-number-box>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</u-swipe-action-item>
				</u-swipe-action>
			</view>
		</u-checkbox-group>
		<!-- 操作 -->
		<view class="fixed right-0 left-0 bg-white z-10" style="bottom: 100rpx;">
			<view class="flex justify-between px-2 py-3">
				<u-checkbox-group>
					<u-checkbox activeColor="#f56c6c" shape="circle" size="40" />
				</u-checkbox-group>

				<view class="flex">
					<view class="price text-color-primary mr-2">
						<text class="text-2xl">￥</text>
						<text>289</text>
					</view>
					<u-button @click="jumpCreateOrder" class="buy-btn" type="error" shape="circle" size="mini" text="去结算"></u-button>
				</view>
			</view>
		</view>
		
		<!-- modal -->
		<u-modal :show="isShowDelModal" @cancel="handleCancelDel" showCancelButton @confirm="handleDelConfirm" :asyncClose="true" content='您确认要移除该商品?'></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
				isShowDelModal: false,
				swipeActionOptions: [{
					text: '删除',
					style: {
						backgroundColor: '#f56c6c'
					}
				}],
				checkboxValue1: [],
				checkboxList1: [{
						name: '苹果',
						disabled: false
					},
					{
						name: '香蕉',
						disabled: false
					},
					{
						name: '橙子',
						disabled: false
					}
				],
			};
		},
		methods: {
			checkboxChange() {

			},
			handleClickDel(){
				this.isShowDelModal = true;
			},
			// 确认删除
			handleDelConfirm(){
				setTimeout(()=>{
					this.isShowDelModal = false;
				},2000)
				
			},
			// 取消删除
			handleCancelDel(){
				this.isShowDelModal = false;
			},
			// 跳转创建订单
			jumpCreateOrder(){
				uni.navigateTo({
					url: '/pages/create-order/create-order',
				});
			}
		}
	}
</script>

<style lang="scss">
	.cart-page {
		min-height: 90vh;
		background-color: #f6f6f6;

		.goods-info {
			margin-left: 20rpx;
			flex: 1;

			image {
				margin-right: 20rpx;
				width: 120rpx;
				height: 110px;
			}

			.right {
				flex: 1;
			}

			.minus {
				width: 40rpx;
				height: 40rpx;
				border-width: 1rpx;
				border-color: #BBBCBE;
				border-style: solid;
				border-top-left-radius: 100rpx;
				border-top-right-radius: 100rpx;
				border-bottom-left-radius: 100rpx;
				border-bottom-right-radius: 100rpx;
				@include flex;
				justify-content: center;
				align-items: center;
			}

			.plus {
				width: 40rpx;
				height: 40rpx;
				background-color: #ff6a6c;
				border-radius: 50%;
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				justify-content: center;
				align-items: center;
			}
		}
		.buy-btn{
			padding: 25rpx 20rpx;
		}
	}
	
</style>
