<template>
  <div>
    <div class="z-padding-all-10px z-bg-ff8">
      postso1111111 
      {{data}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // components: {
  //   HelloWorld
  // }
  data(){
    return {
      data:'',
    }
  },
  methods:{
   sendMsg(msg) {
      console.log(msg);
      this.data = msg;
    },
   },
   mounted() {
     this.$bus.$on('sendMsgx', this.sendMsg)
   },
   beforeDestroy() {
     this.$bus.$off('sendMsgx') //取消监听
   }, 
}
</script> 
<style scoped>
  
</style>
