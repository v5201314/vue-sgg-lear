<template>
  <div>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li>
            <router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <ul>
          <!-- include="MyNews" 如果这里不配置include="这里写组件名" 那么这里的所有组件都会被缓存 -->
          <!-- 有多个要缓存的话 :include="['组件一','组件二']" -->
          <keep-alive include="MyNews">
            <router-view></router-view>
          </keep-alive>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
};
</script>

<style>
</style>