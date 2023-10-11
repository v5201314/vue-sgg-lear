<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <button  @click="test">点击测试全局的hello方法</button>
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

<style>
  h2{
    color:red;
  }
</style>