<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带 query 参数， -->
        <router-link
          :to="{
            name: 'detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
        <!-- 编程式路由导航 通过按钮绑定方法跳转 -->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  methods: {
    pushShow(m) {
        this.$router.push({
            name: 'detail',
            query: {
              id: m.id,
              title: m.title,
            },
        },()=>{},()=>{})
    },
    replaceShow(m) {
        this.$router.replace({
            name: 'detail',
            query: {
              id: m.id,
              title: m.title,
            }
            // ()=>{},()=>{} 这两个是成功和失败的回调，不传就会报错
        },()=>{},()=>{})
    },
  },
};
</script>

<style>
</style>