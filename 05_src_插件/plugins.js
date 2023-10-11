export default {
    install(Vue,a,b,c) {
        console.log("hhhhh", Vue,a,b,c);
        //在这里面可以

        //定义全局过滤器
        //Vue.filter(id, [definition])

        //定义全局指令
        //Vue.directive(id, [definition])
        //定义全局的指令
        Vue.directive('fbind', {
            //逻辑复杂的           
                //指令与元素绑定时调用(只调用一次)
                bind(element, binding) {
                    element.value = binding.value
                },
                //指令所在元素被渲染到页面时调用
                inserted(element, binding) {
                    console.log(999,binding);
                    element.focus()
                },
                //指令所在模板被重新解析时调用
                update(element, binding) {
                    element.value = binding.value
                },
            
        },)

        //定义全局混合
        Vue.mixin({
            data(){
                return {
                    x:100,
                    y:100,
                }
            }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert('hello Vue');
        }
    }
}