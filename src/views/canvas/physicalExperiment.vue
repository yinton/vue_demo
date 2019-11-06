<template>
    <div>
        <div class="head">用canvas做一个物理实验</div>
        <canvas id="canvas" width="1000" height="700" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               timer:null,
                ball:{x:512,y:100,r:20,g:2,vx:-4,vy:0,color:'#005588'},  //g 加速度、vx x轴速度 、vy y轴的速度
              //  balls:[],

            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        mounted() {
            const canvas = document.getElementById('canvas');
            canvas.height = 568;
            canvas.width = 1024;
            const context = canvas.getContext('2d');
            this.timer = setInterval(()=>{     //不断地绘制小球的新的位置
                this.render(context);     //负责绘制
                this.update();           //负责数据的改变 ，小球的生成亦是放在 update 中
            },50);
        },
        methods:{
            render(cxt){
                cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height); //对一个矩形内的图形进行刷新操作，否则canvas会重复绘制并且覆盖  x,y,width height
                cxt.fillStyle = this.ball.color;
                cxt.beginPath();
                cxt.arc(this.ball.x,this.ball.y,this.ball.r,0,2*Math.PI);
                cxt.closePath();
                cxt.fill();
            },
            update(){
              //  this.ball.x += this.ball.vx;
                this.ball.y += this.ball.vy;
                this.ball.vy += this.ball.g;
                if(this.ball.y > 568 - this.ball.r) {
                    this.ball.y = 568 - this.ball.r;
                    this.ball.vy = -(this.ball.vy*0.9); //相当于加了摩擦系数 每次反弹小球速度会损失 0.5
                }
            }
        }
    }
</script>
<style scoped>
.head {
    padding: 20px;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: bold;
}
</style>