<template>
  <div class="box">
    <MyCategory title="美食" :listData="foods">
      <!-- slot="center" 指定展示的插槽名 -->
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="">更多美食</a>
    </MyCategory>

    <MyCategory title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="">单机游戏</a>
        <a href="">网络游戏</a>
      </div>
    </MyCategory>

    <MyCategory title="电影" :listData="films">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 在template标签上 可以这样写 v-slot:footer -->
      <template v-slot:footer>
        <div class="foot">
          <a href="">经典</a>
          <a href="">热门</a>
          <a href="">悬疑</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
export default {
  name: "App",
  components: {
    MyCategory,
  },
  data() {
    return {
      foods: ["火锅", "小龙虾", "烧烤", "牛排"],
      games: ["原神", "王者荣耀", "no more room in hell"],
      films: ["《教父》", "《拆弹专家》", "《一个人的武林》"],
    };
  },
};
</script>

<style>
.box,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
h4{
  text-align: center;
}
</style>