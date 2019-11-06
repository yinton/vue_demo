<template>
    <div>
        <canvas id="canvas" width="1000" height="700" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
    </div>
</template>
<script>
    export default {
        mounted() {
            let canvas = document.getElementById('canvas');
            let cxt = canvas.getContext('2d');

            cxt.globalAlpha = 0.7;  //设置全局的透明度

            cxt.fillStyle = '#058';
            cxt.shadowColor = 'gray';
            cxt.shadowOffsetX = 20;
            cxt.shadowOffsetY = 20;
            cxt.shadowBlur = 5;
            //对于任何图都可以调用4个属性值来绘制
            cxt.fillRect(200,200,400,400);
        }
    }
</script>
<style scoped>

</style>