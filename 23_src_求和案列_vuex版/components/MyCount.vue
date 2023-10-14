<template>
  <div>
    <h1>当前求和为：{{ $store.state.count }}</h1>
    <h3>当前求和放大10倍为：{{ $store.getters.bigCount }}</h3>
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
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
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

