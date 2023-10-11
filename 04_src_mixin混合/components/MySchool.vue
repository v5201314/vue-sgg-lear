<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <button  @click="showName">点我显示学校名称</button>
  </div>
</template>

<script>
import { hunhe } from '@/mixin';
export default {
  name: "MySchool",
  data(){
    return{
      name:'川电机'
    }
  },
  mounted(){
    console.log('你好啊!!!!!!');
  },
 mixins:[hunhe]
};
</script>

<style>
  h2{
    color:red;
  }
</style>