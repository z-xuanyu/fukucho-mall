<template>
	<view class="cunpon">
		<tm-tabs v-model="activeIndex"  :list="list" ></tm-tabs>
		<view class="mt-50">
			<tm-empty label="暂无优惠券可使用哦~" :size="500" icon="../../../static/images/empty/coupon.png"></tm-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				list:[ '未使用','已使用/过期',],
			};
		}
	}
</script>

<style lang="scss" scoped>
.cunpon {
	min-height: calc(100vh - 44px);
	background-color: $bg-color-grey;
}
</style>
