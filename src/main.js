// main.js是整個專案的入口處

// 載入相關的套件、專案檔案等等。
import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import Feeling from '@/views/Feeling.vue'
import About from '@/views/About.vue'
import Temp from '@/views/Temp.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/temp', component: Temp },
    { path: '/feeling', component: Feeling },
    { path: '/about', component: About },
  ]
});
// 初始化應用程序，使用 render 函式將 App 元件渲染出來
// 然後將應用程序綁定在 DOM 上面，該 DOM 的 ID 是 #app 
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
