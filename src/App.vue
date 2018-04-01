<template>
  <div id="app">
      <MHeader></MHeader>
      <Tab></Tab>
      <!-- 内容保存在缓存中,每一次请求都能从缓存中快速渲染，而不是重新渲染 -->
      <keep-alive>
        <!-- router-view是路由显示的地方 -->
        <router-view></router-view>
      </keep-alive>
  </div>
</template>


<script>

//导入组件
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'

export default {
  components:{
      MHeader,
      Tab
  }
}
</script>

<style>

</style>
