<template>
  <div class="box">
    <h2>学校名称：{{ name }}</h2>
    <button  @click="test">点击测试全局的hello方法</button>
    <p class="demo">测试less</p>
  </div>
</template>

<script>
export default {
  name: "MySchool",
  data(){
    return{
      name:'川电机'
    }
  },
  methods:{
    test(){
      this.hello()
    }
  }
};
</script>

<!-- scoped 让样式只在这个组件中生效，不会影响其他组件 -->
<style scoped lang="less">
  .box{
    color:red;
    .demo{
      font-size: 30px;
    }
  }
</style>