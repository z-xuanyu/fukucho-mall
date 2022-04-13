<template>
	<view class="mx-20 my-n5 shadow-24 py-24 round-6 white"
		:class="[$tm.vx.state().tmVuetify.black?'grey-darken-5':'']">
		<tm-row>
			<tm-col :grid="2" :maxCol="10" v-for="(item,index) in list" :key="index">
				<view>
					<tm-images :previmage="false" :width="70" :src="item.icon"></tm-images>
					<view class="text-size-s py-12 text-grey-darken-1">{{item.text}}</view>
				</view>
			</tm-col>
		</tm-row>
	</view>
</template>

<script>
	export default {
		name: "NavIconGrid",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {};
		}
	}
</script>

<style lang="scss">
	.scroll-view {
		white-space: nowrap;

		.list {
			.item {
				image {
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
</style>
