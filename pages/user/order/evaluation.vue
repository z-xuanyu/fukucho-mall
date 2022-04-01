<template>
	<view class="evaluation-page">
		<tm-sheet :shadow="24" :padding="[12,24]" :margin="[24,0]">
			<tm-form @submit="handleSubmit" ref="formData">
				<view class="mx-32 my-24 border-b-1  pb-24 flex-between">
					<text class="text-size-n ">商品评分</text>
					<view>
						<tm-rate name="pingfen" v-model="reqData.rate"></tm-rate>
					</view>
				</view>
				<tm-input :vertical="true" required :height="150" input-type="textarea" bg-color="grey-lighten-5"
					:maxlength="200" placeholder="请输入,不超过200字符" v-model="reqData.content"></tm-input>
				<view class="py-12 px-24 mx-12 round-3 border-b-1 grey text">
					<text class="text-size-n text-weight-b ">商品图片</text><text
						class="text-grey text-size-xs px-10">(最多可以上传8张)</text>
				</view>
				<view class="py-32 mx-12">
					<tm-upload ref="uploadRef" url="http://localhost:3009/upload" :autoUpload="true" color="grey" name="images" :filelist.sync="reqData.images" @change="uploadChange" model="widthFix" :max="8" :grid="4">
					</tm-upload>
				</view>
				<tm-button navtie-type="form" block :round="24">提交</tm-button>
			</tm-form>
		</tm-sheet>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId: null,
				productId: null,
				reqData: {
					rate: 5,
					content: '',
					images: []
				}
			};
		},
		onLoad(option) {
			this.orderId = option.id;
			this.productId = option.productId;
		},
		methods: {
			async handleSubmit() {
				// 获取文件对象
				const files = this.$refs.uploadRef.list.map(item=> item.files[0]);
				
				// await submitOrderComment({
				// 	orderId: this.orderId,
				// 	rate: 5,
				// 	content: '测试评分',
				// 	productId: this.productId,
				// 	images: files,
				// })
				console.log(files, 7777)
			},
			uploadChange(file) {
				console.log(file, 888)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.evaluation-page {
		min-height: calc(100vh - 44px);
		padding-top: 20rpx;
		background-color: #f6f6f6;
	}
</style>
