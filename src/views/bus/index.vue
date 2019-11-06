<template>
  <div>
     <div class="z-padding-all-10px" @click="bus">点击按钮传值</div>	
     <partso />
     <partst /> 
  </div>
</template>
<script>
import partso from '@/views/bus/partso.vue'
import partst from '@/views/bus/partst.vue'
export default {
  components: {
    partso,
    partst, 
  },
  data(){
    return {

    }
  },
  methods:{
    bus(){
     this.$bus.$emit('sendMsg','bus组件传出去的值');  
    },
  }
}
</script> 
<style scoped>
  
</style>
