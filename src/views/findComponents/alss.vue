<template>
 <div>
   <div class="z-padding-all-10px z-bg-ff8">向上找到所有的指定组件——findComponentUpward 现为孙组件了</div>	 
 </div>
</template>
<script>
  import { findComponentsUpward } from '@/utils/assist.js';
  export default {
    name: 'componentE',
	data(){
	  return {
    
	  }
	},
	methods:{

	},
    mounted () {
     const comA = findComponentsUpward(this, 'componentC');
      //if (comA) {  //加了一层 if (comA) 来判断是否找到了组件 A，如果没有指定的组件而调用的话，是会报错的。
       // console.log(comA.name);  // Aresn
       // comA.sayHello();  // Hello, Vue.js
     // }
     console.log(comA) //数组，其中有一些
    }		
  }
</script>