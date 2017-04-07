<template>
	<!--电影列表开始-->
	<div class="list">
		<ul>
			<li style="text-align: center" v-for="(movie,index) of movieObj.subjects" :key="index">
				<!--<a href="" style="position: relative">-->
				<router-link :to="{name: 'MovieDetails',query:{id:movie.id}}">
					<img class="moviePhoto"  :src="movie.images.large">
				</router-link>
				<div class="meta">
					<h4><span v-text="movie.title"></span> <em v-text="movie.rating.average+'分'"></em></h4>
					<div class="otherinfo">类型:<span v-for="(type,index) of movie.genres" :key="index" v-text="type"></span></div>
				</div>
			</li>
		</ul>
		<div class="paging">
			<label>总共：<span v-text="movieObj.total"></span>条记录,
				第<span v-text="currentPage"></span>/<span v-text="totalPage"></span>页;</label>
			<!-- 加上disable类样式，表示按钮禁用状态 -->
			<button class="prev" :class="{disable:currentPage<=1}" :disabled="currentPage<=1" @click="paging(--currentPage)">上一页</button>
			<button class="next" :class="{disable:currentPage>=totalPage}" :disabled="currentPage>=totalPage" @click="paging(++currentPage)">下一页</button>
		</div>
	</div>
	<!--电影列表结束-->
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				listtype: '',
				movieObj: {},
				count:10,
				start:0,
				total:0,
				currentPage: 1,
				totalPage: 0,
				url: "https://api.douban.com/v2/movie/",
			}
		},
		methods:{
			//发送请求,获取电影列表
			getList:(self,currentPage)=>{
				Indicator.open();
				self.start = (currentPage-1)*self.count;
				self.$http.jsonp(self.url+self.listtype+"?count="+self.count+"&start="+self.start)
					.then(res=>{
						self.movieObj = res.body;
						self.total = self.movieObj.total;
						self.totalPage = Math.floor(self.total/self.count)+1;
						Indicator.close();
					})
			},
			paging:function(currentPage){
				this.getList(this,currentPage);
			}
		},
		//当前组件创建时触发
		created(){
			this.currentPage = 1;
			this.listtype = this.$route.params.listType;
			this.getList(this,this.currentPage);
			console.log('created');
		},
		updated(){
			console.log('updated',this.currentPage);
		},
		//监听子路由的变化
//		watch:{
//			$route(to,from){
//				this.currentPage = 1,
//				this.listtype=this.$route.params.listType;
//				this.getList(this,this.currentPage);
//			}
//		},
		beforeRouteUpdate(to,from,next){
			this.currentPage = 1;
			this.listtype=to.params.listType;
			this.getList(this,this.currentPage);
			next();
		}
	}
</script>
<style>

</style>
