<template>
 <div>
  <h1>当前求和为：{{ count }}</h1>
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
    name:'MyCount',
  data(){
    return{
      count:0,
      n:1
    }
  },
  methods:{
    increment(){
      this.count+=this.n;
    },
    decrement(){
      this.count-=this.n;
    },
    incrementOdd(){
      if(this.count%2){
      this.count+=this.n;
    }
    },
    incrementWait(){
     setTimeout(()=>{
      this.count+=this.n;
     },500)
    },
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