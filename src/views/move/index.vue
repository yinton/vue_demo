<template>
	<div>
		<div ref="divx" class="odiv" id="odiv" @mouseover="changeStatus()" @mouseout="returnStatus()">move</div>
		<div>运动函数可以支持链式调用</div>
	</div>
</template>
<script>
	import movex from './minis/moves.js'
	export default {
		mixins: [ movex ], 
		methods:{
			changeStatus() {
				let odivv=document.getElementById('odiv');
				let odivx = this.$refs.divx;
				// console.log(odivx)
				// console.log(odivv)
				this.startMove(odivx, {width: 300, height: 300, opacity: 40, fontSize:30},()=> {
					  this.startMove(odivx, {height:600}); 
				});
			},
			returnStatus() {
				let odivx=document.getElementById('odiv');
				this.startMove(odivx, {width: 100, height: 100, opacity: 100, fontSize:16});				
			}
		}
	}
</script>
<style scoped>
	.odiv {
    width:100px;
    height:100px;
    background-color:red;
	}
</style>