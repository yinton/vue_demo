<template>
    <div>
        <canvas id="canvas" width="1000" height="600" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        mounted() {
            let canvas = document.getElementById('canvas');
            let context = canvas.getContext('2d');

            // context.lineWidth = 10;  //线条粗线  放在这个位置的话，就是全局设置了，也就是放在了最前面；
            //
            // context.beginPath();
            // context.moveTo(100,200);  //moveTo与lineTo的区别在于，lineTo链接上一个点，moveTo移动到一个新的点；//其实这里也可以用lineTo来表示
            // context.lineTo(300,400);
            // context.lineTo(100,500);
            // context.stroke();
            // context.strokeStyle = '#ff661a'; //线条颜色
            // context.stroke();
            //
            // context.beginPath();    //也会清空上一次的坐标点 所以下面可以用lineTo来表示
            // context.moveTo(300,200);   //其实这里也可以用lineTo来表示
            // context.lineTo(500,400);
            // context.lineTo(300,500);
            // context.stroke();
            // context.strokeStyle = '#aaaa55'; //线条颜色
            // context.stroke();
            //
            // context.beginPath();
            // context.moveTo(500,200);   //其实这里也可以用lineTo来表示
            // context.lineTo(700,400);
            // context.lineTo(500,500);
            // context.stroke();
            //
            // context.strokeStyle = '#bf4080'; //线条颜色
            // context.stroke();
            //分别绘制三条线的样式，

            //需要绘制一个描边的

            //绘制矩形 的函数，canvas 自带的函数 context.rect(x,y,width,height);

            //提供了更加简洁的创建矩形的方法，知道一个点后，设置宽高 前两个参数是点的坐标
         //    context.beginPath();
         //    context.rect(100,100,100,200);
         //    context.closePath();
         //
         //    context.lineWidth = 10;
         // //   context.lineCap = 'square';
         //    context.fillStyle = 'rgba(100,100,100,.2)';   //填充颜色
         //    context.strokeStyle = 'blue'; //线条颜色
         //
         //    context.stroke();
         //    context.fill();
         //
         //    //更加方便的方法来直接创建 矩形 和 填充的矩形；  不但规划出了路径，并且进行了绘制
         //    //若绘制图形 发生了遮挡，后面绘制的图形会遮挡前面绘制的图形
         //    context.fillRect(300,300,100,100);
         //    context.strokeRect(400,400,100,100);


            context.beginPath();
            context.moveTo(100,200);
            context.lineTo(300,400);

            context.lineWidth = 50;
            context.lineCap = 'square';
            context.stroke();
            // 线条属性  -- 线冒

             // 接触过的 线条属性 如： lineWidth

            // lineCap 线条两端的形状 有以下值  1、butt (default) 默认值   2、round  3、square

            //lineJoin 线条与线条相交时所呈现的形态  默认值为 1、miter 即尖角  2、bevel  斜接 3、round 即圆角

            //miterLimit 默认值是 10  当使用 miter 时 内角与外角 最大值


        }
    }
</script>
<style scoped>

</style>