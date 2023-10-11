<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge}}</h2>
    <button @click="updateAge">点击修改年龄</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "余生",
      sex: "男",
      myAge:this.age,
    };
  },
  //简单接受，不能限制接受类型
  //props:['msg','age']

  //可以限制接受类型
  // props:{
  //   msg:String,
  //   age:Number,
  // }

  //可以限制接受类型,并且规定是否必须传入，与设置默认值
 methods:{
  updateAge(){
    this.myAge = 99;
  }
 },
  props: {
    msg: {
      //限制类型
      type: String,
      //设置是否必传
      require: true,
    },
    age: {
      type: Number,
      //设置默认值
      default: 20,
    },
  },
};
</script>

<style>
h2 {
  color: red;
}
</style>