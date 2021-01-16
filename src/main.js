import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/font/iconfont.css'  //字体图标  
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.prototype.$http= axios;

axios.defaults.baseURL = 'http://127.0.0.1:3333'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// new Vue({
//   el:'#app',
//   router,
//   store,
//   components:{App},
//   template:'<App />'
// })
// render:function(createElement){
//   return createElement(App)
// }
// h是createElement  别名
