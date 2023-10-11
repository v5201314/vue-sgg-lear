<template>
  <div>
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
  }
};
</script>

<style>
  h2{
    color:red;
  }
</style>