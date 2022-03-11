<template>
	<view class="addres-edite-page pa-20">
		<tm-input required title="收货人" class="mb-20" :round="10" :border-bottom="false" :padding="[25,10]" placeholder="请输入收货人姓名" ></tm-input>
		<tm-input required title="手机号" class="mb-20" :round="10" :border-bottom="false" :padding="[25,10]" placeholder="请输入手机号码" ></tm-input>
		<view class="round-2 flex items-center mb-20 pa-30 white">
			<view class="text-size-m ml-5">所在地区</view>
			<view class="flex-1 ml-40">
				<tm-pickersCity @confirm="handleSelectCity" :default-value="cityValue" btn-color="primary">
					<text class="text-size-n">{{ formteCity }}</text>
				</tm-pickersCity>
			</view>
		</view>

		<view class="round-2 items-center mb-20 py-20 white">
			<view class="mt-2">
				<tm-input :vertical="true" :height="200" title="详细地址" :maxlength="100" :border-bottom="false"
					:required="true" placeholder="请输入详细地址" input-type="textarea" v-model="info.detail"
					bg-color="grey-lighten-5" clear></tm-input>
			</view>
		</view>

		<view class="round-4 flex items-center flex-between mb-20 pa-20  py-30 white">
			<text class="text-2xl mx-2 mr-4">设为默认</text>
			<tm-switch :text="[]" :width="80" :height="40" v-model="isDefault"></tm-switch>
		</view>

		<view class="mt-50 pt-50">
			<tm-button theme="primary" :loading="loading" block :round="25">保存</tm-button>
		</view>
	</view>
</template>

<script>
	import tmButton from "@/tm-vuetify/components/tm-button/tm-button.vue"
	import tmPickersCity from "@/tm-vuetify/components/tm-pickersCity/tm-pickersCity.vue"
	import tmSwitch from "@/tm-vuetify/components/tm-switch/tm-switch.vue"
	import tmInput from "@/tm-vuetify/components/tm-input/tm-input.vue"
	import {
		createAddress
	} from "../../../api/user.js"
	export default {
		components: {
			tmInput,
			tmButton,
			tmPickersCity,
			tmSwitch,
		},
		data() {
			return {
				loading: false,
				isDefault: false,
				cityValue: [],
				info: {
					name: '',
					detail: '',
				}
			}
		},
		onLoad(option) {
			if (option.type == 'add') {
				uni.setNavigationBarTitle({
					title: '新增地址'
				})
			}
		},
		computed: {
			formteCity() {
				return this.cityValue.length ? this.cityValue.join('-') : '请选择地址';
			}
		},
		methods: {
			handleSelectCity(e) {
				this.cityValue = e;
			},
			async handleSubmit() {
				await createAddress()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.addres-edite-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
