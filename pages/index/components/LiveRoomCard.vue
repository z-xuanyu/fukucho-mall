<template>
	<tm-sheet color="white" :margin="[20,24]" :shadow="24">
		<view class="flex flex-between items-center">
			<view class="title">
				<text class="text-size-xl text-weight-b">直播间</text>
				<text class="text-grey ml-20">精彩内容</text>
			</view>
			<view class="more flex items-center">
				<text class="text-grey mr-20">更多</text>
				<tm-icons :size="20" color="grey" name="icon-angle-right"></tm-icons>
			</view>
		</view>
		<view class="content mt-10">
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="0">
				<view class="flex">
					<view v-for="item in 4" :key="item" class="pa-10 fulled">
						<view class="white text-center p-20 item">
							<view class="relative">
								<image class="round-2"  src="https://qiniu.crmeb.net/attach/2021/12/0c149202112171750318608.jpg" mode="aspectFill"></image>
								<view class="absolute t-10 round-l-24 flex items-center px-20 py-6 round-br-24 l-10 grey-darken-1">
									<tm-icons name="icon-playcircle" :size='35' color="white"></tm-icons>
									<text class="ml-10">回放</text>
								</view>
							</view>
							<view class="title">
								好物尽在直播间
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</tm-sheet>
</template>

<script>
	export default {
		name: 'LiveRoomCard',
		data() {
			return {

			}
		},
	}
</script>

<style scoped lang="scss">
	.content{
		.scroll-view{
			.item{
				width: 250rpx;
			}
			image{
				width: 100%;
				height: 200rpx;
			}
		}
	}
</style>
