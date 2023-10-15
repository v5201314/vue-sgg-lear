//该文件用于创建路由器
import VueRouter from 'vue-router'
//引入组件
import MyAbout from '../pages/MyAbout'
import MyHome from '../pages/MyHome'
import MyMessage from '../pages/MyMessage'
import MyNews from '../pages/MyNews'
import MyDetail from '../pages/MyDetail'




//创建并暴露一个路由器
const router = new VueRouter({
    mode:'hash',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: MyAbout,
            meta: { title: '关于',isAuth:true },
        },
        {
            name: 'home',
            path: '/home',
            component: MyHome,
            meta: { title: '主页' },
            children: [
                {
                    //当路由层级 过高时，可以通过指定name的方式 用name 替换 path 就可以了
                    name: 'message',
                    path: 'message',
                    component: MyMessage,
                    meta: { title: '消息' },
                    children: [
                        {
                            name: 'detail',
                            //当使用 路径preams传递参数时 这样写 path: 'detail/:id/:title',
                            path: 'detail',
                            component: MyDetail,
                            meta: { title: '详情', isAuth: true },
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        },
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: MyNews,
                    //给需要路由守卫校验的路由加上 meta 里面加一个属性给布尔值控制
                    meta: { title: '新闻', isAuth: true },
                    // beforeEnter: (to, from, next) => {
                    //     //独享路由守卫 如果只是某个路由需要限制，则在其路由配置中 beforeEnter 写校验规则
                    //     console.log('去哪里', to);
                    //     console.log('来自哪里', from);
                    //     //读取目标位置是否需要校验
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'gystt')
                    //             next()
                    //     } else {
                    //         next()
                    //     }
                    // }
                }
            ]
        },
    ]
})

//全局前置路由守卫————初始化的时候调用、每次切换路由之前被调用
// router.beforeEach((to, from, next) => {
//     // console.log('去哪里',to);
//     // console.log('来自哪里',from);
//     // if(to.path==='/home/news'||to.path==='/home/message'){
//     // if (to.name === 'news' || to.name === 'message') {
//     //读取目标位置是否需要校验
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'gystt')
//             next()
//     } else {
//         next()
//     }
// })

//全局后置路由守卫————初始化的时候调用、每次切换路由之后被调用
// router.afterEach((to)=>{
//     document.title=to.meta.title||'余生学习' //改变网页的title

// })

export default router