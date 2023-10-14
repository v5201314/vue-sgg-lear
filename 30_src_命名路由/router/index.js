//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyMessage from '../pages/MyMessage'
import MyNews from '../pages/MyNews'
import MyDetail from '../pages/MyDetail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: MyAbout
        },
        {
            path: '/home',
            component: MyHome,
            children: [
                {
                    //当路由层级 过高时，可以通过指定name的方式 用name 替换 path 就可以了
                    name: 'message',
                    path: 'message',
                    component: MyMessage,
                    children: [
                        {
                            name:'detail',
                            path: 'detail',
                            component: MyDetail
                        },
                    ]
                },
                {
                    path: 'news',
                    component: MyNews,

                },
            ]
        },
    ]
})