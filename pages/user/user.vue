<template>
	<view  class="user-page">
		<u-sticky :customNavHeight="0">
			<BaseUserInfo />
		</u-sticky>
		<!-- 用户功能菜单 -->
		<UserMeansCard />
		<UserCellGroup />
		<view class="p-2">
			<GoodsList :list="hotGoods" />
		</view>
	</view>
</template>

<script>
	import BaseUserInfo from "./components/BaseUserInfo.vue"
	import UserMeansCard from "./components/UserMeansCard.vue"
	import UserCellGroup from "./components/UserCellGroup.vue"
	import GoodsList from "../../components/GoodsList.vue"
	import { getHotGoods } from "../../api/goods.js"
	export default {
		components: {
			BaseUserInfo,
			UserMeansCard,
			UserCellGroup,
			GoodsList
		},
		data() {
			return {
				hotGoods:[],
				viewsHistory: []
			};
		},
		created() {
			this.fetchHotProduct();
		},
		methods: {
			async fetchHotProduct() {
				const res = await getHotGoods();
				this.hotGoods = res;
			},
		}
	}
</script>

<style lang="scss">
.user-page{
	background-color: #f6f6f6;
	min-height: 100vh;
}
</style>
