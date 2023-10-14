//该文件用于创建Vuex中最核心的store

//引入Vuex 和Vue
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

//引入求和组件(Count)相关的配置
import countOptions from './count'
//引入人员组件(Person)相关的配置
import PersonOptions from './person'

//创建并暴露store
export default new Vuex.Store({
   modules:{
   countAbout: countOptions,
   personAbout: PersonOptions
   }
})