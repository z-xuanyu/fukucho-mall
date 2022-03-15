<template>
	<view class="address-page">
		<view class="pa-20">
			<view class="pa-30 white round-2 mb-20" v-for="item in list" :key="item._id">
				<view class="title ml-20">
					{{ item.address }} {{ item.detail }}
				</view>
				<view class="text-size-xs mt-20 ml-20">
					<text>{{ item.name }}</text>
					<text class="ml-20">{{ item.phone }}</text>
				</view>
				<view class="border-b mt-15"></view>
				<view class="flex flex-between">
					<view class="flex items-center">
						<tm-radio :size="26" border-color="red" v-model="item.isDefault" label="默认地址"
											model="round" round="rounded" @change="changeDefault(item._id, $event)"></tm-radio>
					</view>
					<view class="flex">
						<tm-icons :size="35" color="grey" name="icon-edit" @click="jumpEditAddress(item._id)"></tm-icons>
						<tm-icons :size="35" color="grey" class="ml-20" name="icon-delete" @click="onClickDel(item._id)"></tm-icons>
					</view>
				</view>
			</view>
			<template v-if="!list.length">
				<tm-empty color="black" icon="../../../static/images/empty/list.png" label="暂无数据" :size="600" />
			</template>
		</view>
		<view class="fixed b-20 l-0 r-0 pa-20">
			<tm-button :round="24" block @click="jumpAddAdress">添加地址</tm-button>
		</view>
		
		<!-- 删除dialog -->
		<tm-dialog style="height: 100%;" v-model="showDelModal" content="您确认要删除该地址?" @confirm="confirmDel" theme="split"></tm-dialog>
		<tm-message ref="toast"></tm-message>
	</view>
</template>

<script>
	import { getUserAddressList, updateAddressDefault, removeAddress } from "../../../api/user.js"
	export default {
		name: 'UserAddress',
		data() {
			return {
				addressId: null,
				checked: false,
				showDelModal: false,
				list: []
			};
		},
		created() {
			this.fetchData();
		},
		methods: {
			async fetchData() {
				const res = await getUserAddressList();
				this.list = res;
			},
			jumpAddAdress(){
				uni.navigateTo({
					url: "/pages/user/address/address-edit?type=add",
				});
			},
			jumpEditAddress(id) {
				uni.navigateTo({
					url: `/pages/user/address/address-edit?id=${id}`,
				});
			},
			// 改变默认
			async changeDefault(id,value){
				await updateAddressDefault({ id, isDefault: value.checked })
				this.fetchData();
				this.$refs.toast.show({model:'success', label: '设置成功'})
			},
			onClickDel(id) {
				this.addressId = id;
				this.showDelModal = !this.showDelModal;
			},
			 async confirmDel(){
				await removeAddress(this.addressId);
				this.fetchData();
				this.$refs.toast.show({model:'success', label: '删除成功'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.address-page {
		background-color: #f6f6f6;
		min-height: calc(100vh - 44px);
	}
</style>
