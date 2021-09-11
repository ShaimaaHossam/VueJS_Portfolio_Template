import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store.js';
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

Vue.use(VueScrollFixedNavbar);
library.add(fas, fab, far)

AOS.init();
Vue.component('fa', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  
}).$mount('#app')
