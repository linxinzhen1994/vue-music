<template>
  <div class="swipe">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item,index) in recommends" :key=index>
        <a :href=item.linkUrl>
          <img :src=item.picUrl>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
//导入单个文件或者是函数
import { getRecommend } from "api/recommend.js";
import { ERR_OK } from "api/config.js";

export default {
  data(){
      return{
        recommends:[]
      }
    },
  created() {
    this.getRecommend();
  },
  methods: {
    getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends=res.data.slider;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .swipe{
    width: 100%;
    height: 165px;
    img{
      width :100%;
    }
  }


</style>
