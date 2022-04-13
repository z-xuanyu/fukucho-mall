<template>
	<view class="user-page">
		<BaseUserInfo />
		<!-- 用户功能菜单 -->
		<UserMeansCard />
		<UserCellGroup ref="userCellRef" />
	</view>
</template>

<script>
	import BaseUserInfo from "./components/BaseUserInfo.vue"
	import UserMeansCard from "./components/UserMeansCard.vue"
	import UserCellGroup from "./components/UserCellGroup.vue"
	export default {
		components: {
			BaseUserInfo,
			UserMeansCard,
			UserCellGroup,
		},
		data() {
			return {
				hotGoods: [],
			};
		},
		onShow() {
			// 刷新纪录列表
			this.$nextTick(() => {
				this.$refs.userCellRef.fetchViewsHistory()
			})
		},
		methods: {}
	}
</script>

<style lang="scss">
	.user-page {
		background-color: #f6f6f6;
		min-height: 100vh;
	}
</style>
