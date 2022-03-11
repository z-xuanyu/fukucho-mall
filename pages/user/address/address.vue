<template>
	<view class="address-page">
		<view class="pa-20">
			<view class="pa-30 white round-2 mb-20" v-for="item in 3" :key="item">
				<view class="title ml-20">
					广东省-广州市-天河区 龙洞梁婆街6号
				</view>
				<view class="text-size-xs mt-20 ml-20">
					<text>阿宇</text>
					<text class="ml-20">15800021934</text>
				</view>
				<view class="border-b mt-15"></view>
				<view class="flex flex-between">
					<view class="flex items-center">
						<tm-radio :size="26" border-color="red" v-model="checked" label="默认地址"
											model="round" round="rounded"></tm-radio>
					</view>
					<view class="flex">
						<tm-icons :size="35" color="grey" name="icon-edit"></tm-icons>
						<tm-icons :size="35" color="grey" class="ml-20" name="icon-delete"></tm-icons>
					</view>
				</view>
			</view>
		</view>
		<view class="fixed b-0 l-0 r-0 pa-20">
			<tm-button :round="24" block @click="jumpAddAdress">添加地址</tm-button>
		</view>
	</view>
</template>

<script>
	import { getUserAddressList } from "../../../api/user.js"
	export default {
		name: 'UserAddress',
		data() {
			return {
				checked: false,
				list: []
			};
		},
		created() {
			
		},
		methods: {
			async fetchData() {
				const res = await getUserAddressList();
				this.list = res;
			},
			jumpAddAdress(){
				uni.navigateTo({
					url: "/pages/user/address/address-edit?type=add",
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
