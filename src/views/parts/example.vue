<template>
  <div>
    <i-button class="z-font-13" ref="comA" disabled size="large">
      <span slot="test">span</span>
      <span>按钮</span>
    </i-button>
    <i-button class="z-font-13" ref="comA" disabled size="small">
      <span slot="test">22</span>
      <span>按钮2</span>
    </i-button>
  </div>
</template>

<script>
// @ is an alias to /src
import iButton from '@/views/parts/button.vue'

export default {
  components: {
    iButton
  },
  data(){
    return {
      data:'',
      disabled:true,
    }
   },
   methods:{

   },
   mounted() {
     const comA = this.$refs.comA;
     console.log(comA.title);         
   },
}
</script> 
<style scoped>
  
</style>
