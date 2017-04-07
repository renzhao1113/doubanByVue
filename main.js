import Vue from "vue"  //vue
import VueRouter from "vue-router";  //路由
import VueResource from 'vue-resource';  //$http
import MintUi from 'mint-ui';  //一个ui插件
import 'mint-ui/lib/style.css'; //UI插件的样式
import './assets/css/reset.css';
import './assets/css/wap.css';
import './assets/css/loading.css';
import App from "./app.vue";  //引入主组件

import Home from "./components/home.vue";  //引入home组件
import Movie_Details from "./components/movie_details.vue";  //引入home组件
import Movie_List from "./components/movie_list.vue";  //引入home组件

//安装插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUi);

//配置路由
var router = new VueRouter();
router.addRoutes([
	{name: 'Home', path:'/', component: Home},
	{name: 'Home', path:'/home', redirect: '/'},
	{name: 'MovieList', path:'/list/:listType', component: Movie_List},
	{name: 'MovieDetails', path:'/movie_details', component: Movie_Details},
]);

//初始化路由
var vm = new Vue({
	el: '#app',
	router:router,
	render:c=>c(App)
});

