// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

Vue.use(VueOnsen);

import './assets/sass/main.css'
import Navbar from './assets/vue/partials/navbar.vue'

// Import App Component
import app from './app.vue'

// Import Vuex Storage
import store from './assets/vuex'
// Import vue-router
import router from './router'

Vue.config.productionTip = false
// global component
Vue.component('navbar', Navbar)

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  router,
  render: c => c('app'),
  components: {
    app
  }
});