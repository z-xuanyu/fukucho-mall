<template>
	<tm-sheet color="white" :margin="[20,24]" :shadow="24">
		<view class="flex flex-between items-center">
			<view class="flex items-center">
				<tm-icons :size="32" name="icon-flag-fill"></tm-icons>
				<text class="text-weight-b text-size-xl mx-20">促销精品</text>
				<text class="text-grey">诚意推荐品质商品</text>
			</view>
			<text class="text-grey">更多</text>
		</view>
		<view class="mt-20 list">
			<view class="flex list-item py-20" v-for="(item, index) in list" :key="index">
				<image :src="item.pic" mode="aspectFill"></image>
				<view class="flex-1 flex-col flex-between">
					<view class="title text-overflow-2">
						{{ item.title }}
					</view>
					<view class="text-primary fulled pb-10">
						<text>￥</text>
						<text class="text-size-xl text-weight-b">{{ item.price }}</text>
					</view>
				</view>
			</view>
		</view>
	</tm-sheet>
</template>

<script>
	export default {
		name: 'PromotionGoods',
		props: {
			list: {
				type: Array | Object,
				default: []
			}
		},
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
	.list-item{
		border-bottom: 1rpx solid #EDEDED;
		&:last-child {
			border: none;
		}
		image{
			width: 200rpx;
			height: 200rpx;
		}
	}
</style>
