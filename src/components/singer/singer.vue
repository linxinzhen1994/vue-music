<template>
  <div class="singer">
    这个是singer
  </div>
</template>

<script type="text/ecmascript-6">
	import { getSingerList } from "api/singer.js";
    export default {
    	data(){
    		return{
    			SingerList:[]
    		}
    	},
    	created(){
    		this._getSingerList()
    	},
    	methods:{
    		_getSingerList(){
    			// getSingerList().then((res)=>{
    			// 	this.SingerList=res.data.list
    			// })
    			console.log(getSingerList())
    		}
    	}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
