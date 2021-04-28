import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Teams from './components/Teams'
import Members from './components/Members'
Vue.use(VueRouter)
const routes= [
  {path:'/',component:Home},
  {path:'/teams',component:Teams},
  {path:'/members',component:Members},

]
const router  =  new VueRouter({
  routes:routes,
  mode:'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
