<template>
	<view  class="user-page">
		<u-sticky :customNavHeight="0">
			<BaseUserInfo />
		</u-sticky>
		<!-- 用户功能菜单 -->
		<UserMeansCard />
		<UserCellGroup />
		<view class="p-2">
			<GoodsList />
		</view>
	</view>
</template>

<script>
	import BaseUserInfo from "./components/BaseUserInfo.vue"
	import UserMeansCard from "./components/UserMeansCard.vue"
	import UserCellGroup from "./components/UserCellGroup.vue"
	import GoodsList from "../../components/GoodsList.vue"
	export default {
		components: {
			BaseUserInfo,
			UserMeansCard,
			UserCellGroup,
			GoodsList
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.user-page{
	background-color: #f6f6f6;
	min-height: 100vh;
}
</style>
