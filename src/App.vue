<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
   sendMsg(msg) {
      console.log(msg);
   },
  },
   mounted() {
   // this.$bus.$on('sendMsg', this.sendMsg)
   },
   beforeDestroy() {
    //this.$bus.$off('sendMsg') //取消监听
   },	
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
