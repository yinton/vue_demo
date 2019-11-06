<template>
	<div class="z-padding-h-10px">
		<div>先看下面的实例，思考下输出结果</div>
		<div>
	    <img src="./static/mechanism.png" alt="" width="50%">
		</div>
		<div>promise里的then的是微任务</div>
    <div class="z-padding-v-10px z-textAlign-center">输出结果为</div>
    <div class="z-padding-v-5px">马上执行for循环啦</div>
    <div class="z-padding-v-5px">代码执行结束</div>
    <div class="z-padding-v-5px">执行then函数啦</div>
    <div class="z-padding-v-5px">定时器开始啦</div>
    <div class="z-padding-v-10px">解析执行机制。。 我们进入正题，除了广义的同步任务和异步任务，我们对任务有更精细的定义：</div>
    <div>
			macro-task(宏任务)：包括整体代码script，setTimeout，setInterval  	
    </div>
    <div>
    	micro-task(微任务)：Promise，process.nextTick
    </div>
    <div class="z-padding-v-15px z-bg-ff8">执行规则</div>
    <div>
       事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。听起来有点绕，我们用文章最开始的一段代码说明：    	
    </div>
    <div class="z-padding-v-15px z-bg-ff8">也就是说遇到整体的代码执行，遇到定时器（宏任务）放入任务队列，再查看微任务队列，then里面的微任务，执行，然后，再回过头来执行宏任务，也就是定时器的内容，宏任务里面可能又会有微任务，如此循环</div>
    <div class="z-padding-v-20px z-bg-b3b" @click="$router.push('/examport')">点击看一个更复杂的案例</div>
	</div>
</template>
<script>
	export default {
		dara() {
			return {
         
			}
		},
		mounted(){
			setTimeout(function(){
			    console.log('定时器开始啦')
			});
			new Promise(function(resolve){
			    console.log('马上执行for循环啦');
			    for(var i = 0; i < 10000; i++){
			        i == 99 && resolve();
			    }
			}).then(function(){
			    console.log('执行then函数啦')
			});
			console.log('代码执行结束');
		}
	}
</script>