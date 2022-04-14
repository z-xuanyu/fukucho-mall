<template>
	<view class="histroy-page pa-20">
		<view class="white round-4 shadow-10 pa-20 mb-20 flex" v-for="item in viewsHistory" :key="item.productId._id" @click="onGoodsInfo(item.productId._id)">
			<view class="goods-img overflow">
				<image :src="item.productId.pic" mode="widthFix"></image>
			</view>
			<view class="info flex flex-col flex-between">
				<view class="text-size-xs text-overflow-2">
					{{ item.productId.title }}
				</view>
				<view class="flex flex-between mb-20 fulled">
					<view class="text-primary">
						<text class="text-size-xs">￥</text>
						<text class="text-weight-b">{{ item.productId.price }}</text>
					</view>
					<view class="flex items-center">
						<view class="text-size-xs text-grey">
							<text>浏览</text>
							<text>99</text>
						</view>
						<tm-icons :size="30" name="icon-delete" color="grey" class="ml-30"></tm-icons>
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
