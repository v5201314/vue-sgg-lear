<template>
  <div class="app">
    <h1>{{ msg }}学生的姓名是：{{ studentName }}</h1>
    <MySchool></MySchool>
    <hr/>
    <MyStudent ></MyStudent>

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
};
</script>

<style>
.app {
  background-color: #ddd;
}
</style>