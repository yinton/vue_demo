<template>
	<div class="box">
		<h1>顶部高200px 红线为中线 
			<div class="z-padding-top-10px jkl" @click="$router.push('/stickyFooter')">点击看看 Sticky footer完美底部布局</div>
		</h1>
		<nav>这是导航 top:150px</nav>
		<p>滚一个</p>
		<p>滚一个</p>		
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
 nav{
   position:sticky;
   position:-webkit-sticky;
   top:40px; /* 阈值 */
   padding:20px 0;
   background-color:rgba(255, 153, 102, .7);
	 margin-top:30px;
	 height:300px;
 }
 p{height:60vh;background-color: #eee;}
 h1{height:150px;border-bottom:1px solid red;text-align:center;}
 .jkl{color:red;}
</style>