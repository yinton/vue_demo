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
		<button @click.stop="promiseRun()">调用 promise</button>
		<div style="margin:20px 0;"></div>
		<button @click.stop="proRun()">点击 + 1 pro</button>
	</div>
</template>
<script>
/*

promise 可以无限的 嵌套下去，错误会往上传递，传到上一层，会停止 传递，想要再网上传递的 条件是 无错误，就会一直网上传递，知道，出现错误为止 

*/
export default{
	mounted() {
		this.f().then(v => console.log(v))    // 使用了 async 的函数内部返回的值 会 成为调用的 then 里的参数的值，async 返回一个promise 对象
	},
	data() {
		return {
			pro:1
		}
	},
	methods:{
		promiseRun(){
			//console.log(this.promiseDe())
			this.promiseDe().then((res) =>{
				console.log('成功触发的回调',res)
			},(error) =>{
				console.log('失败了触发的回调',error)
			})
		},
		promiseDe(){		
			let a = 1111
			return new Promise((resolve , reject) =>{
				console.log('pro',this.pro)
				this.promiseDex2().then((res) =>{
					console.log('成功触发的回调',res)
						if(this.pro === 1) {
							resolve(a)    // 作用的是 当前函数的 new promise ，返回给调用它的再上一级 的 then 中的参数
						}else{
							reject('失败了reject');
						}
				},(error) => {
					console.log('失败了触发的回调 -- promiseDe',error)  // 接收 promiseDex2() 函数的 reject抛出的参数 不会再往上传递了
				})   
				// 注意此时 可以像上面一样 使用then 的第二个参数 捕获错误，亦可以使用  在 then 后面 点一个 catch 来捕获这种错误  当然这样是比较好的写法了
				// 				}).catch((error)=>{
				// //	
				// 	                  console.log('失败了触发的回调 -- promiseDe',error)  // 接收 promiseDex2() 函数的 reject抛出的参数 不会再往上传递了
				
			                	// })

			})
		},
		proRun(){
			this.pro = 2;
		},
		promiseDex2(){		
			let a = 'promiseDex22222'
			return new Promise((resolve , reject) =>{
				console.log('promiseDex22222函数打印内容')
				if(this.pro === 1) {
					resolve(a)       // 最好加上 return 语句 return resolve
				}else{
					reject('失败了reject2222');   //需要上面定义的 。then的第二个参数接受 错误，才会抛到上层 
				}
				
			})
		},
		/*
            这是另外一种写法
			getJSON('/post/1.json').then(function(post) {  
				return getJSON(post.commentURL);
				}).then(function(comments) {
				// some code
				}).catch(function(error) {
				// 处理前面三个Promise产生的错误
				});

				// 实现休眠效果 ，1 秒后执行 resolve  await 继续执行下一个循环
				function sleep(interval) {
					return new Promise(resolve => {
						setTimeout(resolve, interval);
					})
				}

					// 用法
					async function one2FiveInAsync() {
						for(let i = 1; i <= 5; i++) {
							console.log(i);
							await sleep(1000);
						}
					}
					one2FiveInAsync();

		*/
		async f() {
			return 'hello world';
		}
	}
}
</script>	