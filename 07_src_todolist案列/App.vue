<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"/>
        <MyList :todos="todos" :changeDone="changeDone" :removeTodo="removeTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
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
      todos: [
        {
          id: "001",
          title: "学Vue",
          done: false,
        },
        {
          id: "002",
          title: "做作业",
          done: true,
        },
        {
          id: "003",
          title: "打游戏",
          done: false,
        },
      ],
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
      this.todos=this.todos.filter((todo)=>{
        return todo.done===false
      })
    }
  }
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