<template>
	<div>
		这是在测试的孙组件 是孙组件 
		<div class="z-padding-v-10px z-bg-ff8">{{contextsun}}</div>
	</div>
</template>
<script>
	export default{
		props:{
      contextsun:{
      	type:String
      }
		},
		data(){
			return {
				
			}
		},
		created(){
      console.log('这是孙孙孙组建的created');
		},
		mounted(){
			console.log('这是孙孙孙组建的mounted');
		},
		methods:{

		}
	}
</script>
