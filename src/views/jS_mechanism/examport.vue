<template>
	<div>
	 <div>
	 	 <img src="./static/one.png" alt="" width="30%">
	 </div>
	 <div>
	 	 <img src="./static/two.png" alt="" width="30%">
	 </div>
	 <div class="z-padding-v-10px z-bg-80d">运行结果如下,仅仅参考，因为结果有差异，可能是运行环境问题</div>
	 <ul class="ub-box">
	 	<li>1、</li>
	 	<li>7、</li>
	 	<li>6、</li>
	 	<li>8、</li>
	 	<li>2、</li>
	 	<li>4、</li>
	 	<li>3、</li>
	 	<li>5、</li>
	 	<li>9、</li>
	 	<li>11、</li>
	 	<li>10、</li>
	 	<li>12、</li>
	 </ul>
	 <div class="z-padding-v-10px">
	 	process.nextTick的优先级高于Promise；在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的Promise部分。
	 </div>
	</div>
</template>
<script>
	export default{
		data() {
			return {

			}
		},
		mounted(){
			console.log('1'); 

			setTimeout(function() {
			    console.log('2');
			    process.nextTick(function() {
			        console.log('3');
			    })
			    new Promise(function(resolve) {
			        console.log('4');
			        resolve();
			    }).then(function() {
			        console.log('5')
			    })
			})
			process.nextTick(function() {
			    console.log('6');
			})
			new Promise(function(resolve) {
			    console.log('7');
			    resolve();
			}).then(function() {
			    console.log('8')
			})

			setTimeout(function() {
			    console.log('9');
			    process.nextTick(function() {
			        console.log('10');
			    })
			    new Promise(function(resolve) {
			        console.log('11');
			        resolve();
			    }).then(function() {
			        console.log('12')
			    })
			})
		}
	}
</script>
