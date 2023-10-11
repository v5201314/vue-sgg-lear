<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "余生",
      sex: "男",
    };
  },

  
};
</script>

<style>
h2 {
  color: red;
}
</style>