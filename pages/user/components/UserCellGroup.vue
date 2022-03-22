<template>
	<view class="bg-white m-2 round-2">

		<tm-sheet :shadow="24" :padding="[0,10]">
			<tm-listitem @click="onHistoryCell"  title="我的足迹" :value="String(viewsHistory.length)" :show-left-icon="true">
				<template v-slot:left>
					<image class="zuji-icon" src="../../../static/images/user/zuji.png" mode=""></image>
				</template>
			</tm-listitem>
			<view class="px-40">
				<scroll-view class="scroll-view" scroll-x="true">
					<view class="list flex px-1">
						<view v-for="item in viewsHistory" :key="item.productId._id">
							<image :src="item.productId.pic" mode=""></image>
						</view>
			
					</view>
				</scroll-view>
			</view>
			<tm-listitem @click="onCollectionCell" title="我的收藏" value="3" :show-left-icon="true">
				<template v-slot:left>
					<tm-icons :size="35" name="icon-star-circle"></tm-icons>
				</template>
			</tm-listitem>
			<tm-listitem @click="onHistoryCell" title="我的钱包" value="充值、余额" :show-left-icon="true">
				<template v-slot:left>
					<image class="zuji-icon" src="../../../static/images/user/qianbao.png" mode=""></image>
				</template>
			</tm-listitem>
			<tm-listitem @click="onAddressCell" title="收货人" :show-left-icon="true">
				<template v-slot:left>
					<tm-icons :size="35" name="icon-position"></tm-icons>
				</template>
			</tm-listitem>
			<tm-listitem @click="onHistoryCell" title="常见问题" :show-left-icon="true">
				<template v-slot:left>
					<tm-icons :size="35" name="icon-question-circle"></tm-icons>
				</template>
			</tm-listitem>
			<tm-listitem @click="onHistoryCell" title="设置" :show-left-icon="true">
				<template v-slot:left>
					<tm-icons :size="35" name="icon-cog"></tm-icons>
				</template>
			</tm-listitem>
		</tm-sheet>
	</view>
</template>

<script>
	import {
		getUserViewsHistory
	} from "../../../api/user.js"
	export default {
		name: 'UserCell',
		data() {
			return {
				viewsHistory: []
			}
		},
		created() {
			this.fetchViewsHistory();
		},
		methods: {
			// 获取浏览记录数据
			async fetchViewsHistory() {
				const res = await getUserViewsHistory();
				this.viewsHistory = res;
			},

			onHistoryCell() {
				uni.navigateTo({
					url: '/pages/user/viewHistory/viewHistory'
				})
			},
			onCollectionCell() {
				uni.navigateTo({
					url: '/pages/user/collection/collection'
				})
			},
			onAddressCell() {
				uni.navigateTo({
					url: '/pages/user/address/address'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-view {
		white-space: nowrap;

		.list {
			image {
				width: 150rpx;
				height: 150rpx;
			}
		}
	}

	.zuji-icon {
		width: 38rpx;
		height: 38rpx;
	}
</style>
