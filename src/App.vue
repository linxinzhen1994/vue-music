<template>
  <div id="app">
      <MHeader></MHeader>
      <Tab></Tab>
      <!-- router-view是路由显示的地方 -->
      <router-view></router-view>

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
