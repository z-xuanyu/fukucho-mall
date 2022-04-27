<template>
	<view class="home-page">
		<!-- 顶部状态栏 -->
		<tm-sticky :top="0">
			<SearchBar />
		</tm-sticky>

		<view class="bg-white my-20">
			<!-- banner -->
			<tm-swiper :round="6" :margin="20" :autoplay="false" :height="420" dot-model="round" dot-direction="right"
				:indicator-dots="true" :list="banners"></tm-swiper>
			<!-- 图标导航 -->
			<NavIconGrid :list="navigations" />
		</view>
		<view class="ma-20">
			<SwiperTips />
		</view>
		<!-- 限时秒杀 -->
		<SeckillGoodsCard :list="hotProducts" />
		<!-- 直播间 -->
		<LiveRoomCard />
		<!-- 优惠券 -->
		<CouponsCard />
		<!-- 促销精品商品 -->
		<PromotionGoods :list="hotProducts" />
		<view class="ma-10 mt-10">
			<GoodsList :list="hotProducts" />
		</view>
	</view>
</template>

<script>
	import SearchBar from "./components/SearchBar.vue";
	import NavIconGrid from "../../components/NavIconGrid.vue"
	import GoodsList from "../../components/GoodsList.vue"
	import SwiperTips from "./components/SwiperTips.vue"
	import SeckillGoodsCard from "./components/SeckillGoodsCard.vue"
	import LiveRoomCard from "./components/LiveRoomCard.vue"
	import CouponsCard from "./components/CouponsCard.vue"
	import PromotionGoods from "./components/PromotionGoods.vue"
	
	import {
		getHomeData
	} from "../../api/home.js"
	export default {
		components: {
			SearchBar,
			NavIconGrid,
			GoodsList,
			SwiperTips,
			SeckillGoodsCard,
			LiveRoomCard,
			CouponsCard,
			PromotionGoods
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
				navigations: [],
				hotProducts: [],
			}
		},
		methods: {
			async fatchData() {
				const result = await getHomeData();
				this.banners = result.banners.map(item => item.image);
				this.hotProducts = result.hotProducts;
				this.navigations = result.navigations.map(item => ({
					text: item.name,
					icon: item.pic,
					url: item.pagePath
				}));
			},
			iconClick() {}
		}
	}
</script>
<style lang="scss">
	.home-page {
		background-color: #f6f6f6;
	}
</style>
