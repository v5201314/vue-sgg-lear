<template>
  <div>
    <h3>我是About的内容</h3>
  </div>
</template>

<script>
export default {
  name: "MyAbout",
  //通过路由规则，进入该组件时调用
  beforeRouteEnter(to, from, next) {
    console.log("去哪里", to);
    console.log("来自哪里", from);
    //读取目标位置是否需要校验
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "gystt") next();
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时调用
  beforeRouteLeave(to, from, next) {
    next()
  },
};
</script>

<style>
</style>