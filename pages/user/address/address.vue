<template>
	<view class="address-page">
		<view class="p-2">
			<view class="p-3 bg-white rounded mb-2" v-for="item in 3" :key="item">
				<view class="title">
					广东省-广州市-天河区 龙洞梁婆街6号
				</view>
				<view class="text-2xl mt-2">
					<text>阿宇</text>
					<text class="ml-2">15800021934</text>
				</view>
				<view class="border-b mt-3"></view>
				<view class="flex justify-between mt-1 py-2">
					<view class="flex items-center">
						<u-radio-group>
							<u-radio size="30" activeColor="#f56c6c" shape="circle" />
						</u-radio-group>

						<text class="text-2xl text-color-primary">默认地址</text>
					</view>
					<view class="flex">
						<u-icon name="edit-pen" size="42"></u-icon>
						<u-icon class="ml-2" name="trash" size="42"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<view class="fixed bottom-0 left-0 right-0 p-2">
			<u-button type="error" shape="circle" text="添加地址"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UserAddress',
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.address-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
