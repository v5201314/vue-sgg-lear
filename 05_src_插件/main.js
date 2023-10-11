import Vue from 'vue'
import App from './App'
//关闭 vue 的生产提示
Vue.config.productionTip = false
//引入插件
import plugins from './plugins'
//使用插件(可以传递参数)
Vue.use(plugins,1,2,3)
new Vue({
    render:h=>h(App)
}).$mount('#app')