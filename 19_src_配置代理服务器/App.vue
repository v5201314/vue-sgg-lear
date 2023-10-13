<template>
  <!-- 在Vue.config.js中配置代理服务器
    如果当前的public中有请求的资源,则不会请求代理的服务器
      //开启代理服务器
  devServer:{
    //写需要请求的服务器的位置
    proxy:'http://localhost:5000'
  }
   -->
  <div>
    <button @click="getVcode">点击获取验证码</button>
    <img src="http://localhost:8080/api/tomcat1/vcode" alt="" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getVcode() {
      axios.get("http://localhost:8080/api/tomcat1/vcode").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

