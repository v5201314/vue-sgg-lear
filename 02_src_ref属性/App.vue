<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点击输出上方的DOM元素</button>
    <MySchool ref="sch"></MySchool>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: {
    MySchool
  },
  data(){
    return{
        msg:'欢迎来到川电机'
    }
  },
  methods:{
    showDOM(){
        console.log(this.$refs.title);//真实 DOM对象
        console.log(this.$refs.sch);// 组件实例对象
    }
  }
};
</script>

<style>
</style>