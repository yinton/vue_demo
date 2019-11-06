<template>
  <transition name="move">
    <div class="food-boxs">
      <div @click="returns">
      	返回》
      </div>    
    </div> 
  </transition> 
</template>
<script>
export default {
  data(){
    return {
       
    }
  },
  methods:{
    returns(){
    	this.$emit('input',false);
    }
  }
}
</script>
<style scoped>
.move-enter-active{
    transform:translate3d(0,0,0);
}
.move-enter,.move-leave-to{
    transform:translate3d(100%,0,0);
}
.food-boxs{
  position:fixed; 
  left:0;
  top:0;
  bottom:48px;
  z-index:30;
  width:100%;
  background:red;
  transition:all 0.5s;
  overflow-y: scroll;	
}
</style>