<template>
<transition name="move">
  <div class="inpBok">
    <div class="z-padding-v-10px z-bg-80d" v-for="(item,index) in 5" :key="index">asd</div>  
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

		}
	}
</script>
<style scoped>
.move-enter-active{
  transform:translate3d(0,0,0);
  -webkit-transform:translate3d(0,0,0);
}
.move-enter,.move-leave-to{
  transform:translate3d(0,100%,0);
  -webkit-transform:translate3d(0,100%,0);
}
.inpBok{
  position:fixed; 
  left:0;
  bottom:0px;
  width:100%;
  transition:all 0.3s;  
}
</style>