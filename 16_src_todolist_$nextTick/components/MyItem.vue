<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.done"
        @change="handleCheck(todoObj.id)"
      />
      <!--v-model="todoObj.done" 不能使用，因为不能直接修改props传递的数据  -->
      <!-- <input type="checkbox" v-model="todoObj.done" /> -->
      <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
      <input
        v-show="todoObj.isEdit"
        type="text"
        :value="todoObj.title"
        @blur="handBlur(todoObj,$event)"
        ref="ipt"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todoObj.id)">删除</button>
    <button class="btn btn-edit" v-show="!todoObj.isEdit" @click="handEdit(todoObj)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todoObj"],
  methods: {
    //改变状态
    handleCheck(id) {
      this.$bus.$emit("changeDone-dd", id);
    },
    //删除
    deleteTodo(id) {
      if (confirm("确定删除吗?")) {
        console.log(id);
        this.$bus.$emit("removeTodo-dd", id);
      }
    },
    //编辑
    handEdit(todoObj) {
      if (Object.prototype.hasOwnProperty.call(todoObj,"isEdit")) {
        todoObj.isEdit = true;
      } else {
        this.$set(todoObj, "isEdit", true);
      }
      // $nextTick的回调方法在下一次DOM更新后调用
      this.$nextTick(function(){
        this.$refs.ipt.focus()
      })
    },
    //失去焦点
    handBlur(todoObj,event) {
      todoObj.isEdit = false;
      if(event.target.value.trim()==='') return alert('修改不能为空')
      this.$bus.$emit('updateTodo',todoObj.id,event.target.value)
    },
  },
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

li .btn {
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

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
