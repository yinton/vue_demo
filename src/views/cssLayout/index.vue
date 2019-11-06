<template>
 <div class="z-padding-h-20px">
  <div class="box ub-box ub-between ub-wrap">
	  <div class="top">1</div>
	  <div class="right">2</div>
	  <div class="bottom">3</div>
	  <div class="left">4</div>
	  <div class="bot-rig">5</div>
	  <div class="top-lef">6</div>
	  <div class="all">7</div>
	  <div class="three-box">3-7</div>
	  <div class="odd-left">8</div>
    <div class="odd-right">9</div>
	  <div class="odd-bot">10</div>
    <div class="odd-top">11</div> 
    <div class="boxx shadowx z-relative">12</div> 
  </div>
  <div class="z-bold z-margin-left-20px z-margin-top-10px">语法：box-shadow: h-shadow v-shadow blur spread color inset;</div>
  <div class="z-margin-left-20px z-margin-top-20px z-color-bx">以上是单边、和两边、甚至是四边阴影,可以看到，都是实线</div>
  <div class="z-margin-all-20px z-bold">实际上，同时只能设置两边的阴影，由前两个值控制，正负切换即可，但是如果把第三个值也设一个数值（除了0），那么四条边都会有阴影（有一边凝实一点）如上第7个,如需设置单边模糊阴影，看8及以下示例</div>
 </div> 
</template>
<style scoped>
	.box div{width:200px;height:100px;border:1px solid #ccc;margin-top:30px;margin-left:60px;}
  .top{box-shadow: 0 -2px 0px red;} 
  .right{box-shadow: 2px 0 0 green;}
  .left{box-shadow: 0 2px 0 blue;}
  .bottom{box-shadow: -2px 0 0 red;}
  .bot-rig{box-shadow: 1px 1px 0 red;}
  .top-lef{box-shadow: -1px -1px 0 red;}
  .all{box-shadow: 0 0 1px red;}
  .odd-left{box-shadow: -5px 0 5px -5px green}
  .odd-right{box-shadow: 5px 0 5px -5px yellow}
  .odd-bot{box-shadow: 0 5px 5px -5px red}
  .odd-top{box-shadow: 0 -5px 5px -5px blue}
  .boxx{width:300px;height:100px;background:#ccc;border-radius:10px;}
  .shadowx::before,
  .shadowx::after {
  	content:'';
  	position:absolute;
  	z-index:-1;
  	bottom:15px;
  	left:10px;
  	width:50%;
  	height:20%;
  	box-shadow: 0 15px 8px rgba(0,0,0,.7);
  	transform:rotate(-4deg);
  }
  .shadowx::after{
  	right:10px;
  	left:auto;
    transform:rotate(4deg);
  }
  .three-box{box-shadow: 0 -2px 4px 0px red;}
</style>