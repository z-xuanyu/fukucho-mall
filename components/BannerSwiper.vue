<template>
	<view>
		<tm-swiper :autoplay="false" :height="heigth" dot-model="round" dot-direction="right" :indicator-dots="true" :list="list"></tm-swiper>
	</view>
</template>

<script>
	export default {
		name: "BannerSwiper",
		props: {
			heigth: {
				type: String | Number,
				default: 400
			},
			list: {
				type: Array,
				default: ()=> [
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_ac4d1b.jpg?cmsp_timestamp=20210715085643',
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_371dd9.jpg?cmsp_timestamp=20210715085635',
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_004192.jpg?cmsp_timestamp=20210715085648',
				]
			}
		},
		data() {
			return {
				bannerList: [
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_ac4d1b.jpg?cmsp_timestamp=20210715085643',
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_371dd9.jpg?cmsp_timestamp=20210715085635',
					'https://img15.shop-pro.jp/PA01085/674/slideshow/slideshow_img_004192.jpg?cmsp_timestamp=20210715085648',
				]
			};
		},
		methods: {
			handleChange(){
				
			},
			handleClick(){}
		}
	}
</script>

<style lang="scss">

</style>
