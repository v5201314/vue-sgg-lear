<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="chuandi">点击把学生姓名传递给兄弟组件School</button>
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
  methods:{
    chuandi(){
      this.$bus.$emit('hello',this.name)
    }
  }
};
</script>

<style>
.student {
background-color: pink;
}
</style>