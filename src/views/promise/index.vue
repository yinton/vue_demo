<template>
	<div class="z-padding-all-15px">
		<div class="z-bold z-color-bl">
      Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。			
		</div>
		<div class="z-bold z-padding-v-10px">基本用法</div>
		<div>
		 <p>const promise = new Promise(function(resolve, reject) {</p>	
		 <p> // ... some code</p>  
		 <p> if (/* 异步操作成功 */){</p> 
		 <p> resolve(value);</p>    
			<p> } else {</p>  
			 <p> reject(error);</p>   
			 <p> }</p> 
		<p> });</p>				
		</div>
		<div class="z-bold z-color-bl z-padding-v-10px">一些操作可以观摩小程序项目首页</div>
		<div class="z-bold z-color-b z-padding-v-10px">具体的案例语法细节直接看阮易峰 Es6 标准如入门教程</div>
	</div>
</template>