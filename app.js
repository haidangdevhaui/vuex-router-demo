/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import App from './components/App'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);

sync(store, router);

if (document.getElementById('app')) {
	const app = new Vue({
		store,
	    router,
	    render: h => h(App)
	}).$mount('#app');
}