<template>
	<div>
		这是在测试的子组件 是子组件
		<div>{{context}}</div>
		<childrenss :contextsun="context" />
	</div>
</template>
<script>
	import childrenss from './child'
	export default{
		components:{
			childrenss
		},
		props:{
      context:{
      	type:String
      }
		},
		data(){
			return {
				
			}
		},
		created(){
      console.log('这是子组建的created');
		},
		beforeMount(){
      console.log('子组件的 beforeMount');
		},		
		mounted(){
			console.log('这是子组建的mounted');
		},
		methods:{

		}
	}
</script>