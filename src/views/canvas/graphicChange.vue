<template>
    <div>
        <canvas id="canvas" width="1000" height="800" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    /* 变换矩阵

     a   c   e
     b   d   f
     0   0   1

     a   水平缩放 (1)
     b   水平倾斜 (0)
     c   垂直倾斜 (0)
     d   垂直缩放 (1)
     e   水平位移 (0)
     f   垂直位移 (0)

     transform(a,b,c,d,e,f);   缩放位移都有了 综合属性

     fillStyle 的其他的属性值的写法   渐变色  线性渐变和径向渐变色

     step1、
     let grd = cxt.createLinearGradient(xstart,ystart,xend,yend);
     let grd = createRadialGradient(x0,y0,r0,x1,y1,r1)

     step2、
     grd.addColorStop(stop,color)

  */
    export default {
       data(){
           return {

           }
       },
       mounted() {
           let canvas = document.getElementById('canvas');
           let cxt = canvas.getContext('2d');


         //   cxt.fillStyle = 'red';
         //
         //
         //   cxt.strokeStyle = '#058';
         //   cxt.lineWidth = 5;
         //   cxt.save();
         //  // cxt.transform(1,0,0,1,0,0);    //默认什么都不更改
         //   cxt.transform(2,0.2,-0.2,1,50,100);  //如果多次调用，会产生联级操作
         //
         // //     cxt.setTransform(1,0,0,1,0,0);   //忽略掉之前的操作  不和之前的操作产生 联系
         //   cxt.fillRect(50,50,300,300);
         //   cxt.strokeRect(50,50,300,300);
         //   cxt.restore();


           // 线性渐变色
           //createLinearGradient设置渐变色的方向  创建渐变
           // let linearGrad = cxt.createLinearGradient(0,0,800,800); //渐变线的起始坐标为 0，0 到 800，800 也就是 从 左上角到右下角连了一条线，根据线的方向来渐变的
           // linearGrad.addColorStop(0.0,'#fff');    //第一个参数表示关键颜色的位置 ，
           // linearGrad.addColorStop(0.25,'yellow');
           // linearGrad.addColorStop(0.5,'green');
           // linearGrad.addColorStop(0.75,'blue');
           // linearGrad.addColorStop(1.0,'black');    //从与上面看就是从 0 到 1 的浮点数
           //
           // // addColorStop可添加无数个的
           //
           // cxt.fillStyle = linearGrad;
           // cxt.fillRect(0,0,800,800);    //相当于是从左上角 到右下角 的 白到黑的渐变色

           // 径向渐变色
          // createRadialGradient(x0,y0,r0,x1,y1,r1)
          //  let linearGrad = cxt.createRadialGradient(400,400,0,400,400,500); //前三个参数表示一个圆 ，后三个也表示一个圆 ，定义了两个圆
          //  linearGrad.addColorStop(0.0,'white');
          //  linearGrad.addColorStop(0.25,'yellow');
          //  linearGrad.addColorStop(0.5,'green');
          //  linearGrad.addColorStop(0.75,'blue');
          //  linearGrad.addColorStop(1.0,'black');
          //
          //  cxt.fillStyle = linearGrad;   //这里的 linearGrad是创建的状态对象，是一个变量
          //  cxt.fillRect(0,0,800,800);

           // 使用图片创建一个样式填充至 fillStyle 里面去
           //  createPattern(img,repeat-style);  repeat-style值可为 repaat-x 、repaat-y 、no-repaat repaat

           const bgImage = new Image();
           let pattern;
           bgImage.src = 'http://ec4.images-amazon.com/images/I/81KhLc8UoeL._SL1500_.jpg';
           bgImage.onload = function () {
               pattern = cxt.createPattern(bgImage,'no-repeat');
               cxt.fillStyle = pattern;
               cxt.fillRect(0,0,800,800);
           }
      // createPattern 是一个非常强大的函数， createPattern(canvas,'no-repeat') 也可以另外的 canvas 画布 可以用其他canvas 绘制的图案填充进来此canvas就这样子
      // createPattern(video,'no-repeat')  也可填充进 video来 很强大
       }
    }
</script>
<style scoped>

</style>