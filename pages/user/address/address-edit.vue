<template>
	<view class="addres-edite-page p-2">
		<view class="rounded flex items-center p-2 mb-2 bg-white">
			<text class="text-2xl mx-2 mr-4">收货人</text>
			<u--input placeholder="请输入收货人姓名" border="none"></u--input>
		</view>
		
		<view class="rounded flex items-center mb-2 p-2 bg-white">
			<text class="text-2xl mx-2 mr-4">手机号</text>
			<u--input placeholder="请输入手机号码" border="none"></u--input>
		</view>
		
		<view class="rounded flex items-center mb-2 p-2 py-3 bg-white">
			<text class="text-2xl mx-2 mr-4">所在地区</text>
			<text class="text-2xl">请选择地址</text>
		</view>
		
		<view class="rounded items-center mb-2 p-2 bg-white">
			<text class="text-2xl mx-2 mr-4">详细地址</text>
			<view class="mt-2">
				<u--textarea height="150" placeholder="请输入详细地址" ></u--textarea>
			</view>
		</view>
		
		<view class="rounded flex items-center justify-between mb-2 p-2  py-3 bg-white">
			<text class="text-2xl mx-2 mr-4">设为默认</text>
			<u-switch v-model="value" size="38" activeColor="#f56c6c"></u-switch>
		</view>
		
		<view class="mt-8">
			<u-button type="error" shape="circle" text="提交"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: false,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.addres-edite-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
