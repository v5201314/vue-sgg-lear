import Vue from 'vue'
import App from './App'
//关闭 vue 的生产提示
Vue.config.productionTip = false
//引入 store
import store from './store'


new Vue({
    render:h=>h(App),
    store, 
    beforeCreate(){
    Vue.prototype.$bus=this
    }
}).$mount('#app')