<template>
  <div class="Category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 -->
     <slot name="center" >这里写默认值</slot>
     <slot name="footer" >这里写默认值</slot>
  </div>
</template>

<script>
export default {
    name:'MyCategory',
    props:['title']
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