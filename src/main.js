import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from 'axios'
import VueResource from 'vue-resource';
import VueCompositionApi from '@vue/composition-api';
import  {store } from './store/store';






axios.interceptors.request.use(request => {
  console.log("Request Interceptors",request)
  return request;
}, error => {
  console.log(error)
 return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  console.log("Response Interceptors",response)
  return response;
}, error => {
  console.log(error)
 return Promise.reject(error)
})

Vue.prototype.$http = axios;

Vue.use(VueResource);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;
//this.$http.get('https://httpbin.org/get')

new Vue({
  router,
  axios,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
