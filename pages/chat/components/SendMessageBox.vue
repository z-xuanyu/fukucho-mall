<template>
	<view class="send-box" ref="sendBox">
		<view class="grey-lighten-3 py-20">
			<view class="flex flex-between px-30">
				<tm-icons :size="48" color="grey" name="myicon-photo"></tm-icons>
				<view class="relative flex-1 px-20">
					<tm-input v-model="sendContent" :height="40" :padding='[12,12]' :bg-round="2" placeholder="请输入内容"></tm-input>
					<view class="send-icon rounded flex flex-center items-center absolute r-35" :class="sendContent ? 'primary': 'grey-lighten-1'">
						<tm-icons @click="handleClickSend" :size="20" color="white" name="icon-long-arrow-up"></tm-icons>
					</view>
				</view>
				<tm-icons @click="handleShowEmoji" :size="48" color="grey" name="myicon-emoji"></tm-icons>
			</view>
		</view>
		<!-- 表情 -->
		<view class="emoji-box pa-10 white" v-show="showEmoji">
			<tm-scroll width="100%">
				<tm-row v-for="(emojiRow, rowIndex) in emojiName" :key="rowIndex + 'emojiRow'">
					<tm-col :grid="1" :maxCol="10" v-for="(emojiItem,index) in emojiRow" :key="index + 'emoji'">
						<view>
							<tm-images :previmage="false" :width="50" :src="emojiUrl + emojiMap[emojiItem]"></tm-images>
						</view>
					</tm-col>
				</tm-row>
			</tm-scroll>
		</view>
	</view>
</template>

<script>
	import { emojiUrl, emojiMap,emojiName  } from "@/utils/emojiMap/index.js";
	import { splitArr } from "@/utils/index.js"
	export default {
		name: 'SendMessageBox',
		props: {
			socket: {
				type: Object | null,
				default: null
			}
		},
		data() {
			return {
				emojiName: [],
				emojiMap: {},
				emojiUrl: emojiUrl,
				showEmoji: false,
				sendContent: '',
			}
		},
		created() {
			this.emojiName = Object.freeze(splitArr(emojiName, 6));
			this.emojiMap = Object.freeze(emojiMap);
			this.$nextTick(()=>{
				const sendBoxHeight = window.getComputedStyle(this.$refs.sendBox.$el).height;
				this.$emit('send-box-height', sendBoxHeight);
			})
		},
		methods: {
			handleShowEmoji() {
				this.showEmoji = !this.showEmoji;
				this.$nextTick(()=>{
					const sendBoxHeight = window.getComputedStyle(this.$refs.sendBox.$el).height;
					this.$emit('send-box-height', sendBoxHeight);
				})
			},
			handleClickSend() {
				if(!this.sendContent) return uni.showToast({
					title: '请输入内容',
					icon: 'none'
				});
				
				// 发送信息
				this.socket.emit('sendMessage', {
					userId: '622707f8ddf23c9a77a88092',
					targetId: '6262218cb74277f628093064',
					content: this.sendContent,
					messageType: 1,
				})
				this.sendContent = '';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.send-box {
		width: 100vw;

		.send-icon {
			width: 44rpx;
			height: 44rpx;
			top: 24%;
		}
	}
</style>
