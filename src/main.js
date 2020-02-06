import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router/index.js'
// 引入
// 完整引入 在开发阶段
// 按需引入 项目开发完毕,优化过程
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// 使用饿了么
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
