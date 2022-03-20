<template>
	<view class="px-1 white py-10" @click="junmSearch">
		<tm-search v-model="value"  bgColor="white" color="white" placeholder="搜索关键词" insertColor="grey" :round="25" :show-right="false"></tm-search>
	</view>
</template>

<script>
	export default {
		name:'SearchBar',
		data() {
			return {
				value: ''
			}
		},
		methods: {
			junmSearch(){
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style>
</style>
