<template>
	<view class="flex flex-between user-info white pa-20">
		<view class="flex">
			<image src="../../../static/images/logo.png" mode=""></image>
			<view class="info ml-20">
				<view class="name">
					阿宇
				</view>
				<view class="tips text-size-xs text-grey mt-10">
					编辑个人简介
				</view>
			</view>
		</view>
		<view class="flex items-center">
			<tm-icons :size="35" name="icon-qrcode"></tm-icons>
			<tm-icons :size="35" name="icon-cog" class="ml-20"></tm-icons>
			<tm-icons :size="38" name="icon-bell" class="ml-20"></tm-icons>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.user-info {
		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}
</style>
