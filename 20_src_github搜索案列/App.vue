<template>
  <div class="container">
    <MySearch></MySearch>
    <MyList></MyList>
  </div>
</template>

<script>
import MyList from "./components/MyList.vue";
import MySearch from "./components/MySearch.vue";
export default {
  name: "App",
  components: {
    MySearch,
    MyList,
  },
};
</script>

<style>
</style>