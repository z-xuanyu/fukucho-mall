<template>
	<view class="good-all">
		<view class="fixed fulled" style="z-index: 30;">
			<tm-dropDownMenu :unColor="!$tm.vx.state().tmVuetify.black?'black':'whtie'" @confirm="confirm"
				:list="list2"></tm-dropDownMenu>
		</view>
		<view class="pa-32 ">
			<tm-flowLayout @click="itemClick" ref="wafll">
				<template v-slot:left="{hdata}">
					<view class="round-3 shadow-2 overflow white">

						<block v-if="hdata.item.model!='swiper'&&hdata.item.model!='text'">
							<tm-images :previmage="false" :src="hdata.item.image"></tm-images>
							<view class="pa-10 text-size-s">
								<view class="text-overflow-2">
									<tm-tags :dense="true" model="fill" color="red" size="xs">国庆季</tm-tags>
									<text>香港潮牌反绒皮切尔西靴男一脚蹬厚底男短款香港潮牌反绒皮切尔西靴男一脚蹬厚底男短款</text>
								</view>
								<view class="mt-24 flex-between flex-center">
									<view>
										<text class="text-size-xs text-red">￥</text>
										<text class="text-size-lg  text-red">380</text>
										<text class="pl-10 text-size-xs text-grey-lighten-1">1256人付款</text>
									</view>
									<view>
										<tm-menu tip-direction="right" direction="top" ment-direction="right"
											:list=" ['不感兴趣','图片让我反感'  ] ">
											<view class="pr-5">
												<tm-icons color="grey-lighten-1" dense name="icon-info-circle">
												</tm-icons>
											</view>
										</tm-menu>

									</view>
								</view>
							</view>
						</block>
						<block v-if="hdata.item.model=='swiper'">
							<view :style="{width:hdata.width+'px',height:hdata.item.height+'px'}">
								<tm-swiper dot-model="rect" :indicator-dots="true" :height="(hdata.item.height+'px')"
									:list=" [ 'https://picsum.photos/300?jv=3','https://picsum.photos/300?jv=3' ] ">
								</tm-swiper>
							</view>
						</block>
						<block v-if="hdata.item.model=='text'">
							<view :style="{width:hdata.item.width+'px',height:hdata.item.height+'px'}"
								class="red pa-10">
								文字模块
								<view @click.stop="del(hdata)">
									<tm-button theme="white" size="s">点击删除</tm-button>
								</view>
							</view>
						</block>
					</view>
				</template>
				<template v-slot:right="{hdata}">

					<view class="round-3 shadow-2 overflow white">
						<block v-if="hdata.item.model!='swiper'&&hdata.item.model!='text'">
							<tm-images :previmage="false" :src="hdata.item.image"></tm-images>
							<view class="pa-10 text-size-s">
								<view class="text-overflow-2">
									<tm-tags :dense="true" model="fill" color="red" size="xs">天猫品牌</tm-tags>
									<text>香港潮牌反绒皮切尔西靴男一脚蹬厚底男短款香港潮牌反绒皮切尔西靴男一脚蹬厚底男短款</text>
								</view>
								<view class="mt-24 flex-between flex-center">
									<view>
										<text class="text-size-xs text-red">￥</text>
										<text class="text-size-lg  text-red">380</text>
										<text class="pl-10 text-size-xs text-grey-lighten-1">1256人付款</text>
									</view>
									<view>
										<tm-menu tip-direction="right" direction="top" ment-direction="right"
											:list=" [ '不感兴趣','图片让我反感' ] ">
											<view class="pr-5">
												<tm-icons color="grey-lighten-1" dense name="icon-info-circle">
												</tm-icons>
											</view>
										</tm-menu>
									</view>
								</view>
							</view>

						</block>
						<block v-if="hdata.item.model=='swiper'">

							<view :style="{width:hdata.item.width+'px',height:hdata.item.height+'px'}">
								<tm-swiper dot-model="round" :indicator-dots="true" :height="(hdata.item.height+'px')"
									:list=" [ 'https://picsum.photos/300?jv=3','https://picsum.photos/300?jv=3' ] ">
								</tm-swiper>
							</view>
						</block>
						<block v-if="hdata.item.model=='text'">
							<view :style="{width:hdata.item.width+'px',height:hdata.item.height+'px'}"
								class="red pa-10">
								文字模块
								<view @click.stop="del(hdata)">
									<tm-button theme="white" size="s">点击删除</tm-button>
								</view>
							</view>
						</block>
					</view>
				</template>
			</tm-flowLayout>
		</view>
		<tm-flotbutton @click="toTopPage" size="m" icon="icon-angle-up"></tm-flotbutton>
	</view>
</template>

<script>
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
			itemClick(e) {
				console.log(e);
				uni.$tm.toast(e.dirIndex + ':' + e.childrenIndex)

			},
			del(e) {
				this.$refs.wafll.delItemData(e.dirIndex, e.childrenIndex)
			},
			//模拟数据，添加到列表中。
			randouh() {

				let list2 = [];
				for (let i = 0; i < 8; i++) {
					let h = Math.floor(Math.random() * 400);
					if (h < 100) h = 50;
					let th = 0;
					let model = ''
					if (i == 3) {
						th = 80;
						model = 'swiper'
					} else if (i == 6) {
						th = 50
						h = 1
						model = 'text'
					}
					list2.push({
						image: `https://picsum.photos/200/${h}?k=${i}`,
						height: th,
						model: model
					})
				}

				this.$nextTick(function() {
					this.$refs.wafll.pushData(list2)
				})
			},
		}
	}
</script>

<style>

</style>
