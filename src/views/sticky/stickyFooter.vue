<template> 
	<div>
		<div class="popu">
			<span class="" @click="pop(0)">flex布局演示</span> 
			<span class="z-margin-left-20px" @click="pop(1)">经典套路：padding-bottom + margin-top</span>
		</div>
    <div class="box" v-if="active===0">
	    <div class="z-padding-v-10px">flex布局演示</div>
	    <div class="content">
	        <p v-for="(item,index) in 7" :key="index">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
	    </div>
	    <div class="z-padding-v-10px z-bg-ff9">
	        <p>This is footer</p>
	    </div> 
	  </div>
	  <div v-if="active===1">
	    <div class="wrapper clearfix">
        <div class="title">Sticky Footer</div>
        <div class="contentx">
            <p v-for="(item,index) in 17" :key="index">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
        </div>
	    </div>
	    <div class="footer z-bg-ff9">
	      <p>This is footer</p>
	    </div>		  	
	  </div>    
	</div>
</template>
<script>
	export default {
		data(){
			return {
        active:0,
			}
		},
		methods:{
		  pop(i){
        this.active = i;    
		  }
		}
	}
</script>
<style scoped>
 .content{
	  flex: 1;
 }	
 .box{
 		display: flex;
	  flex-flow: column;
	  min-height: 100vh;
 }
 .popu{
 	 position:fixed;
 	 top:0;
 	 left:0%;
 	 background-color:rgba(102, 153, 153, .5);
 	 color:red;
 	 padding:15px 5px;
 	 font-weight: bold;
 }
.wrapper{
    min-height: 100vh;
}
.contentx{
    padding-bottom: 50px;
}
.footer{
    height: 50px;
    margin-top: -50px;
}
</style>