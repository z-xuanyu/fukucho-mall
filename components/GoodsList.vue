<template>
	<view class="goods-list">
		<view class="title px-20 text-size-xl mb-10" v-if="showTitle">
			{{ title }}
		</view>
		<view class="flex flex-wrap">
			<view class="w-50" v-for="item in list" :key="item._id" @click="jumpDetail(item._id)">
				<view class="bg-white ma-10 pa-20 white goods-item">
					<image class="fulled" :src="item.pic" mode=""></image>
					<view class="px-10">
						<view class="text-overflow-2">{{ item.title }}</view>
					</view>
					<view class="mt-20 px-10 text-primary">
						<text class="text-size-xs">￥</text><text>{{ item.price }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"GoodsList",
		props: {
			// 是否显示title
			showTitle: {
				type: Boolean,
				default: true,
			},
			// 标题文字
			title: {
				type: String,
				default: '推荐'
			},
			// 数据列表
			list: {
				type: Array,
				default: ()=> []
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			jumpDetail(id){
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goods-list{
		image{
			height: 360rpx;
		}
		.w-50{
			width: 50%;
		}
		.goods-item{
			height: 500rpx;
		}
	}
</style>
