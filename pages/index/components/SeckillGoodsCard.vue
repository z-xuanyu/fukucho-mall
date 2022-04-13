<template>
	<tm-sheet color="white" :margin="[20,24]" :shadow="24">
		<view class="flex flex-between items-center">
			<view class="flex items-center">
				<tm-icons :size="40" name="icon-diagnose"></tm-icons>
				<text class="text-weight-b mx-20">限时秒杀</text>
				<tm-countdown :time="24*60*60*1000">
					<template v-slot:default=" { timeData } ">
						<view class="flex-center">
							<template v-for="(item,key) in timeData.data">
								<view v-if="!['day', 'millisecond'].includes(key)" :key="key" class="px-5 primary  mr-10 round-1"
									:class="$tm.vx.state().tmVuetify.black?'bk':''">
									{{item}}
								</view>
							</template>
						</view>
					</template>
				</tm-countdown>
			</view>
			<text class="text-grey">更多</text>
		</view>
		<view class="mt-20">
			<scroll-view class="scroll-view" scroll-x="true" scroll-left="120">
				<view class="list flex px-10">
					<view v-for="(item, index) in list" :key="item._id" class="pa-10 fulled">
						<view class="white text-center p-20 item">
							<view class="relative">
								<image  :src="item.pic" mode=""></image>
								<view class="absolute b-0">
									<tm-tags size="xs" model="outlined">1.2折起</tm-tags>
								</view>
							</view>
							<view class="text-size-xs overflow fulled">
								<view class="text-overflow-2 px-10">{{ item.title }}</view>
							</view>
							<view class="price text-primary text-left mt-10 pa-10">
								<tm-tags size="s" model="fill">抢</tm-tags>
								<text class="text-size-xs">￥</text><text>{{ item.price }}</text>
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
		name: 'SeckillGoodsCard',
		props: {
			list: {
				type: Array | Object,
				default: []
			}
		},
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	.scroll-view{
		white-space: nowrap;
		.list{
			.item{
				width: 220rpx;
				image{
					width: 200rpx;
					height: 200rpx;
				}
			}
		}
	}
</style>
