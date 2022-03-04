<template>
	<view>
		<u-swiper :height="heigth" indicator :list="bannerList" @change="handleChange" @click="handleClick"></u-swiper>
	</view>
</template>

<script>
	export default {
		name: "BannerSwiper",
		props: {
			heigth: {
				type: String | Number,
				default: 400
			}
		},
		data() {
			return {
				bannerList: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
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
