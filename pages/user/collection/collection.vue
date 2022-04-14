<template>
	<view class="collection-page pa-20">
		<view class="white round-4 shadow-10 pa-20 mb-20 flex" v-for="item in 3" :key="item">
			<view class="goods-img">
				<image src="https://img20.360buyimg.com/seckillcms/s140x140_jfs/t1/89359/21/21509/129598/62147e87E1942c4f3/c383fb511b9e7368.jpg.webp" mode="widthFix"></image>
			</view>
			<view class="info flex flex-col flex-between">
				<view class="text-size-xs text-overflow-2">
					康惠尔颈椎按摩垫全身按摩床垫肩颈背腰腿部按摩床垫靠椅垫家用 升级版-按摩床垫（带头枕）
				</view>
				<view class="flex flex-between mb-20 fulled">
					<view class="text-primary">
						<text class="text-2xl">￥</text>
						<text>249</text>
					</view>
					<view class="flex items-center">
						<tm-icons :size="35" name="icon-reply" color="grey"></tm-icons>
						<tm-icons :size="35" name="icon-delete" color="grey" class="ml-30"></tm-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.collection-page{
	background-color: #f6f6f6;
	min-height: calc(100vh - 44px);
	.info{
		flex: 1;
	}
	.goods-img{
		width: 200rpx;
		height: 200rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
