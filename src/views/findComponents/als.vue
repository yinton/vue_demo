<template>
	<div>
	  <div class="z-padding-all-10px z-bg-ff8">向上找到最近的指定组件——findComponentUpward</div>
	  <div>
	  	<alss />
	  </div>	 
	</div>
</template>
<script>
  import { findComponentUpward } from '@/utils/assist.js'
  import alss from './alss.vue'
	export default {
  name: 'componentD',
  components:{alss},
	data(){ 
		return {
		
		}
	},
	methods:{
		dataPrting(){
			console.log('被调用了的子组件的方法');
		}  
	},
    mounted () {
     const comA = findComponentUpward(this, 'componentC');
      if (comA) {  //加了一层 if (comA) 来判断是否找到了组件 A，如果没有指定的组件而调用的话，是会报错的。
       console.log(comA.name);  // Aresn
       comA.sayHello();  // Hello, Vue.js
      }
    }		
 }
</script>