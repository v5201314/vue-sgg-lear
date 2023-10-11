<template>
  <div>
    <MyStudent msg="我是川电机的学生" :age="18"></MyStudent>
    <MyStudent msg="我是川电机的学生" ></MyStudent>
  </div>
</template>

<script>
import MyStudent from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    MyStudent,
  },
};
</script>

<style>
</style>