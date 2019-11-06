<template>
 <div> 
 	<div class="z-textAlign-center z-bg-ff8 z-padding-v-5px z-bold z-width-100-percent">
 	   <div class="content z-letter-1">就说一下路由守卫,可以在路由组件内直接定义路由导航守卫，也就是直接在组件内定义,可以点击浏览器自带返回查看守卫效果</div>
 	</div>
 </div>
</template>
<script>
	export default {
		data() {
			return {
        name:'router路由'
			}
		},
   beforeRouteLeave:(to,from,next)=>{
      if(confirm("确定离开吗")==true){
        next()  //进入路由
      }else{
        next(false)
      }
    },
    beforeRouteEnter:(to,from,next)=>{
     next(vm =>{
       alert('Hello'+vm.name);
     })    
	}
}	
</script>
<style scoped>
.content{display:inline-block;text-align:left;}
</style>