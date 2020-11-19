<template> 
 <div class="z-padding-all-10px">
	<div>在正式介绍主角前，我们先看看 $on 与 $emit 这两个 API，因为它们是本节内容的基础。
$emit 会在当前组件实例上触发自定义事件，并传递一些参数给监听器的回调，一般来说，都是在父级调用这个组件时，使用 @on 的方式来监听自定义事件的，比如在子组件中触发事件：</div>
  <div>  
  	<part @test="handleEvent($event)"></part>  
  </div>
  <div class="z-padding-v-5px z-bg-b3b">以上是常规操作 也就是子在向父传值，part组件共向父组件抛出了两个事件，一个在父组件处理，另外一个在子组件本身使用 this.$on自行处理了，在跨级通讯就知道用处了</div>
  <div class="z-margin-top-10px">
  	这里看似是在父组件 index.vue 中绑定的自定义事件 test 的处理句柄，然而事件 test 并不是在父组件上触发的，而是在子组件 part.vue 里触发的，只是通过 v-on 在父组件中监听。既然是子组件自己触发的，那它自己也可以监听到，这就要使用 $on 来监听实例上的事件，换言之，组件使用 $emit 在自己实例上触发事件，并用 $on 监听它。
  </div>
  <div class="z-margin-top-10px">下面自行实现 dispatch 和 broadcast 方法 这两个方法现已被废弃  但在独立组件开发中很实用，故用其他方法可自行实现两方法的功能，自行实现的 dispatch 和 broadcast 方法，不能保证跟 Vue.js 1.x 的 $dispatch 和 $broadcast 具有完全相同的体验，但基本功能是一样的，都是解决父子组件（含跨级）间的通信问题。</div>
  <div class="z-margin-top-10px">来看一下具体的使用方法。有子组件partx，但有时中间可能跨多级，在该组件与partx中通信：下面为父组件中的按钮</div>
  <div>
  	<button class="z-padding-all-7px z-margin-top-10px" @click="handleClick">触发事件父 - 到 - 子</button>
  </div>
  <div> 
  	<partx></partx>
  </div>  
  <button class="z-padding-all-7px z-margin-top-10px" @click="handleA1">触发事件 最外层到 A3</button>
  <a1 />
 </div>
</template>
<script>
import part from './parts.vue'
import partx from './partx.vue'
import Emitter from './minis/emitter.js'
import a1 from './A1.vue'
export default {
	name: 'componentA',
	mixins: [ Emitter ],
	components:{
		part,
    partx,
    a1
	},
	data(){
		return {
      data:'Hello Vue.js向子组件通信1231231',
		}
	},
  mounted () {
    this.$on('on-messagex', this.showMessagex); //随时都在监听变化的。。。
  },	
	methods:{
    showMessagex (text) {
      window.alert(text);
    },		
    handleEvent(msg){ 
       console.log(msg) 
    },
    handleClick () {
      this.broadcast('componentB', 'on-message', this.data); //混入文件中的方法
    },
    handleA1(){
      this.broadcast('a3', 'on-messagen', this.data); //混入文件中的方法
    }    	
	}
}
</script>