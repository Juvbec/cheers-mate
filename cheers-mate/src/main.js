import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/scss/main.scss';
// import {Alert} from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

//Google Maps With Vue
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSpb5jrUSIDb124D7Qpjd4XJQ6d8oVPW0',
    libararies: 'places'
  }
})

//Element Lib
// Vue.use(Alert)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
