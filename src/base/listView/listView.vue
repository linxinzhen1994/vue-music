<template>
    <div class="listView">
        <ul>
            <li class="styleClassify" v-for="(group,index1) in data" :key="index1">
                <h2 class="firstLetterTitle">{{group.title}}</h2>
                <ul>
                    <li class="avatarInfor" v-for="(item,index2) in group.items" :key="index2">
                        <img v-lazy="item.avatar" alt="">
                        <span class="avatarName">{{item.name}}</span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="SortName">
            <ul>
                <li v-for="(group1,index3) in getSortName" :key="index3">
                    {{group1}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    //父子传值通过props来实现,这里定义的data就是父传过来的singerList数据
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    computed:{
        getSortName(){
            
            return this.data.map(item=>{
               return item.title.substr(0,1)
            })

        }
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.listView{
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    ul{
        padding:0
        margin:0
        .styleClassify{
            .firstLetterTitle{
                height: 30px
                line-height: 30px
                padding-left: 20px
                font-size: $font-size-small
                color: $color-text-l
                background: $color-highlight-background
            }
            .avatarInfor{
                padding: 10px 0 0 25px
                display:flex
                align-items:center
                img{
                    width:50px
                    height:50px
                    border-radius:50%
                }
                .avatarName{
                    margin-left: 20px
                    color: $color-text-l    
                    font-size: $font-size-medium
                }   
            }
        }
    }
    .SortName{
        width: 18px;
        height: 370px;
        float: left;
        position: fixed;
        top: 160px;
        right: 0px;
        font-size: 12px;
        color: rgba(255,255,255,0.5);
        text-align: center;
        ul{
         list-style: none;
        }
    }
}
</style>

