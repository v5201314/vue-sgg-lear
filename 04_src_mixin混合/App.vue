<template>
  <div>
    <MyStudent msg="我是川电机的学生" ></MyStudent>
    <MySchool></MySchool>
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
};
</script>

<style>
</style>