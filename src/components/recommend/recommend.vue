<template>
  <Scroll class="recommend">
    <div class="swipe">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,index) in recommends" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="songList">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li class="item" v-for="(item,index) in songLists" :key="index">
            <div class="icon-img">
              <img v-lazy="item.imgurl">
            </div>
            <div class="text">
              <h2 v-html="item.creator.name"></h2>
              <p v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
    </div>
  </Scroll>
</template>

<script type="text/ecmascript-6">
//导入单个文件或者是函数
import { getRecommend , getDiscList } from "api/recommend.js";
import { ERR_OK } from "api/config.js";
import Scroll from "base/scroll/scroll.vue"

export default {
  data(){
      return{
        recommends:[],
        songLists:[]
      }
    },
  created() {
    this._getRecommend();
    this._getDiscList();

  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends=res.data.slider;
        }
      });
    },
    _getDiscList(){
      getDiscList().then(res =>{
        this.songLists=res.data.list;
      })
    }
  },
  components:{
    Scroll
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@import "~common/stylus/variable"
  .recommend {
    .swipe{
      width: 100%;
      height: 165px;
      img{
        width :100%;
      }
    }
    .songList{
        .list-title{
          height: 60px;
          line-height: 60px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-text;
        }
        ul{
          padding:0;
          margin:0;
          .item{
          display:flex;
          align-items:center;
          padding: 0 15px 15px 15px;
          .icon-img{
            width:60px;
            img{
              width:60px;
              height:60px;
            }
          }
          .text{
            display:flex;
            align-content:center;
            flex-direction:column;
            justify-content:center;
            padding-left:15px;
            font-size: $font-size-medium;
            h2{
              margin: 0 0 10px 0;
              color: $color-text;
              font-size: $font-size-medium;
            }
            p{
              color: $color-text-d;
              margin:0;
            }
          }
        }
      }
    }
  }
    


</style>
