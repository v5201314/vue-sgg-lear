<template>
  <div class="app">
    <h1>{{ msg }}学生的姓名是：{{ studentName }}</h1>
    <MySchool></MySchool>
    <hr />
    <!-- 通过自定义事件实现子向父传递信息 使用v-on实现 -->
    <MyStudent v-on:ystt="demo"></MyStudent>

    <!-- 通过自定义事件实现子向父传递信息 使用ref实现 更加灵活-->
    <MyStudent ref="student"></MyStudent>
    
    <!-- @click="test" 这里写的原生的点击事件 但是默认 click 为自定义事件 -->
    <!-- <MyStudent ref="student" @click="test"></MyStudent> -->

    <!-- @click.native="test" 加上 native修饰后 就是原生的点击事件 并且会将这个事件添加到 MyStudent组件最外层的标签上-->
    <!-- <MyStudent ref="student" @click.native="test"></MyStudent> -->
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
import MySchool from "./components/MySchool.vue";
export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,
  },
  data() {
    return {
      msg: "你好啊!",
      studentName: "",
    };
  },
  methods: {
    demo(name) {
      console.log("demo方法被调用了", name);
      this.studentName = name;
    },
    test() {
      console.log("我是原生事件");
    },
  },
  mounted() {
    this.$refs.student.$on("ystt", this.demo);
    //只触发一次
    // this.$refs.student.$once('ystt',this.demo)
  },
};
</script>

<style>
.app {
  background-color: #ddd;
}
</style>