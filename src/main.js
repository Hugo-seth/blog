// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import HomePage from './components/HomePage'
import ArticleDetail from './components/articleDetail'

/* eslint-disable no-new */
Vue.use(VueRouter)

const routes = [
  { path: '/:number', component: ArticleDetail },
  { path: '', component: HomePage },
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')