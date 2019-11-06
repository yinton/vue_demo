<template>
 <div>
   <div class="z-padding-all-10px z-bg-ff8">找到指定组件的 兄de组件——findComponentUpward  兄弟组件说滴就是本身被调用了多次，就是同一个组件多次被使用了，找出几次，就有几个兄弟</div>	 
 </div>
</template>
<script>
  import { findBrothersComponents } from '@/utils/assist.js';
  export default { 
    name: 'componentF',
	data(){
	  return {
    
	  }
	},
	methods:{

	},
    mounted () { 
     const comF = findBrothersComponents(this, 'componentF');
      //if (comA) {  //加了一层 if (comA) 来判断是否找到了组件 A，如果没有指定的组件而调用的话，是会报错的。
       // console.log(comA.name);  // Aresn
       // comA.sayHello();  // Hello, Vue.js
     // }
     if(comF){
        console.log('找到兄弟组件')
        console.log(comF) //数组，其中有一些
        console.log('找到兄弟组件')      
      }
    }		
  }
</script>