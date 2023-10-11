import Vue from 'vue'
import App from './App'
//关闭 vue 的生产提示
Vue.config.productionTip = false
//全局混合 vm及所有的组件都会有混合的配置项
// import { hunhe,hunhe2 } from './mixin'
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

new Vue({
    render:h=>h(App)
}).$mount('#app')