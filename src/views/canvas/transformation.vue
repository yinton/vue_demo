<template>
    <div>
        <div class="head">图像变换 位移 translate   2、旋转 rotate  3、缩放 scale   是三个函数</div>
        <canvas id="canvas" width="800" height="800" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
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
            const canvas = document.getElementById('canvas');
            const cxt = canvas.getContext('2d');

            // cxt.fillStyle = 'black';
            // cxt.translate(100,100);  //位移   必须要放在 绘制之前
            // cxt.fillRect(20,20,400,400);      //绘制一个黑色的背景  在20，20的基础上又位移了 100，100的坐标点
            // cxt.translate(-100,-100); // 每次绘制完以后需要将坐标点移回原位
            // //canvas 的图形变换函数是叠加的
            // cxt.fillStyle = 'red';
            // cxt.translate(300,300);  //与上面的    cxt.translate(100,100); 同时起了作用 会叠加在一起的，也就是在00坐标的基础上 会 位移 400，400的坐标点
            // cxt.fillRect(0,0,400,400);


            //这样子太麻烦了，所以canvas为我们提供了 新的接口，方便操作啊啊啊
            // cxt.save();
            // cxt.fillStyle = 'black';
            // cxt.translate(100,100);
            // cxt.fillRect(20,20,400,400);
            // cxt.restore();    //成对出现，返回 save保存的所有状态  不影响后续的绘制效果
            //
            // cxt.save();
            // cxt.fillStyle = 'red';
            // cxt.translate(300,300);
            // cxt.fillRect(0,0,400,400);
            // cxt.restore();
            cxt.strokeRect(50,50,200,200);

            cxt.save();
            cxt.scale(2,2);
            cxt.strokeRect(50,50,200,200);
            cxt.restore();

            cxt.save();
            cxt.scale(3,3);
            cxt.strokeRect(50,50,200,200);
            cxt.restore();

            //坐标，线条等都进行了缩放操作

        },
        methods:{

        }
    }
</script>
<style scoped>

</style>