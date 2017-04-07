<template>
	<div>
		<header-vue></header-vue>
		<router-view></router-view>
		<footer-vue></footer-vue>
	</div>
</template>
<script>
	import headerVue from './components/header.vue';
	import footerVue from './components/footer.vue';
	export default {
		data(){
			return {}
		},
		components:{
			headerVue,footerVue
		}
	}
</script>
<style>

</style>
