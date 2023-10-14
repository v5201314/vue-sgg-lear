<template>
  <div class="person">
    <h1>我是Person组件</h1>
    <h3>Count组件中的count值:{{ count }}</h3>
    <h3>列表中第一个人的名字是：{{ fristPersonName }}</h3>
    <input type="text" placeholder="添加一个人" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <h1>人员列表</h1>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { nanoid } from 'nanoid';
export default {
  name: "MyPerson",
  data(){
    return{
        name:''
    }
  },
  computed: {
    count(){
        return this.$store.state.countAbout.count
    },
    personList(){
        return this.$store.state.personAbout.personList
    },
    fristPersonName(){
        return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods:{
    add(){
        if(this.name.trim()=='') return alert('输入不能为空')
        const person = {
            id:nanoid(),
            name:this.name
        }
        this.$store.commit('personAbout/ADD_PERSON',person)
        this.name=''
    },
    addWang(){
        if(this.name.trim()=='') return alert('输入不能为空')
        const person = {
            id:nanoid(),
            name:this.name
        }
        this.$store.dispatch('personAbout/addPersonWang',person)
        this.name=''
    }
}
};
</script>

<style>
.person{
    background-color: orange;
}
</style>