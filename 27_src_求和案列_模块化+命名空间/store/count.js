//求和组件(Count)相关的配置
export default {
    namespaced:true,
    actions:{
        jiaOdd(context, value) {
            if (context.state.count % 2)
                context.commit('JIA', value)
        },
        jiaWait(context, value) {
          setTimeout(()=>{
            context.commit('JIA', value)
          },500)
         
        }
    },
    mutations:{
        JIA(state, value) {
            state.count += value
        },
        JIAN(state, value) {
            state.count -= value
        },
    },
    state:{
        count: 0,
        school:'川电机',
        student:'余生',
    },
    getters:{
        bigCount(state){
            return state.count*10
        }
    }
}
