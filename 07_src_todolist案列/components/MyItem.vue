<template>
  <li>
    <label>
      <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)" />
      <!--v-model="todoObj.done" 不能使用，因为不能直接修改props传递的数据  -->
      <!-- <input type="checkbox" v-model="todoObj.done" /> -->
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props:['todoObj','changeDone','removeTodo'],
  methods:{
    handleCheck(id){
      console.log(id);
      this.changeDone(id)
    },
    deleteTodo(id){
      if(confirm("确定删除吗?")){
        console.log(id);
        this.removeTodo(id)
      }
    }
  }
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li .btn{
  display: none;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>
