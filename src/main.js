import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import axios from 'axios'
import App from './App'

Vue.prototype.$http = axios


Vue.use(Vuetify);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  created () {
  	console.log("init")
  }
})
