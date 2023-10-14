//该文件用于创建Vuex中最核心的store

//引入Vuex 和Vue
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
//准备 actions
const actions = {
    jia(context, value) {
        context.commit('JIA', value)
    },
    jian(context, value) {
        context.commit('JIAN', value)
    },
    jiaOdd(context, value) {
        if (context.state.count % 2)
            context.commit('JIA', value)
    },
    jiaWait(context, value) {
      setTimeout(()=>{
        context.commit('JIA', value)
      },500)
     
    }
}

//准备 mutations
const mutations = {
    //为了做区分 mutations中的方法大写
    JIA(state, value) {
        state.count += value
    },
    JIAN(state, value) {
        state.count -= value
    },
}

//准备 state
const state = {
    count: 0,
}

//准备getters——用于将state中的数据加工
const getters = {
    bigCount(state){
        return state.count*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})