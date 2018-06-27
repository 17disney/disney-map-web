import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as Filters from '@/common/filters'
import 'leaflet/dist/leaflet.css'
import '@/styles/disney/index.styl'

// UI
import DsUi from 'package/ds-ui'
import AttUi from 'package/att-ui'
import initLeaflet from '@/utils/leaflet'

initLeaflet(Vue)
Vue.use(DsUi)
Vue.use(AttUi)

// Tool
Object.keys(Filters).forEach(key => {
  Vue.filter(key, Filters[key])
})


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
