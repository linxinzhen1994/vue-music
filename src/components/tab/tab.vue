<template>
  <div class="tab">
    <!-- 路由跳转标签 -->
    <!-- tag类会让router-link渲染成div -->
    <router-link to="/recommend" class="tab-item" tag="div">
      <span class="tab-link">评论</span>
    </router-link>
    <router-link to="/singer" class="tab-item" tag="div">
      <span class="tab-link">唱歌</span>
    </router-link>
    <router-link to="/rank" class="tab-item" tag="div">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link to="/search" class="tab-item" tag="div">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">

@import "~common/stylus/variable"
.tab{
      display: flex
      height: 44px
      line-height: 44px
      font-size: $font-size-medium
      .tab-item{
        flex: 1
        text-align: center
        .tab-link{
          padding-bottom: 5px
          color: $color-text-l
        }
        //设置 链接激活时使用的 CSS 类名
        &.router-link-active{
          .tab-link{
            color: $color-theme
            border-bottom: 2px solid $color-theme
          }
        }
      }
   }

</style>
