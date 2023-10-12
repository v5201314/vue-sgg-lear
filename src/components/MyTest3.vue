<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name 决定播放哪一组动画 appear 决定首次登场播不播放动画-->
    <transition-group 
    name="animate__animated animate__bounce" 
    appear
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    >
        <h1 v-show="!isShow" key="1">你好啊!</h1>
        <h1 v-show="isShow" key="2">余生tt!</h1>
    </transition-group>
  
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "MyTest2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}


</style>