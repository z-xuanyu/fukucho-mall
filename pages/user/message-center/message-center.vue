<template>
	<view class="message-center">
		<view class="white pa-20 pb-30">
			<text class="primary round-20 px-18 py-6">站内消息</text>
			<text class="mx-50">客服消息</text>
		</view>
		<view v-for="item in 3" :key="item">
			<tm-sheet>
				<view class="white flex">
					<view class="primary news-box-icon rounded flex items-center flex-center">
						<tm-icons name="myicon-bell" color="white" :size="50"></tm-icons>
					</view>
					<view class="flex-1 ml-20">
						<view class="flex flex-between">
							<text>提醒付款通知</text>
							<text class="text-size-s text-grey">1小时前</text>
						</view>
						<view class="text-overflow-1 mt-20 text-grey">
							您有未付款订单。请及时付款！您有未付款订单。请及时付款！您有未付款订单。请及时付款！您有未付款订单。请及时付款！
						</view>
					</view>
				</view>
			</tm-sheet>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.message-center {
	background-color: #F6F6F6;
	min-height: calc(100vh - 44px);
	.news-box-icon{
		width: 100rpx;
		height: 100rpx;
	}
}
</style>
