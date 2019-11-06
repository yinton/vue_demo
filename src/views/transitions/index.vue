<template>  
	<div>
		<div class="z-padding-v-10px z-bg-ff9">先来看两个封装成组件的过渡效果，就是类似弹窗</div>
		<div class="z-padding-all-10px z-width-40-percent z-bg-fd4 z-margin-top-10px" @click="showLide">点击此处触发第一个</div>
			<slide-right v-if="shows" v-model="shows" />
		<div class="z-padding-all-10px z-width-40-percent z-bg-fd4 z-margin-top-10px" @click="showLidex">点击此处触发第二个</div>		
		<slide-bottom v-if="showx" v-model="showx" />	
		<div class="z-padding-all-10px z-margin-top-10px z-font-17 z-color-f z-bold-font">
			 这里面用到的 move-enter-active  和.move-enter,.move-leave-to 先看下这两个，其他的东西用到的时候再说
		</div> 
		<div class="z-color-b z-bold-font z-padding-h-10px">
			 我的理解的话就是 当 v-if = true时 执行 move-enter-active里的东西 
		</div>
		<div class="z-color-b z-bold-font z-padding-h-10px z-margin-top-10px">
       当 v-if = false时 执行 .move-enter,.move-leave-to里的东西 
		</div>	
		<div class="z-padding-all-10px z-bold-font">
			再研究一下官方文档 注意划线部分应该是经常用到的 在这里，官网这一节只会讲进入、离开和列表的过渡
		</div>       
		<div class="z-padding-h-10px">       
			<ul class="ils">       
				<li>Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。</li>
				<li>包括以下工具：</li>
				<li class="box-li">在 CSS 过渡和动画中自动应用 class</li>
				<li class="box-li">可以配合使用第三方 CSS 动画库，如 Animate.css</li>
				<li>在过渡钩子函数中使用 JavaScript 直接操作 DOM</li>
				<li>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li>
			</ul>				
		</div>	
		<div class="z-padding-all-15px">
			<transition name="fade" mode="out-in">
			  <!-- ... the buttons ... -->
			  <button class="z-padding-all-10px" v-if="bol" @click="bol = !bol" key="docState">off</button>
			  <button class="z-padding-all-10px" v-if="!bol" @click="bol = !bol" key="docStates">down</button>

			</transition>		
		</div>
    <div class="z-padding-h-10px z-bg-80d">配合使用第三方css动画库 -- Animate</div>
    <div>
    	<img src="./static/q.png" alt="" width="100%"> 
    </div>
    <div class="z-padding-h-10px z-bg-80d">箭头所指即是动画库类名放置的地方</div>
    <div class="z-padding-all-10px z-font-17 z-bold-font">列表过渡 -- 注意 -- 内部元素 总是需要 提供唯一的 key 属性值。</div>
    <div class="z-padding-v-20px">
    	<button class="z-padding-all-10px z-margin-left-10px" v-on:click="addx">Add</button>
    	<button class="z-padding-all-10px z-margin-left-15px" v-on:click="addxx">AddMORE</button>
		  <transition-group name="list-complete" tag="div">
		    <div
		      v-for="(item,inde) in itemsx"
		      v-bind:key="item"
		      class="list-complete-item"
		    >
		      <span>{{ item }}</span> 
		      <span class="z-font-17 z-bold-font z-margin-left-20px" @click="deletes(inde)">X</span>
		    </div>
		  </transition-group>    	
    </div>
	</div>
</template>  
<script>
 import slideRight from './slideRight'
 import slideBottom from './slideBottom'
 export default{ 
 	components:{ 
    slideRight,    
    slideBottom
 	},
 	 data(){
 	 	 return {
       shows:false,
       showx:false,
       bol:false,
	     itemss:[
	       {name:'1111',id:1},
	       {name:'22122',id:2},
	       {name:'33333',id:3},
	       {name:'44444',id:4},
	       {name:'55555',id:5},
	       {name:'66666',id:6},
	       {name:'77777',id:7},
	       {name:'66666',id:8},
	       {name:'77777',id:9},
	     ],	
	     itemsx: [1,2,3,4,5,6,7,8,9]  
 	 	 }
 	 },
 	 methods:{
	 	showLide(){
	 	   this.shows = !this.shows;
	  },
	  showLidex(){
	 	   this.showx = !this.showx;
	  },
    deletes(index){
       this.itemsx.splice(index,1);
    },
    addx(){
    	this.itemsx.push(this.itemsx.length+1);
    },
    addxx(){
    	 this.itemsx = [];
       let a = 10;
       for(let i = 0;i<a;i++){
       	 this.itemsx.push(i+'asd');
       }
     }	 	 
 	 }
 }
</script>
<style scoped>
 .ils li{padding:5px 0;font-weight: bold;color:#009999;} 
 .box-li{border-bottom:2px solid #00b2b3}
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} 
.fade-enter, .fade-leave-to{
  transform: translateX(-10px);
  opacity: 0;
}
.list-complete-item {
  transition: all 1s;
  padding:10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>