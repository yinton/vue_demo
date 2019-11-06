<template>
    <div>
        <canvas id="canvas" width="1000" height="800" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    /*
      cxt.arc(
        centerx,centery,radius,
        startingAngle,endingAngle,
        anticlockwise = false
      )

      另外一种绘制方法，arcTo(
                        x1,x2,y1,y2,radius
                      )

    */
    export default {
        mounted() {
            let canvas = document.getElementById('canvas');
            let cxt = canvas.getContext('2d');

            //绘制圆角矩形

         //   this.drawRoundReact(cxt,100,100,600,500,100);

            // cxt.beginPath();
            // cxt.moveTo(150,150);
            // cxt.arcTo(650,150,650,650,200);
            // cxt.lineWidth = 6;
            // cxt.strokeStyle = 'red';
            // cxt.stroke();

            //canvas 渲染文字
            // cxt.font = 'bold 40px Arial';
            //  cxt.fillText(string,x,y,[maxlen]);    x,y 均为绘制的起点 maxlen表示绘制此行文字的最长的宽度是多少 超出会被压缩到指定的宽度
            cxt.font = 'bold 40px Arial';
            cxt.fillStyle = '#058';
            cxt.fillText('canvas绘图详解',40,100);

            cxt.lineWidth = 2;
            cxt.strokeStyle='#058';
            cxt.textAlign = 'left';   //相对于x轴的坐标来说的
            cxt.textBaseline = 'top';
            //也可以将文字填充为渐变色
            cxt.strokeText('canvas绘图详解11',40,300);

        },
        methods:{
            drawRoundReact(cxt,x,y,width,height,radius){
                cxt.save();
            //    cxt.translate();
                this.pathRoundReact(cxt,width,height,radius);
                cxt.stroke();
                cxt.restore();

            },
            pathRoundReact(cxt,width,height,radius){
                cxt.beginPath();
                cxt.arc(width-radius,height-radius,radius,0,Math.PI/2);
                cxt.lineTo(radius,height);
                cxt.arc(radius,height-radius,radius,Math.PI/2,Math.PI);
                cxt.lineTo(0,radius);
                cxt.arc(radius,radius,radius,Math.PI,Math.PI*3/2);
                cxt.lineTo(width-radius,0);
                cxt.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);
                cxt.closePath();
            }
        }
    }
</script>
<style scoped>

</style>