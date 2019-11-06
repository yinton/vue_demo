<template>
	<div>
		这是在测试的父组件
		<textl :context="datas" />
		<div class="z-bg-80d">
			<div class="z-padding-v-10px">触发顺序大概是这个样子的。。。</div>
			<div>父亲组建的created</div> 
			<div>子组建的created</div> 
			<div>子组建的mounted</div> 
			<div>父亲组建的mounted</div> 
		</div>  
		<div class="z-padding-v-15px z-bg-ff8">所以这里就有了一个问题，当你在父组件中的mounted中处理了一个data中的数据，如果原始值为空，那么子组件中的mounted中是打印不出来的，created中也不行，因为父组件中的mounted最后才会执行,但是修改了的值是会正确显示在子组件的dom中的</div>
		<div class="z-padding-v-10px">下面要探讨的是孙组件的问题下面显示触发顺序</div>
		<div class="z-padding-v-10px">
			<div>父亲组建的created</div>
			<div>子组建的created</div>	
			<div>孙孙孙组建的created</div>	
			<div>孙孙孙组建的mounted</div>	
			<div>子组建的mounted</div>	
			<div>父亲组建的mounted</div>			
		</div>
	</div>
</template>
<script>
	import textl from './login'
	export default{
		components:{
			textl
		},
		data(){
			return {
				datas:''
			}
		},
		beforeMount(){
      console.log('父组件的 beforeMount');
		},
		created(){
      console.log('这是父亲福福福组建的created');
		},
		mounted(){
			console.log('这是父亲福福福组建的mounted');
			this.datas = '处理了的值我我我';
		},
		methods:{

		}
	}
</script>
