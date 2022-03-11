<template>
	<view class="home-page">
		<!-- 顶部状态栏 -->
		<tm-sticky :top="0">
			<tm-menubars title="FUKUCHO" color="white">
				<template #left>
					<tm-icons size="45" class="ml-20" color="grey" name="icon-position"></tm-icons>
				</template>
				<template #right>
					<tm-icons size="40" color="grey" name="icon-aliwangwang"></tm-icons>
					<tm-icons size="45" class="mx-20" color="grey" name="icon-bell"></tm-icons>
				</template>
			</tm-menubars>
			<!--搜索 -->
			<SearchBar />
		</tm-sticky>

		<view class="bg-white m-2">
			<!-- banner -->
			<BannerSwiper :list="banners" heigth="600" />
			<!-- 图标导航 -->
			<tm-sheet :margin="[20,20]" :padding="[32,0]" :round="2" :shadow="24">
				<NavIconGrid />
			</tm-sheet>
		</view>
		<GoodsCard :list="hotProducts" />
		<view class="ma-10 mt-30">
			<GoodsList :list="hotProducts" />
		</view>
		<view class="ma-10 mt-30">
			<GoodsList :list="hotProducts" />
		</view>
	</view>
</template>

<script>
	import SearchBar from "./components/SearchBar.vue";

	import BannerSwiper from "../../components/BannerSwiper.vue"
	import NavIconGrid from "../../components/NavIconGrid.vue"
	import GoodsCard from "../../components/GoodsCard.vue"
	import GoodsList from "../../components/GoodsList.vue"
	import {
		getHomeData
	} from "../../api/home.js"
	export default {
		components: {
			SearchBar,
			BannerSwiper,
			NavIconGrid,
			GoodsCard,
			GoodsList
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		created() {
			this.fatchData();
		},
		data() {
			return {
				scrollTop: 0,
				banners: [],
				hotProducts: [],
				tabList: [{
						name: '精选'
					},
					{
						name: '护肤'
					},
					{
						name: '彩妆'
					},
					{
						name: '香水'
					},
				]

			}
		},
		methods: {
			async fatchData() {
				const result = await getHomeData();
				this.banners = result.banners.map(item => item.image);
				this.hotProducts = result.hotProducts;
			},
			rightClick() {

			},
			handleClickTab() {

			}
		}
	}
</script>
<style lang="scss">
	.home-page {
		background-color: #f6f6f6;
	}
</style>
