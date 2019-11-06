<template>
	<div>
		<div class="z-padding-all-10px z-bold-font z-color-f">可切换不同型号手机，查看显示差异（测试原生媒体查询的基本运用，根据宽度加载不同css后的体现）</div>
		<div class="div1">media媒体查询的操作</div>
    <div>
    	<div class="z-padding-v-15px z-font-18 z-color-bl box z-table">演示移动端实现 1px 边框，原生媒体查询和stylus实现</div>
    </div>
	</div>
</template>  
<style scoped>  
	@media screen and (max-width: 320px) {
		.div1{ background: pink; width: 240px;height:280px; background:url(./54.jpg);background-size:cover;background-repeat:repeat-y;}
	}
	@media screen and (min-width: 321px ) and (max-width: 375px) {
		.div1{ background: red; width: 200px;height:300px; background:url(./ffx.jpg);background-size:cover;background-repeat:repeat-y;}

	}
	@media screen and (min-width: 376px ) and (max-width: 414px) {
		.div1 { background: green;width:250px;height:250px; }
	}
	@media screen and (min-width: 415px ) {
		.div1 { background: blue; }
	}	
	@media (-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
		.box::after {
		   -webkit-transform:scaleY(0.7);
		   transform:scaleY(0.7);
			 content:' ';
	     display:block;
	     position:absolute;
	     left:0;
	     bottom:0;
	     width:100%;
	     border-top:1px solid rgba(7,17,27,.1);  /*只是这个伪类的一条线，用于模拟box的边框*/	
		}
	}
	@media (-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
		.box::after {
		   -webkit-transform:scaleY(0.5);
		   transform:scaleY(0.5);
			 content:' ';
	     display:block;
	     position:absolute;
	     left:0;
	     bottom:0;
	     width:100%;
	     border-top:1px solid rgba(7,17,27,.1);  /*只是这个伪类的一条线，用于模拟box的边框*/	
		}
	}	
	.box {
		position:relative;
	}
</style>