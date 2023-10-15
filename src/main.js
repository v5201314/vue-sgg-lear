import Vue from 'vue'
import App from './App'
//引入 ElementUI 组件库
// import ElementUI from 'element-ui';
// //引入 ElementUI 样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button } from 'element-ui';

//关闭 vue 的生产提示
Vue.config.productionTip = false
//应用插件
// Vue.use(ElementUI)
 Vue.use(Button)

new Vue({
    render:h=>h(App),
}).$mount('#app')