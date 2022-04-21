<template>
	<view class="comment pa-20">
		<view class="comment__tabs white px-20 py-30 round-4 shadow-5">
			<text class="mx-20 border-grey-lighten-1-a-1 px-20 py-6 round-10 text-size-s text-primary text-weight-b">全部(1)</text>
			<text class="mx-20 border-grey-lighten-1-a-1 px-20 py-6 round-10 text-size-s">好评(1)</text>
			<text class="mx-20 border-grey-lighten-1-a-1 px-20 py-6 round-10 text-size-s">中评(0)</text>
			<text class="mx-20 border-grey-lighten-1-a-1 px-20 py-6 round-10 text-size-s">差评(0)</text>
		</view>
		<view class="comment__list">
			<view class="comment__list-item white pa-20 my-20 round-4 shadow-5 flex" v-for="item in 3" :key="item">
				<view class="avatar rounded">
					<image src="https://img0.baidu.com/it/u=1942253063,3807598283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" mode=""></image>
				</view>
				<view class="content flex-1 ml-20">
					<view class="flex items-center">
						<text class="text-grey mr-20">xuanyu</text>
						<tm-rate v-model="rate" disabled :size="28"></tm-rate>
						<text class="text-grey ml-50">2022-03-12</text>
					</view>
					<view class="content py-20">
						我们常常需要在输入框的前方添加提示，后方添加按钮我们常常需要在输入框的前方添加提示，后方添加按钮
					</view>
					<view class="comment-imgs">
						<image src="https://t13.baidu.com/it/u=1736884658,2015524463&fm=224&app=112&size=h200&n=0&f=JPEG&fmt=auto?sec=1650646800&t=dc8780bd56caccc8256a561879fe3a79" mode=""></image>
					</view>
					<text class="text-grey">码数1</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rate: 5
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.comment {
	background-color: #f6f6f6;
	height: calc(100vh - 44px);
	.avatar{
		width: 80rpx;
		height: 80rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.comment-imgs{
		image {
			width: 150rpx;
			height: 150rpx;
		}
	}
}
</style>
