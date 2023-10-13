<template>
  <div class="box">
    <MyCategory title="美食" :listData="foods">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </MyCategory>

    <MyCategory title="游戏" >
      <ul>
        <li v-for="item,index in games" :key="index">{{ item }}</li>
      </ul>
    </MyCategory>

    <MyCategory title="电影" :listData="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </MyCategory>
  </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue';
export default {
  name: "App",
  components: {
    MyCategory,
  },
  data(){
    return{
      foods:['火锅','小龙虾','烧烤','牛排'],
      games:['原神','王者荣耀','no more room in hell'],
      films:['《教父》','《拆弹专家》','《一个人的武林》']
    }
  }
};
</script>

<style>
.box{
  display: flex;
 justify-content: space-around;
}
video{
  width: 100%;
}
img{
  width: 100%;
}

</style>