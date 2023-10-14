<template>
  <div class="count">
    <h1>我是Count组件</h1>
    <h1>当前求和为：{{ count }}</h1>
    <h3>当前求和放大10倍为：{{ bigCount }}</h3>
    <h3>Person组件的总人数是：{{ personList.length }}</h3>
    <h3>我是{{ student }},来自{{ school }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- 如果使用了 mapMutations 那么在调用方法的时候就要把参数传递进去 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState('countAbout',["count", "student", "school"]),
    ...mapState('personAbout',['personList']),
    ...mapGetters('countAbout',["bigCount"]),
  },
  methods: {
    // 借助 mapMutations 生成对应的方法 (都有对应的数组写法)
    ...mapMutations('countAbout',{
      increment: "JIA",
      decrement: "JIAN",
    }),

    // 借助 mapActions 生成对应的方法
    ...mapActions('countAbout',{
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait",
    }),
  },
};
</script>

<style>
.count {
  background-color: pink;
}
</style>