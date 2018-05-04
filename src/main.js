import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Vue2Leaflet from 'vue2-leaflet'
import store from './store'

import 'leaflet/dist/leaflet.css'
import '@/style/iconfont.css'
import '@/style/pepmdx-icons.css'
import '@/style/disney/index.less'

// Vue.config.productionTip = false
Vue.use(Vuex)

// import {
//   Style,
//   Button,
//   Checkbox,
//   CheckboxGroup,
//   Loading,
//   Tip,
//   Popup,
//   Toast,
//   Picker,
//   TimePicker,
//   Dialog,
//   ActionSheet,
//   Scroll,
//   Slide,
//   IndexList
// } from './disney-ui/src/module.js'

// Vue.use(Button)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Loading)
// Vue.use(Tip)
// Vue.use(Toast)
// Vue.use(Picker)
// Vue.use(TimePicker)
// Vue.use(Dialog)
// Vue.use(ActionSheet)
// Vue.use(Scroll)
// Vue.use(Slide)
// Vue.use(IndexList)


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

