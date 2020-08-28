import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: 'dashboard'
		},
		{
			path: '/',
			component: () => import('../components/common/Home'),
			meta: {title: 'home'},
			children: [
				{
					path: 'dashboard',
					name: 'dashboard',
					component: () => import('../view/Dashboard'),
					meta: {title: '系统首页'},
				},
				{
					path: 'article',
					//name: 'article',
					component: () => import('../view/Article'),
					meta: {title: '文章页面'},
				},
				{
					path: 'add',
					component: () => import('../view/AddArticle'),
					meta: {title: '添加文章'},
				}
			]
		}
	]
})
