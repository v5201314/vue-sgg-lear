<template>
  <div>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>React Router Demo</h2></div>
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
      </div>
  </div>
</template>

<script>
export default {
    name:'MyBanner',
    methods:{
        back(){
            this.$router.back()
        },
        forward(){
            this.$router.forward()
        }
    }
}
</script>

<style>

</style>