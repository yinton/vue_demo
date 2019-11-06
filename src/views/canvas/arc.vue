<template>
  <div>
    <canvas id="canvass" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
  </div>
</template>  
<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    //绘制圆弧
    // context.arc(     共有 6 个参数
        //centerx,centery,radius  分别为： 圆心 x y 坐标以及半径的值
        //startingAngle,endingAngle         分别为 这段弧线从哪一个幅度值为始 结束于哪个弧度值  默认0的位置在圆的最右边半圆中间位置
       // anticlockwise = false    默认值 false 指从顺时针绘制
    // ) 
     let canvass = document.getElementById('canvass');
     canvass.height = 800;    
     canvass.width = 800;
     let context = canvass.getContext('2d');    

     context.beginPath();
     context.arc(300,300,200,0,2*Math.PI);  // 300 ,300 为圆心 200为半径   从位置 0 开始绘制 到 2派 的位置，注意还有第六个参数，会影响绘制结果的
     context.closePath();
     context.lineWidth = 6;
     context.strokeStyle = '#005588';
     context.stroke();

     for(let i = 0;i<13;i++){
        context.beginPath();
        context.arc(50+i*100,60,40,0,2*Math.PI*(i+1)/10);
        context.closePath();                  //closePath()也可以链接两段线段使之闭合 将不封闭的路径闭合
        context.lineWidth = 3;
        context.strokeStyle = 'red';
        context.stroke();

        context.fillStyle = '#005588';
        context.fill();
     }
     
    for(let i = 0;i<13;i++){   //只使用 beginPath() 而不使用 closePath()  使得路径不闭合了现在  
        context.beginPath();    //beginPath()表示要从新规划一条路径 closePath()表示要结束当前路径，两个不一定要一起出现，
        context.arc(50+i*100,150,40,0,2*Math.PI*(i+1)/10);

        context.lineWidth = 3;
        context.strokeStyle = 'blue';
        context.stroke();
        
     }
  },
  methods:{

  }
}
</script>>