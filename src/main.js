import 'babel-polyfill' /* 解析一些es6方法 */

import Vue from 'vue'
import App from './App'
import router from './router' /* router实例 */
import fastclick from 'fastclick' /* 解决移动端点击三毫秒的延迟 */
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
