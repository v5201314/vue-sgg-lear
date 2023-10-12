<template>
  <div class="box">
    <h2>学校名称：{{ name }}</h2>
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
    background-color:red;
    .demo{
      font-size: 30px;
    }
  }
</style>