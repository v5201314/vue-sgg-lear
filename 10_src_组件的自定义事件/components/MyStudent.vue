<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名交给App</button>
    <button @click="unbind">解绑自定义事件——ystt</button>
    <button @click="death">销毁组件实例对象</button>

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
    sendStudentName(){
      //触发组件自定义事件
      this.$emit('ystt',this.name)
    },
    unbind(){
      //解绑一个自定义事件
      this.$off('ystt')
      //解绑多个自定义事件 写到一个数组中
      //this.$off(['自定义事件名1','自定义事件名2',...])
      //解绑所有自定义事件 不传入参数
      //this.$off()
    },
    death(){
      this.$destroy()
    }
  }

  
};
</script>

<style>
.student {
background-color: pink;
}
</style>