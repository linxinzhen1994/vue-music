import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import MHeader from 'components/m-header/m-header.vue'
import Recommend from 'components/recommend/recommend.vue'
import Singer from 'components/singer/singer.vue'
import Rank from 'components/rank/rank.vue'
import Search from 'components/search/search.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',             //根路由
      redirect:'/recommend' //默认推荐路由
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
