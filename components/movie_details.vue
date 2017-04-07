<template>
	<!-- 电影详情开始 -->
	<div class="detail">
		<h1 v-text="movie_details?movie_details.title:''"></h1>
		<div class="dt-info">
			<div class="dti-i"><img alt="" :src="movie_details?movie_details.images.large:''"></div>
			<div class="dti-w">
				<p>
					<strong>导演：</strong>
					<span v-for="(director,index) of movie_details.directors" :key="index" v-text="director.name+' ' "></span>
				</p>
				<p>
					<strong>主演：</strong><span v-for="(cast,index) of movie_details.casts" v-text="cast.name+' '" :key="index"> </span>
				</p>
				<p><strong>类型：</strong><span v-for="(genre,index) of movie_details.genres" :key="index" v-text="genre+' ' "></span></p>
				<p><strong>国家：</strong><span v-for="(country,index) of movie_details.countries" :key="index" v-text="country+' ' "></span></p>
				<p><strong>评分：</strong><span v-text="movie_details.rating.average"></span></p>
				<p><strong>时间：</strong><span v-text="movie_details.year"></span></p>
				<p><strong>又名：</strong><span v-for="(a,index) of movie_details.aka" :key="index" v-text="a+' ' "></span></p>
			</div>
		</div>
		<h3>剧情简介:</h3>
		<p style="color:#676767" v-text="movie_details.summary"></p>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default {
		data(){
			return {
				movieId:0,
				movie_details:null
			}
		},
		created(){
			Indicator.open();
			this.movieId = this.$route.query.id;
			this.$http.jsonp("https://api.douban.com/v2/movie/subject/"+this.movieId)
				.then(res=>{
					this.movie_details = res.body;
					Indicator.close();
				})
		},
	}
</script>
<style>

</style>
