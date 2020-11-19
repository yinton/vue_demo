<template> 
	<div>  
		<div v-for="(item,index) in childProduc" :key="index">{{item.name}} | {{item.price}}</div>
		<div>
			<div>上一级目录中添加的值</div>
			<div v-for="(item,index) in childProducTxt" :key="index">{{item}}</div>
		</div> 
		<div>
			{{resourcePro}} 
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		mounted() {
			console.log('跳转的页面的。。。'); 
		},
		computed:{ 
		  childProduc(){
				return this.$store.state.products; 
			},	
			childProducTxt(){
				return this.$store.state.productTxt; 
			},	
			resourcePro(){
				return this.$store.state.resource; 
			},		  	
		}
	}
</script>