<template>
	<view class="histroy-page p-2">
		<view class="bg-white rounded p-2 mb-2 flex" v-for="item in viewsHistory" :key="item.productId._id" @click="onGoodsInfo(item.productId._id)">
			<view class="goods-img overflow-hidden">
				<image :src="item.productId.pic" mode="widthFix"></image>
			</view>
			<view class="info flex flex-column justify-between">
				<view class="text-2xl">
					<u--text :lines="2" :text="item.productId.title"></u--text>
				</view>
				<view class="flex justify-between mb-2">
					<view class="text-color-primary">
						<text class="text-2xl">￥</text>
						<text>{{ item.productId.price }}</text>
					</view>
					<view class="flex items-center">
						<view class="text-2xl text-color-gray">
							<text>浏览</text>
							<text>99</text>
						</view>
						<u-icon class="ml-2" name="trash" color="#CCCCCC" size="45"></u-icon>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getUserViewsHistory } from "../../../api/user.js"
	export default {
		data() {
			return {
				viewsHistory: []
			};
		},
		created() {
			this.fetchViewsHistory();
		},
		methods: {
			onGoodsInfo(id) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`,
				});
			},
			
			// 获取浏览记录数据
			async fetchViewsHistory() {
				const res = await getUserViewsHistory();
				this.viewsHistory = res;
			},
		}
	}
</script>

<style lang="scss">
.histroy-page{
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
