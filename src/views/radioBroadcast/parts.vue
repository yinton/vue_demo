<template>
 <div class="z-padding-all-10px">
   <div class="z-padding-v-7px z-bg-b3b">
   	 <span @click="handleEmitEvent()">点击向父级传值并且打印（子向父传值，在父级打印内容）</span> 
   </div> 
   <div class="z-padding-v-7px z-bg-80d">
   	 <span @click="customEvent()">触发组件内的自定义事件（子组件抛出，子组件自己监听并打印）</span> 
   </div>
 </div>
</template> 
<script>
export default {
 data(){
   return {

   }
 },
 methods: {
   handleEmitEvent() {
     this.$emit('test', 'Hello Vue.js');
   },
   customEvent(){
      this.$emit('testx', 'Hello Vue.js组件内自定义事件');
   },
 },
 mounted () {
   // 监听自定义事件 test
   console.log('parent11111');
   console.log(this.$parent.$options.name);  // 查看父组件的信息 
    this.$on('testx', (text) => {  //当每次点击触发customEvent()函数都会alert出监听到的内容 ，参数 'testx' 是监听的事件名
       window.alert(text);
   });
 }
	//  仅上面的示例，的确是多此一举的，因为大可在 customEvent 里直接写 window.alert(text)，没必要绕一圈。
	// 之所以多此一举，是因为 customEvent 是当前组件内调用的，如果这个方法不是它自己调用，而是其它组件调用的，那这个用法就大有可为了。
	//就说如果是其他组件调用了该组件内的方法，就可以搞很多事情了应该
}
</script>