<template>
	<tm-sheet color="white" :margin="[20,24]" :shadow="24">
		<view class="flex flex-between items-center">
			<view class="title">
				<text class="text-size-xl text-weight-b">优惠券</text>
				<text class="text-grey ml-20">领取今日好卷</text>
			</view>
			<view class="more flex items-center">
				<text class="text-grey mr-20">更多</text>
				<tm-icons :size="20" color="grey" name="icon-angle-right"></tm-icons>
			</view>
		</view>
		<view class="content mt-18">
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="0">
				<view class="flex">
					<view v-for="item in 4" :key="item" class="pr-15 fulled">
						<view class="coupon-item">
							<tm-coupon :hdata="d_2" color="orange"></tm-coupon>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</tm-sheet>
</template>

<script>
	export default {
		name: 'CouponsCard',
		data() {
			return {
				d_2: {
					sale: '90',
					saleSplit: '',
					saleLable: '积分获得',
					btnText: '领取券',
					suffix: '.6元'
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
.coupon-item{
	width: 320rpx;
}
</style>
