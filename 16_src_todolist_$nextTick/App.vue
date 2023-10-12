<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @receive="receive"/>
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos:JSON.parse(localStorage.getItem('todos'))||[]
    };
  },
  methods:{
    //添加一个待办事项
    receive(todoObj){
      this.todos.unshift(todoObj)
    },
    //改变事项的完成状态
    changeDone(id){
      this.todos.forEach(todo => {
        if(todo.id===id) {
          todo.done = !todo.done
        return
        }
      });
    },
    //删除一个事项
    removeTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id!==id 
      })
      console.log("hhh");
    },
    //全选按钮
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    //删除已完成
    clearAllTodo(){
      this.todos.filter((todo)=>{
        return todo.done===false
      })
    },
    //更新数据
    updateTodo(id,data){
      this.todos.forEach((todo)=>{
        if(todo.id===id){
          todo.title=data
        }
      })
    }
  },
  watch:{
    // todos(value){
    //   localStorage.setItem('todos',JSON.stringify(value))
    // }

    //如果要操作数组或者对象内部的数据，请开启深度监视
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on('changeDone-dd',this.changeDone)
    this.$bus.$on('removeTodo-dd',this.removeTodo)
    this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeUnmount() {
    this.$bus.$off('changeDone-dd')
    this.$bus.$off('removeTodo-dd')
    this.$bus.$off('updateTodo')
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #49da4b;
  border: 1px solid #49da4b;
  margin-right: 3px;
}


.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>