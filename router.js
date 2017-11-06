import VueRouter from 'vue-router'
import Login from './components/auth/Login'
import App from './components/App'
import Count from './components/Count'

const routes = [
	{
		path: '/login', 
		component: Login
	},
	{
		path: '/', 
		component: App,
		children: [
			{
				path: 'count/:start?',
				component: Count
			},
			{
				path: 'user', 
				component: Login
			}
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;