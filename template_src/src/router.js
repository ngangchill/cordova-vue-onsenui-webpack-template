import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
 	routes: [
    	{
      		path: '/',
      		name: 'Homepage',
      		component: require('./assets/vue/pages/homepage/index').default
    	}
    ]
})
