<template>
  <div class="box">
    <MyCategory title="游戏">
     <template scope="slot_data"> 
      <ul >
        <li v-for="(item, index) in slot_data.games" :key="index">{{ item }}</li>
      </ul>
     </template>
    </MyCategory>
    <MyCategory title="游戏">
      <!-- slot-scope 和 scope 效果一样 slot-scope是新api-->
     <template slot-scope="slot_data"> 
      <ol >
        <li style="color: red;" v-for="(item, index) in slot_data.games" :key="index">{{ item }}</li>
      </ol>
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
h4 {
  text-align: center;
}
</style>