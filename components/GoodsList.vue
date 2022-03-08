<template>
	<view class="goods-list">
		<view class="title px-2 text-3xl mb-1" v-if="showTitle">
			{{ title }}
		</view>
		<view class="flex flex-wrap">
			<view class="w-50 p-1" v-for="item in list" :key="item._id" @click="jumpDetail(item._id)">
				<view class="bg-white goods-item pb-2 rounded">
					<image class="w-full" :src="item.pic" mode=""></image>
					<view class="px-2">
						<u--text :lines="2" :text="item.title"></u--text>
					</view>
					<view class="mt-2 px-1 text-color-primary">
						<text class="text-2xl">￥</text><text>{{ item.price }}</text>
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
		.goods-item{
			height: 500rpx;
		}
	}
</style>
