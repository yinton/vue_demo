<template>
    <div>
        <div class="head">绘制五角星啊啊啊</div>
        <canvas id="canvas" width="1000" height="700" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    export default {
        data() {
            return {


            }
        },
        beforeDestroy() {

        },
        mounted() {
            console.log(Math.cos((18+2*72)/180*Math.PI));
            const canvas = document.getElementById('canvas');
            const cxt = canvas.getContext('2d');

            cxt.fillStyle = 'black';
            cxt.fillRect(0,0,canvas.width,canvas.height);     //绘制一个黑色的背景

            for(let x = 0;x<150;x++){
                let r = Math.random()*10+10;   //10 --- 20 随机值 20一下
                let x = Math.random()*canvas.width;
                let y = Math.random()*canvas.height;
                let a = Math.random()*360;
              //  this.drawStar(cxt,400,400,300,150,20);
                this.drawStar(cxt,x,y,r,r/2,a);
            }

        },
        methods:{

            //图形变换 1、位移 translate   2、旋转 rotate  3、缩放 scale   是三个函数

            drawStar(cxt,x,y,outerR,innerR,rot) {
                cxt.beginPath();
                for(let i = 0;i<5;i++){
                    cxt.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*outerR+x,-Math.sin((18+i*72-rot)/180*Math.PI)*outerR+y);
                    cxt.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*innerR+x,-Math.sin((54+i*72-rot)/180*Math.PI)*innerR+y);
                }
                cxt.closePath();
                cxt.fillStyle = '#fb3';
                cxt.strokeStyle = '#66ffff';
                cxt.lineWidth = 3;
                cxt.lineJoin = 'round';
                cxt.stroke();
                cxt.fill();
            }
        }
    }
</script>
<style scoped>

</style>