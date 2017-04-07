<template>
	<!-- 顶部导航栏开始 -->
	<div class="top">
		<div class="header">
			<a href="#/home_page">我的豆瓣</a>
			<div class="search">
				<input class="my-input" type="text" placeholder="电影搜索">
				<a href="#/list/search">搜索</a>
			</div>
		</div>
		<nav class="nav">
			<ul>
				<li><router-link :to="{name:'Home'}">首页</router-link></li>
				<li v-for="(item, key) of types">
					<router-link :to="{name:'MovieList',params:{listType:key}}">{{item}}</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>

	export default {
		data(){
			return {
				types: {
					'in_theaters': "正在热映",
					'coming_soon': "即将上映",
					'top250': "top250"
				}
			}
		}
	}
</script>
<style>

</style>
