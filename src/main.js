// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
// import Vue2Leaflet from 'vue2-leaflet'
import leaflet from 'leaflet'
import Vue2Leaflet from 'C:/Users/xstudio/Documents/dev-node/Vue2Leaflet/dist/vue2-leaflet'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'leaflet/dist/leaflet.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Vuex)
Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)
Vue.component('v-popup', Vue2Leaflet.Popup)
Vue.component('v-tooltip', Vue2Leaflet.Tooltip)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
