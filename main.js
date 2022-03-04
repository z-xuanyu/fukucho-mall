import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.config.productionTip = false
App.mpType = 'app'
import store from "./store";
const app = new Vue({
    ...App,
	store,
	uView
})
uni.$u.config.unit = 'rpx'
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif