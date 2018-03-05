import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vue2Leaflet from 'vue2-leaflet'
import Mint from 'mint-ui'
import store from './store'

import 'mint-ui/lib/style.css'
import 'leaflet/dist/leaflet.css'
import '@/css/iconfont.css'
import '@/css/pepmdx-icons.css'
import '@/style/disney/index.less'

// Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(Vuex)
Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)
Vue.component('v-popup', Vue2Leaflet.Popup)
Vue.component('v-tooltip', Vue2Leaflet.Tooltip)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
