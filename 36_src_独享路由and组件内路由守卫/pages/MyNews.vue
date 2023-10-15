<template>
  <ul>
    <li :style="{ opacity }">欢迎学习vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity: 1,
      n: 0,
    };
  },

  //当组件激活时调用
  activated(){
    console.log('组件激活了');
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  //当组件失活时调用
  deactivated(){
    console.log('组件失活了');
    clearInterval( this.timer)
  }













//   mounted() {
//     this.timer = setInterval(() => {
//       this.opacity -= 0.01;
//       if (this.opacity <= 0) this.opacity = 1;
//     }, 16);
//   },
//   beforeUnmount() {
//     clearInterval( this.timer)
//   },
};
</script>

<style>
</style>