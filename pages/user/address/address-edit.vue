<template>
	<view class="addres-edite-page pa-20">
		<tm-form ref="info" @submit="handleSubmit">
			<tm-input required title="收货人" name="name" class="mb-20" v-model="info.name" :round="10"
				:border-bottom="false" :padding="[25,10]" placeholder="请输入收货人姓名"></tm-input>
			<tm-input required title="手机号" name="phone" class="mb-20" :round="10" v-model="info.phone"
				:border-bottom="false" :padding="[25,10]" placeholder="请输入手机号码"></tm-input>
			<view class="round-4 mb-10">
				<tm-pickersCity @confirm="handleSelectCity" :default-value="cityValue" btn-color="primary">
					<!-- <text class="text-size-n">{{ formteCity }}</text> -->
					<tm-input name="address" :border-bottom="false" required title="所在地址" placeholder="请选择区域" disabled
						:value="info.address" right-icon="icon-angle-right"></tm-input>
				</tm-pickersCity>
			</view>

			<view class="round-2 items-center mb-20 py-20 white">
				<view class="mt-2">
					<tm-input name="detail" v-model="info.detail" :vertical="true" :height="200" title="详细地址" :maxlength="100"
						:border-bottom="false" :required="true" placeholder="请输入详细地址" input-type="textarea"
						bg-color="grey-lighten-5" clear></tm-input>
				</view>
			</view>

			<view class="round-4 flex items-center flex-between mb-20 pa-20  py-30 white">
				<text class="text-2xl mx-2 mr-4">设为默认</text>
				<tm-switch :text="[]" :width="80" :height="40" v-model="info.isDefault"></tm-switch>
			</view>

			<view class="mt-50 pt-50">
				<tm-button theme="primary" :loading="loading" navtie-type="form" block :round="25">保存</tm-button>
			</view>
		</tm-form>
		<tm-message ref="toast"></tm-message>
	</view>
</template>

<script>
	import tmButton from "@/tm-vuetify/components/tm-button/tm-button.vue"
	import tmPickersCity from "@/tm-vuetify/components/tm-pickersCity/tm-pickersCity.vue"
	import tmSwitch from "@/tm-vuetify/components/tm-switch/tm-switch.vue"
	import tmInput from "@/tm-vuetify/components/tm-input/tm-input.vue"
	import {
		createAddress,
		getAddressInfo,
		updateAddress,
		updateAddressDefault
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
				addressId: null,
				cityValue: [],
				info: {
					name: '',
					phone: '',
					address: '',
					detail: '',
					isDefault: false,
				}
			}
		},
		onLoad(option) {
			if (option.type == 'add') {
				uni.setNavigationBarTitle({
					title: '新增地址'
				})
			}
			
			// 编辑
			if(option.id){
				this.addressId = option.id
				this.fetchData(option.id)
			}
		},
		methods: {
			
			// 获取地址详情数据
			async fetchData(id) {
			 	const res = await getAddressInfo(id)
				this.cityValue = res.address.split("-");
				this.info = res;
			},
			handleSelectCity(e) {
				this.info.address = e.join('-');
			},
			async handleSubmit(values) {
				if(values) {
					if(this.addressId) {
						// 更新默认地址
						await updateAddressDefault({ id: this.addressId, isDefault: this.info.isDefault })
						// 更新地址信息
						await updateAddress(this.addressId, values);
						this.$refs.toast.show({model:'success', label: '编辑成功'});
					}else {
						await createAddress(this.info);
						this.$refs.toast.show({model:'success', label: '添加成功'});
					}
					setTimeout(()=>{
						uni.navigateTo({
							url: '/pages/user/address/address'
						});
					},1000)
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.addres-edite-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
