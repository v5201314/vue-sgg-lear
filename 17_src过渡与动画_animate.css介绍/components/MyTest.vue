<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- name 决定播放哪一组动画 appear 决定首次登场播不播放动画-->
    <transition name="hello" appear>
        <h1 v-show="isShow" class="come">你好啊!</h1>
    </transition>
  
  </div>
</template>

<script>
export default {
  name: "MyTest",
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
/* hello 为 transition标签的 name 
   -enter-active 与 -leave-active 为固定写法
*/
.hello-enter-active{
    animation: gystt 1s;
}
.hello-leave-active{
    animation: gystt 1s reverse;
}

@keyframes gystt {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>