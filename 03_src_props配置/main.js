import Vue from 'vue'
import App from './App'
//关闭 vue 的生产提示
Vue.config.productionTip = false

new Vue({
    render:h=>h(App)
}).$mount('#app')