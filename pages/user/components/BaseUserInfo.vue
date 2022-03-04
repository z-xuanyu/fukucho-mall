<template>
	<view class="flex justify-between user-info bg-white p-2">
		<view class="flex">
			<image src="../../../static/images/logo.png" mode=""></image>
			<view class="info ml-2">
				<view class="name">
					阿宇
				</view>
				<view class="tips text-2xl mt-1">
					编辑个人简介
				</view>
			</view>
		</view>
		<view class="flex">
			<u-icon name="grid" size="45"></u-icon>
			<u-icon class="ml-2" name="setting" size="40"></u-icon>
			<u-icon class="ml-2" name="bell" size="40"></u-icon>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.user-info{
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}
</style>
