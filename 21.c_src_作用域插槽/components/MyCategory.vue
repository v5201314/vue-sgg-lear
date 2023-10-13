<template>
  <div class="Category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title'],
    data(){
      return{
        games: ["原神", "王者荣耀", "no more room in hell"],
      }
    }
}
</script>

<style>
.Category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3{
  text-align: center;
   background-color: orange;
}

</style>