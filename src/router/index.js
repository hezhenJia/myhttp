// 进行路由的初始化和配置
import VueRouter from 'vue-router'
// 注册
import Vue from 'vue'

import Login from'@/views/login'

Vue.use(VueRouter)

// 初始化
const router = new VueRouter({
  routes:[
    {path: '/login',component:Login}
  ]
})
// 导出
export default router
