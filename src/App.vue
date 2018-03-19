<template>
  <div id="app">
      <MHeader></MHeader>
      <!-- router-view是路由显示的地方 -->
      <router-view></router-view>
      <Tab></Tab>
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
