import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.http.headers.common['apikey'] = process.env.VUE_APP_API_KEY;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
