<template>
	<view class="bg-white m-2 rounded">
		<u-cell :border="false" title="我的足迹" :isLink="true"value="10">
			<template #icon>
				<image class="zuji-icon" src="../../../static/images/user/zuji.png" mode=""></image>
			</template>
		</u-cell>
		<!-- 浏览商品列表 -->
		<view class="px-3">
			<scroll-view class="scroll-view" scroll-x="true">
				<view class="list flex px-1">
					<view v-for="item in 10" :key="item">
						<image
							src="https://img11.360buyimg.com/mobilecms/s150x150_jfs/t1/95049/33/2570/130678/5dd2a567E8f4d6e13/1d597ef0cf85be04.jpg!q70.jpg.webp"
							mode=""></image>
					</view>

				</view>
			</scroll-view>
		</view>
		<u-cell :border="false" title="我的收藏" :isLink="true" value="3">
			<template #icon>
				<u-icon name="star-fill" color="#f56c6c" size="38"></u-icon>
			</template>
		</u-cell>
		<u-cell :border="false" title="我的钱包" value="充值、余额、提现" :isLink="true">
			<template #icon>
				<image class="zuji-icon" src="../../../static/images/user/qianbao.png" mode=""></image>
			</template>
		</u-cell>
		<u-cell :border="false" title="收货人" :isLink="true">
			<template #icon>
				<u-icon name="map-fill" color="#9068be" size="38"></u-icon>
			</template>
		</u-cell>
		<u-cell :border="false" title="常见问题" :isLink="true">
			<template #icon>
				<u-icon name="question-circle-fill" color="rgba(247,141,63,1)" size="38"></u-icon>
			</template>
		</u-cell>
		<u-cell :border="false" title="设置" :isLink="true">
			<template #icon>
				<u-icon name="setting-fill" color="#6abe83" size="38"></u-icon>
			</template>
		</u-cell>
	</view>
</template>

<script>
	export default {
		name: 'UserCell',
		data() {
			return {}
		},
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
	.zuji-icon{
		width: 38rpx;
		height: 38rpx;
	}
</style>
