<template>
	<div>
		 是具体的相关子组件partx，但还是要展示出来的，才会有效 ，上面会alert出父级调用时传的值，也就是 Hello Vue.js 
		 this.$on监听到并且触发this.showMessage函数
		<div>
  	  <button class="z-padding-all-7px z-margin-top-10px" @click="handlex">这是子组件的按钮 子到父</button>
    </div>
    <div class="z-margin-top-10px">个人觉得这种父子通信的好处是，不需要传递数据建立联系，就可以触发一些事件，<span class="z-bg-fd4">注意这里不是传值是通信</span> 但是没实战过啊啊啊啊</div>
    <div class="z-margin-top-10px">虽然跨组件通讯是有很多的方法的，比如 event bus 但是在开发独立组件的时候，需要额外进行配置才会实现 $bus的功能，而dispatch（向上找到父组件）和broadcast（向下找到子组件）是不需要其他配置的（配置后还需要在main.js中引入使用），需要注意

    </div> 
	</div>
</template>
<script>
 import Emitter from './minis/emitter.js'
 export default {
  name: 'componentB',
  mixins: [ Emitter ],
  mounted () {
    this.$on('on-message', this.showMessage); //随时都在监听变化的。。。  
  },
  methods: {
    showMessage (text) {
      window.alert(text);
    },
    handlex(){
    	this.dispatch('componentA', 'on-messagex', 'Hello Vue.js向父组件通信啊啊啊啊'); //调用混入文件中的方法  
    	//子向父传通信
    },
  }
}
</script>