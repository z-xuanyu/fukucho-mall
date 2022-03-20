<template>
	<view class="good-all">
		<!-- 顶部商品筛选 -->
		<!-- #ifdef H5 -->
		<tm-sticky :top="44">
			<!-- #endif -->
			<!-- #ifndef H5 -->
			<tm-sticky :top="90">
				<!-- #endif -->
				<tm-dropDownMenu :unColor="!$tm.vx.state().tmVuetify.black?'black':'whtie'" @confirm="confirm"
					:list="list2"></tm-dropDownMenu>
			</tm-sticky>
			<!-- 商品列表 -->
			<view class="pa-20">
				<tm-flowLayout @click="itemClick" ref="wafll">
					<template v-slot:left="{hdata}">
						<view class="round-3 shadow-10 overflow white">
							<tm-images :previmage="false" :src="hdata.item.pic"></tm-images>
							<view class="pa-10 text-size-s">
								<view class="text-overflow-2">
									<!-- <tm-tags :dense="true" model="fill" color="red" size="xs">国庆季</tm-tags> -->
									<text>{{ hdata.item.title }}</text>
								</view>
								<view class="mt-24 flex-between flex-center">
									<view>
										<text class="text-size-xs text-red">￥</text>
										<text class="text-size-lg  text-red">{{ hdata.item.price }}</text>
										<text class="pl-10 text-size-xs text-grey-lighten-1">1256人付款</text>
									</view>
								</view>
							</view>
						</view>
					</template>
					<!-- 右边数据 -->
					<template v-slot:right="{hdata}">
						<view class="round-3 shadow-10 overflow white">
							<tm-images :previmage="false" :src="hdata.item.pic"></tm-images>
							<view class="pa-10 text-size-s">
								<view class="text-overflow-2">
									<!-- <tm-tags :dense="true" model="fill" color="primary" size="xs">天猫品牌</tm-tags> -->
									<text>{{ hdata.item.title }}</text>
								</view>
								<view class="mt-24 flex-between flex-center">
									<view>
										<text class="text-size-xs text-red">￥</text>
										<text class="text-size-lg  text-red">380</text>
										<text class="pl-10 text-size-xs text-grey-lighten-1">1256人付款</text>
									</view>
								</view>
							</view>
						</view>
					</template>
				</tm-flowLayout>
			</view>
			<tm-flotbutton @click="toTopPage" size="m" icon="icon-angle-up"></tm-flotbutton>
	</view>
</template>

<script>
	import {
		getGoodsAll
	} from "../../api/goods"
	export default {
		onLoad() {
			this.randouh();
		},
		onReachBottom() {
			this.randouh();
		},
		data() {
			return {
				list2: [{
						title: '排序',
						children: [{
							model: "checkbox",
							name: "desc",
							children: [{
									title: "默认排序",
									id: '1-1'
								},
								{
									title: "最近更新",
									id: '1-2'
								},
								{
									title: "信誉值最高",
									id: '1-3'
								},
								{
									title: "信誉值最高",
									id: '1-4'
								}
							]
						}, ]
					}, {
						title: '价格',
						children: [{
							name: "priceDesc",
							model: "radio",
							children: [{
									title: "默认排序",
									id: '3-1'
								},
								{
									title: "最近更新",
									id: '3-2'
								},
								{
									title: "信誉值最高",
									id: '3-3'
								}
							]
						}]
					},
					{
						title: '品类',
						children: [{
							model: "checkbox",
							name: "banerDesc",
							children: [{
									title: "默认排序",
									id: '4-1'
								},
								{
									title: "最近更新",
									id: '4-2'
								},
								{
									title: "信誉值最高",
									id: '4-3'
								}
							]
						}]
					}
				],
			}
		},
		methods: {
			// 回到顶部
			toTopPage() {
				uni.pageScrollTo({
					scrollTop: 0
				})
			},
			confirm() {},
			// 点击商品
			itemClick(e) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${e.item._id}`,
				});
			},
			del(e) {
				this.$refs.wafll.delItemData(e.dirIndex, e.childrenIndex)
			},
			//模拟数据，添加到列表中。
			async randouh() {
				const res = await getGoodsAll();
				this.$nextTick(function() {
					this.$refs.wafll.pushData(res)
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.good-all {
		min-height: calc(100vh - 44px);
		background-color: #f6f6f6;
	}
</style>
