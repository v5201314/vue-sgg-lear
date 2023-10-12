<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name 决定播放哪一组动画 appear 决定首次登场播不播放动画-->
    <transition-group name="hello" appear>
        <h1 v-show="!isShow" key="1">你好啊!</h1>
        <h1 v-show="isShow" key="2">余生tt!</h1>
    </transition-group>
  
  </div>
</template>

<script>
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
  /* 如果不配置这个 过渡就没有效果，0s完成 */
  /* transition: 0.5s linear; */
}
/* 进入的起点 离开的终点 */
.hello-enter, .hello-leave-to{
  transform: translateX(-100%);
}
/* 这样配置过渡效果也可以 */
.hello-enter-active,.hello-leave-active{
  transition: 0.5s linear;
}


/* 进入的终点 离开的起点*/
.hello-enter-to, .hello-leave{
  transform: translateX(0);
}


</style>