<template>
  <div class="box">
    <h2>学校名称：{{ name }}</h2>
  </div>
</template>

<script>
//安装pubsub: npm i pubsub-js
import pubsub from 'pubsub-js'
export default {
  name: "MySchool",
  data(){
    return{
      name:'川电机'
    }
  },
 mounted(){
  //订阅消息
  this.pubId= pubsub.subscribe('hello',(msgName,data)=>{
    console.log('有人发布了hello消息',msgName,data);
  })
 },
 beforeUnmount() {
  //取消订阅
  pubsub.unsubscribe(this.pubId)
 },
};
</script>

<!-- scoped 让样式只在这个组件中生效，不会影响其他组件 -->
<style scoped lang="less">
  .box{
    background-color:red;
    .demo{
      font-size: 30px;
    }
  }
</style>