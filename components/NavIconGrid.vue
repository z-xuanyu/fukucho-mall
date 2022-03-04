<template>
	<view>
		<scroll-view class="scroll-view" scroll-x="true">
			<view class="list flex px-2">
				<view v-for="(item, index) in 10" :key="item" class="item p-3">
					<image src="../static/images/tabbar/shopping-active.png" mode=""></image>
					<view class="text-center text-2xl">测试</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"NavIconGrid",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.scroll-view{
	white-space: nowrap;
	.list{
		.item{
			image{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
}
</style>
