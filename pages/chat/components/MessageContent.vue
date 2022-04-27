<template>
	<view class="message-content">
		<scroll-view scroll-y="true" :scroll-top="scrollTop" scroll-with-animation="true"
			:style="{ height: `calc(100vh - ${parseInt(sendBoxHeight) + 44}px)` }">
			<!-- 聊天内容列表-->
			<view class="list" ref="messageContent">
				<!-- 发送商品给客服 -->
				<tm-sticky :top="0">
					<view class="flex product-info white pa-30 shadow-10" v-if="isSendGoods">
						<image src="https://picsum.photos/300?id=2" mode=""></image>
						<view class="flex-1 ml-20">
							<view class="text-overflow-2 text-weight-b">
								内部已经计算了宽高信息,因此你可以不用设定宽高,自动计算父组件宽度为图片宽度
							</view>
							<view class="flex flex-between mt-20 items-center">
								<view>
									<text class="text-orange text-weight-b text-size-xl">￥99.00</text>
									<text class="text-grey ml-10 text-delete">￥199.00</text>
								</view>
								<tm-button theme="primary" :round="24" size="m">发送客服</tm-button>
							</view>
						</view>
					</view>
				</tm-sticky>
				<view class="item my-30 px-20" v-for="(item, index) in messageList" :key="index + 'msg'">
					<view class="time py-20 text-align-center text-size-s text-grey" v-if="false">
						{{ item.createdAt }}
					</view>
					<view class="flex" :class="item.isMe ? 'flex-reverse': ''">
						<tm-avatar :size="80" :src="item.user.avatar" />
						<view class="msg-box shadow-24 pa-20 round-b-4 mt-10 flex items-center"
							:class="item.isMe ? 'flex-reverse mr-20 round-tl-4 primary': 'ml-20 round-tr-4 white'">
							<!-- 文本类型 -->
							<template v-if="item.messageType == 1">
								{{ item.content }}
							</template>
							<!-- 推送山沟 -->
							<template v-if="item.messageType == 5">
								<view class="goods-info">
									<image
										src="https://images.pexels.com/photos/5029929/pexels-photo-5029929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
										mode=""></image>
								</view>
							</template>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'MessageContent',
		props: {
			sendBoxHeight: {
				type: String,
				default: '0px',
			},
			messageList: {
				type: Array,
				default: [],
			}
		},
		data() {
			return {
				isSendGoods: true,
				scrollTop: 0,
			}
		},
		watch: {
			messageList: {
				deep: true,
				handler() {
					this.$nextTick(() => {
						this.scrollTop = this.$refs.messageContent.$el.scrollHeight;
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message-content {
		width: 100vw;
		// overflow-y: auto;

		.product-info {
			image {
				width: 180rpx;
				height: 180rpx;
			}
		}

		.list {
			.msg-box {
				max-width: 300rpx;

				.goods-info {
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
