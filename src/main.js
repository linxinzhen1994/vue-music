import 'babel-polyfill'             /* 解析一些es6方法 */

import Vue from 'vue'
import App from './App'
import router from './router'       /* router实例 */
import fastclick from 'fastclick'   /* 解决移动端点击三毫秒的延迟 */
import Mint from 'mint-ui';			
import VueResource from 'vue-resource' /* 允许使用$http */
import axios from 'axios'
import VueLazyload from 'vue-lazyload'


fastclick.attach(document.body)
Vue.use(Mint);                      /* vue注册下mint  */
Vue.use(VueResource);
Vue.use(VueLazyload,{
	loading: require('common/image/default.png')
})
Vue.prototype.axios = axios         //规定用这种方式使用


Vue.config.productionTip = false

//使用mint-ui的样式
import 'mint-ui/lib/style.css';


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
