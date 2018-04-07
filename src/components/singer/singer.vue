<template>
	<div class="singer">
		<!-- 父子组件传值,子组件props有个data,相当于在父的singerList传给子的data -->
		<listView :data="SingerList"></listView>
	</div>
</template>

<script type="text/ecmascript-6">
import { getSingerList } from "api/singer.js";
import listView from 'base/listView/listView'
const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'



export default {
	data() {
		return {
			SingerList: []
		}
	},
	created() {
		this._getSingerList()
	},
	methods: {
		_getSingerList() {
			getSingerList().then((res) => {
				this.SingerList = this._normalizeSinger(res.data.list)
				console.log(this.SingerList);
				
			})
		},
		_normalizeSinger(list) {
			//总的数据
			let map = {
				//热门歌手
				hot: {
					title: HOT_NAME,
					items: []
				}
			}

			list.forEach((item, index) => {
				if (index < 10) {
					map.hot.items.push({
						name: item.Fsinger_name,
						id: item.Fsinger_mid,
						avatar:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
					})
				}

				//动态添加字母开头的歌手数据
				const key = item.Findex
				if (!map[key]) {
					map[key] = {
						title: key,
						items: []
					}
				}
				//按字母排序的歌手
				map[key].items.push({
					name: item.Fsinger_name,
					id: item.Fsinger_mid,
					avatar: `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg?max_age=2592000`
				})

			})
			
			//处理数据把热门和其他歌手一起整合到一起
			let hot = []
			let ret = []
			for (let key in map) {
				let val = map[key]
				if (val.title.match(/[a-zA-Z]/)) {
					ret.push(val)
				} else if (val.title === HOT_NAME) {
					hot.push(val)
				}
			}
			ret.sort((a, b) => {
				return a.title.charCodeAt(0) - b.title.charCodeAt(0)
			})
			
			//先创建对象,然后对象中分开处理,最好在合成数组			
			return hot.concat(ret)
		}
	},
	components:{
		listView
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
