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
                            name: 'detail',
                            //当使用 路径preams传递参数时 这样写 path: 'detail/:id/:title',
                            path: 'detail/:id/:title',
                            component: MyDetail,
                            //props的第一种写法，值为对象 该对象中的所有 k-v 都会以props的形式传递给 Detail组件
                            // 所以 Detail组件 中要用 接受props数据的方法接受
                            // props:{
                            //     a:'1',
                            //     b:'2'
                            // }

                            //props的第二种写法，值为布尔值 若值为真 就会把该路由收集到的所有params参数以props的形式传递给 Detail组件
                            // props:true,

                            //props的第三种写法，值为函数  就会把该路由收集到的所有query参数以props的形式传递给 Detail组件
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
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