import Vue from 'vue'
import App from './App.vue'
//三级联动 --全局组件
import TypeNav from "@/pages/Home/TypeNav"
Vue.component(TypeNav.name,TypeNav)
import router from '@/router'

Vue.config.productionTip = false
//测试
import {reqCategoryList} from '@/api'
reqCategoryList()
new Vue({
  render: h => h(App),
  router, // 注册路由器
}).$mount('#app')

