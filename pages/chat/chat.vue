<template>
	<view class="chat-page flex flex-col flex-between">
		<view class="flex-1">
			<MessageContent :sendBoxHeight="sendBoxHeight" :messageList="messageList" />
		</view>
		<SendMessageBox @send-box-height="getSendBoxHeight" :socket="socket" />
	</view>
</template>
<script>
	import SendMessageBox from "./components/SendMessageBox.vue";
	import MessageContent from "./components/MessageContent.vue";
	import io from "@/utils/socket/weapp.socket.io.js";
	import {
		getChatMessageList
	} from "@/api/chat.js"
	export default {
		name: 'ChatPage',
		components: {
			SendMessageBox,
			MessageContent
		},
		onLoad() {

			this.socket = io('http://localhost:3008/chat');
			this.socket.emit('connectedCustomerService', {
				userId: this.userId,
				customerServiceId: this.customerServiceId,
			})
			// 消息监听
			this.socket.on('onMessage', (data) => {
				if(data.user._id == this.userId || data.user._id == this.customerServiceId) {
					this.messageList.push({ ...data, isMe: data.user._id == this.userId });
				}	
			})
			this.fetchMessageList();
		},
		data() {
			return {
				customerServiceId: '6262218cb74277f628093064',
				userId: '622707f8ddf23c9a77a88092',
				sendBoxHeight: '',
				socket: null,
				messageList: [],
			}
		},
		methods: {
			// 发送信息框高度
			getSendBoxHeight(value) {
				this.sendBoxHeight = value;
			},
			// 获取聊天信息
			async fetchMessageList() {
				const res = await getChatMessageList(this.customerServiceId);
				this.messageList = res.map(item=>({
						...item,
						isMe: item.user._id == this.userId
					}))
			},
		},
	}
</script>
<style lang="scss" scoped>
	.chat-page {
		min-height: calc(100vh - 44px);
		background-color: $bg-color-grey;
	}
</style>
