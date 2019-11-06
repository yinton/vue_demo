<template>
	<div class="">
		<div class="z-padding-v-10px z-bg-80d z-bold" @click="play">animation基础动画知识介绍 （关键帧动画）看一个例子,自动播放三次后动画停止了,也可以点击这里哦播放</div>
    <div class="change" v-if="boll"></div>
		<div class="z-padding-v-10px z-bg-80d z-bold" @click="playx">以上案例：定义动画的名称为：mydh（必需）；from  to 或者 0%  100% 也是必需的；点击看另外一个效果,该效果采用0% 100%的方式定义动画，有去有回，先放大再缩小</div> 
		<div class="changex" v-if="bollx"></div> 
		<div class="changel"></div> 
		<div class="z-padding-v-10px z-bg-80d z-bold">上面粉色的，可以定义：animation-direction:alternate;属性，来表示下一周期逆向执行该动画；就不用使用0% 100% 来你转回去，这个属性可以节约很多步骤</div>
		<div class="z-padding-v-10px z-bg-ff9 z-bold">一点小结，下面还会介绍一个动画库的动画代码</div> 
		<div class="z-padding-v-10px z-bg-ff8 z-bold">动画暂停：animation-play-state:paused；默认值为running；需配合javaScript代码控制；</div> 
		<div class="z-padding-v-10px z-bg-80d z-bold">最后一帧停留位置：animation-fill-mode:forwards</div>				  
		<div class="z-padding-v-10px z-bg-ff8 z-bold">复合属性：animation:mydh 2s（完成时间） ease（速度） 1s（延时） 2（次数） alternate（逆向播放）</div>			
		<div v-if="fonts">
			<sport @kko="klo" />
		</div>	
	</div>
</template>
<script>
	import sport from './sport'
	export default {
		components:{
       sport 
		},
		data(){
			return {
        boll:true,
        bollx:true,  
        fonts:true      
			}
		},
		methods:{
			play(){
				this.boll = !this.boll;
				setTimeout(() =>{
          this.boll = true;
				},0)
			},
			playx(){
				this.bollx = !this.bollx;
				setTimeout(() =>{
          this.bollx = true;
				},0)				
			},
			klo(msg){
				console.log(msg);
				if(msg){
				   this.fonts = !this.fonts;
			  	   setTimeout(() =>{
             this.fonts = true;
			  	},0)	
				}
			}
		}
	}
</script>
<style scoped>
.change{
	width:100px;
	height:100px;
	background-color:blue;
  animation-name: mydh;
  animation-duration:2s;
 /* animation-iteration-count:infinite;*/
  animation-iteration-count:3;
  animation-timing-function:linear;

}
.changel{
	width:100px;
	height:100px;
	background-color:pink;
  animation-name: mydh;
  animation-duration:2s;
 /* animation-iteration-count:infinite;*/
  animation-iteration-count:6;
  animation-timing-function:linear;
  animation-direction:alternate;
}
.changex{
	width:100px;
	height:100px;
	background-color:orange;
  animation-name: mydhx;
  animation-duration:2s;
 /* animation-iteration-count:infinite;*/
  animation-iteration-count:3;
  animation-timing-function:linear;

}
@keyframes mydh {
	from {
		height:400px;
		width:400px;
		background-color:blue;
	}
	to{
		height:200px;
		width:200px;
		background-color:orange;
	}
}
@keyframes mydhx {
	0% {
		height:200px;
		width:200px;
		background-color:orange;
	}
	50%{
		height:400px;
		width:400px;
		background-color:blue;
	}
	100%{
		height:200px;
		width:200px;
		background-color:orange;
	}	
}
</style>