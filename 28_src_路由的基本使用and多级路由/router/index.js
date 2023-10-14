//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyMessage from '../pages/MyMessage'
import MyNews from '../pages/MyNews'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:MyAbout
        },
        {
            path:'/home',
            component:MyHome,
            children:[
                {path:'message',component:MyMessage},
                {path:'news',component:MyNews},

            ]
        },
    ]
})