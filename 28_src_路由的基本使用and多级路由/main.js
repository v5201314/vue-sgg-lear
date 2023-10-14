import Vue from 'vue'
import App from './App'
//引入 VueRouter
import VueRouter from 'vue-router'
//引入 router
import router from './router'

//关闭 vue 的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)

new Vue({
    render:h=>h(App),
    router,
}).$mount('#app')