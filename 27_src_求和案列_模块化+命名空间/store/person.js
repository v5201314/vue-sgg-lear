//人员组件(Person)相关的配置
// import axios from "axios"
export default {
    //开启命名空间
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            if(value.name.indexOf('王')===0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('添加的人必须姓王')
            }
        },
        //发起网络请求
        // addPersonServer(context){
        //     axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        //         response=>{
        //             console.log(response.data);
                    
        //         },
        //         error=>{
        //             console.log(error.message);
        //         }
        //     )
        // }
    },
    mutations:{
    ADD_PERSON(state, value) {
        state.personList.unshift(value)
    },
    },
    state:{
        personList:[
            {id:'001',name:'张三'},
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}
