<template> 
	<div>  
		<div v-for="(item,index) in childProduc" :key="index">{{item.name}}{{item.price}}</div>
		<div>
			<div>上一级目录中添加的值</div>
			<div v-for="(item,index) in childProducTxt" :key="index">{{item}}</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		computed:{ 
		  childProduc(){
			   return this.$store.state.products; 
	  	},	
		  childProducTxt(){
			   return this.$store.state.productTxt; 
	  	},		  	
		}
	}
</script>