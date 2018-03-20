import 'babel-polyfill'             /* 解析一些es6方法 */

import Vue from 'vue'
import App from './App'
import router from './router'       /* router实例 */
import fastclick from 'fastclick'   /* 解决移动端点击三毫秒的延迟 */
import Mint from 'mint-ui';

fastclick.attach(document.body)
Vue.use(Mint);                      /* vue注册下mint  */


Vue.config.productionTip = false

//使用mint-ui的样式
import 'mint-ui/lib/style.css';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
