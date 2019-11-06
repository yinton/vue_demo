<template>
  <div>
    <div>
       <el-button type="warning" @click="$router.push('/qiqiao')">demo 绘制七巧板</el-button>
       <el-button type="warning" @click="$router.push('/arc')">绘制圆和弧</el-button>
       <el-button type="" @click="$router.push('/down')">炫酷倒计时</el-button>
       <el-button type="" @click="$router.push('/physicalExperiment')">canvas做个物理实验</el-button>
        <el-button type="" @click="$router.push('/mappingDesc')">canvas绘图详解</el-button>
        <el-button type="" @click="$router.push('/fiveStar')">canvas绘图详解 - 五角星</el-button>
        <el-button type="" @click="$router.push('/transformation')">canvas绘图详解 - 图像变化</el-button>
        <el-button type="" @click="$router.push('/graphicChange')">深入图形变换transform -- fillStyle渐变色</el-button>
        <el-button type="" @click="$router.push('/cxtArc')">曲线绘制详解 -- 文字插入</el-button>
        <el-button type="" @click="$router.push('/useElement')">使用元素即其他操作</el-button>
    </div>
    <canvas id="canvas" width="1000" height="700" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    let canvas = document.getElementById('canvas');
   // canvas.height = 700;   //等效于上面的 标签中设置了 宽高的值  这里也可以设置其值   如果使用css设置 canvas的宽高不是最好的 
   // canvas.width = 1000;
    let context = canvas.getContext('2d');     //先设置状态后进行绘制   context.stroke()是绘制;之前的是状态的设置， 
    //绘制直线  
    // context.moveTo(100,100); 
    // context.lineTo(700,700);    

    //绘制多条笔画
    // context.moveTo(100,100); 
    // context.lineTo(700,700);   
    // context.lineTo(100,600);
    // context.lineTo(200,500);
    // context.lineTo(300,400);

    // // context.lineWidth = 5;     //设置需要绘制的线条（直线）的宽度 
    // // context.strokeStyle = '#005588';   //主要是设置线条颜色
    // // context.stroke();   绘制线条最后调用的方法

    // context.fillStyle = 'rgb(2,100,30)';
    // context.fill();    //绘制封闭填充 的实心形状；  这里需要调用 fill()  下面也可调用 strkoe 进行边框的设置
   
    // context.lineWidth = 5;     //设置需要绘制的线条（直线）的宽度 
    // context.strokeStyle = 'red';   //主要是设置线条颜色 
    // context.stroke();  //再调用 strkoe 绘制边框

    // //绘制另外的图形，只需从新调用一次即可
    // context.moveTo(100,200); 
    // context.lineTo(400,400);   
    // context.strokeStyle = 'black';       //z这个样式 会覆盖之前的
    // context.stroke();
    //这样子做的话 可以绘制不同的形状的图形，但是下面的会覆盖前面的属性的值
    
    //下面介绍 beginPath()方法 和 closePath() 吧他们包裹起来，是为不同的状态；

    // stroke() 和 fill();之前的都会保存为不同状态进行绘制，样式不会相互干扰
    context.beginPath();
    context.moveTo(100,100); 
    context.lineTo(700,700);   
    context.lineTo(100,600);
    context.lineTo(200,500);
    context.lineTo(300,400);    
    context.closePath();

    context.lineWidth = 5;    
    context.strokeStyle = '#005588';   
    context.stroke(); 
    context.fillStyle = 'rgb(2,100,30)';
    context.fill(); 

    context.beginPath();
    context.moveTo(100,200); 
    context.lineTo(400,400);    
    context.closePath();
 
    context.strokeStyle = 'red';       //z这个样式 会覆盖之前的
    context.stroke();


  }
}
</script>
<style scoped>

</style>