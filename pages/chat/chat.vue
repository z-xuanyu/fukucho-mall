<template>
	<view>
		<u--input placeholder="请输入内容" border="surround" v-model="value"></u--input>
		<u-button @click="send" type="primary" text="发送"></u-button>
	</view>
</template>

<script>
	import io from "../../utils/socket/weapp.socket.io.js"
	const socket = io('http://localhost:3008/chat');
	export default {
		data() {
			return {
				socket: null,
				value: ''
			};
		},
		created() {
			socket.on("onMessage", d=>{
				console.log(d,'uniap信息')
			})
		},
		methods: {
			send() {
				socket.emit('sendMessage', {
					userId: '6218492e30fcf580690cc847',
					adminId: '61d502c9ccea3f676c52368a',
					content: this.value
				})
			},
		}
	}
</script>

<style lang="scss">

</style>
