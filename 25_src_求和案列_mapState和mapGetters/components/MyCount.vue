<template>
  <div>
    <h1>当前求和为：{{ count }}</h1>
    <h3>当前求和放大10倍为：{{ bigCount }}</h3>
    <h3>我是{{ student }},来自{{ school }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // student(){
    //   return this.$store.state.student
    // },
    // school(){
    //   return this.$store.state.school
    // }

    //借助mapState生成计算属性 (对象写法)
    // ...mapState({
    //   count: "count",
    //   student: "student",
    //   school: "school",
    // }),

    //借助mapState生成计算属性 (数组写法) 当计算属性与state中的属性同名时，可以用数组方法简写
    ...mapState(['count','student','school']),

    /***************************************************** */

    // bigCount() {
    //   return this.$store.getters.bigCount;
    // },

    //对象写法
    // ...mapGetters({
    //   bigCount:'bigCount'
    // })

    //数组写法
    ...mapGetters(['bigCount']),
  },
  methods: {
    increment() {
      //由于没有其他的业务逻辑 这里可以直接调用 commit
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      //由于有其他的业务逻辑 这里调用 dispatch
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

