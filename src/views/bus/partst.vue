<template>
  <div>
    <div class="z-padding-all-10px z-bg-80d" @click="partsBus()"> 
      点击传值到兄弟组件postsot22222
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

    }
  },
  methods:{
    partsBus(){
     this.$bus.$emit('sendMsgx','bus组件de 一个子组件传出去的值');  
    },
  }
}
</script> 
<style scoped>
  
</style>
