<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin'
export default {
  name: "MyStudent",
  data() {
    return {
      name: "余生",
      sex: "男",
    };
  },
 mixins:[hunhe,hunhe2]
  
};
</script>

<style>
h2 {
  color: red;
}
</style>