<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import './tm-vuetify/mian.min.css';
	@import './tm-vuetify/scss/theme.css';
	@import './static/iconfont/iconfont.css';
	.items-center{
		align-items: center;
	}
</style>
