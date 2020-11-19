<template>
 <div>
	<div class="z-padding-all-10px z-hei30">前面的小节我们已经介绍了两种组件间通信的方法：provide / inject 和 dispatch / broadcast。它们有各自的使用场景和局限，比如前者多用于子组件获取父组件的状态，后者常用于父子组件间通过自定义事件通信。
	本节将介绍第 3 种组件通信方法，也就是 findComponents 系列方法，它并非 Vue.js 内置，而是需要自行实现，以工具函数的形式来使用，它是一系列的函数，可以说是组件通信的终极方案。findComponents 系列方法最终都是返回组件的实例，进而可以读取或调用该组件的数据和方法。
	它适用于以下场景：
 <p class="z-bg-ff8">由一个组件，向上找到最近的指定组件；</p>	
 <p class="z-bg-b3b">由一个组件，向上找到所有的指定组件；</p>	
 <p class="z-bg-80d">由一个组件，向下找到最近的指定组件；</p> 
 <p class="z-bg-ff9">由一个组件，向下找到所有指定的组件；</p> 
 <p class="z-bg-fd4"> 由一个组件，找到指定组件的兄弟组件。</p> 
  5 个不同的场景，对应 5 个不同的函数，实现原理也大同小异。
 </div>
 <div class="z-padding-all-5px">5 个函数的原理，都是通过递归、遍历，找到指定组件的 name 选项匹配的组件实例并返回。
   本节以及后续章节，都是基于上一节的工程来完成，后续不再重复说明。下面就具体讲一下</div>
 <div class="z-margin-top-10px">与 dispatch 不同的是，findComponentUpward 是直接拿到组件的实例（无需触发），而非通过事件通知组件。比如下面的示例component-a是其子组件，在 子 中获取和调用 父 中的数据和方法：</div>
 <div class="z-margin-top-10px z-bg-80d">找到子的数据或方法就在父组件的mounted或者created中监听，反之亦然</div>
 <div>
 	  <component-a></component-a>
 </div>
  <div class="z-margin-top-10px">
 	  <component-b></component-b>
 </div>
   <div class="z-margin-top-10px">
    <component-b></component-b>
 </div>
 <div class="z-bg-ff9 z-padding-v-7px">向下找到最近的指定组件——查看console</div>
 <div class="z-bg-fd4 z-padding-v-7px">找到指定组件的兄弟组件——查看console</div>
 </div>
</template> 
<script>
import { findComponentDownward } from '@/utils/assist.js';	
import componentA from './als.vue' 
import componentB from './alsx.vue' 
export default { 
	name: 'componentC',
	components:{
    componentA, 
    componentB,
	},
  data(){
    return {
      name: 'Aresn',
    }
  },
  methods: {
    sayHello () {
      console.log('Hello, Vue.js子调用父的数据和方法，注意这里不是也不能通过事件通知组件，子即可拿到父的数据和方法');
    },
  },
  mounted () {
    const comB = findComponentDownward(this, 'componentD');
    if (comB) {
      comB.dataPrting();  // 被调用了的子组件的方法
    }
  }    
}
</script>