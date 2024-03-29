import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueSocketIO from 'vue-socket.io';

import router from './router';
import store from './store';
// import './registerServiceWorker';
import './assets/scss/main.scss';
// import {Alert} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
// import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
axios.defaults.withCredentials = true;

//vue material
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'
// Vue.use(VueMaterial)

locale.use(lang)
Vue.use(ElementUI);

const SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

// import component and stylesheet
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'


// vue scroll
const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

// see docs for available options
const datepickerOptions = {}

// make sure we can use it in our components
Vue.use(AirbnbStyleDatepicker, datepickerOptions)

Vue.config.productionTip = false

//Google Maps With Vue
Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyAPXhBZJxk_lQ7GMLmTm_szq6eJ7R7X_Z8',
    // key: 'AIzaSyBOKU78_QbQjda_J_i1gEwH8RTCX0VWEzo',
    // key: 'AIzaSyDSLLio1oMPc_TH1OrUFtMxHQnZmDp_JOw',
    key: 'AIzaSyDSpb5jrUSIDb124D7Qpjd4XJQ6d8oVPW0',
    libraries: 'places'
  }
})

Vue.use(new VueSocketIO({
  debug: true,
  connection: (process.env.NODE_ENV !== 'development')? '' : 'http://localhost:3003',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  }
}))

//Element Lib
// Vue.use(Alert)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
