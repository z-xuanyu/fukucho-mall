<template>
	<view class="home-page">
		<u-sticky :customNavHeight="0">
			<!-- 顶部状态栏 -->
			<u-navbar :fixed="false" title="FUKUCHO" @rightClick="rightClick" :autoBack="true">
				<template #left>
					<u-icon name="map" size="45"></u-icon>
				</template>
				<template #right>
					<u-icon name="chat" size="45"></u-icon>
					<u-icon name="bell" size="45"></u-icon>
				</template>
			</u-navbar>
			<!--搜索 -->
			<SearchBar />
			<!-- tabs -->
			<!-- <view class="bg-white">
				<u-tabs :list="tabList" :scrollable="false" lineColor="#000" lineWidth="40" lineHeight="5"
					@click="handleClickTab"></u-tabs>
			</view> -->
		</u-sticky>
		<view class="bg-white m-2">
			<!-- banner -->
			<BannerSwiper :list="banners" heigth="600" />
			<!-- 图标导航 -->
			<NavIconGrid />
		</view>
		<GoodsCard :list="hotProducts" />
		<view class="m-2 mt-3">
			<GoodsList :list="hotProducts" />
		</view>
		<view class="m-2 mt-3">
			<GoodsList :list="hotProducts" />
		</view>
		<u-back-top :scroll-top="scrollTop" bottom="200" right="50"></u-back-top>
	</view>
</template>

<script>
	import SearchBar from "./components/SearchBar.vue";
	import BannerSwiper from "../../components/BannerSwiper.vue"
	import NavIconGrid from "../../components/NavIconGrid.vue"
	import GoodsCard from "../../components/GoodsCard.vue"
	import GoodsList from "../../components/GoodsList.vue"
	import { getHomeData } from "../../api/home.js"
	export default {
		components: {
			SearchBar,
			BannerSwiper,
			NavIconGrid,
			GoodsCard,
			GoodsList
		},
		onPageScroll(e){
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
			async fatchData(){
			 const result = await getHomeData();
			 this.banners = result.banners.map(item=> item.image);
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
