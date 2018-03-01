// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2Leaflet from 'vue2-leaflet'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'leaflet/dist/leaflet.css'

Vue.use(Mint)
Vue.config.productionTip = false
Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
