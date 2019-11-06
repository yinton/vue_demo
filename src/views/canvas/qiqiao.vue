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
     let tangram = [
       {p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:'#caff67'},
       {p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:'#67becf'},
       {p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:'#ef3d61'},
       {p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:'#f9f51a'},
       {p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:'#a594c0'},
       {p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:'#fa8ecc'},
       {p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:'#f6ca29'},
     ];
     let canvass = document.getElementById('canvass');
     canvass.height = 800;    
     canvass.width = 800;
     let context = canvass.getContext('2d');   

     for(let x = 0;x<tangram.length;x++){    //每一次循环都会绘制一个 图形的
        this.draw(tangram[x],context); 
     }
   },
   methods:{
     draw(piece,cxt){ 
       console.log(piece);
       console.log(cxt);
        cxt.beginPath();
        cxt.moveTo(piece.p[0].x,piece.p[0].y);        // moveTo 绘制第一个点   
        for(let i = 1;i<piece.p.length;i++){         
            cxt.lineTo(piece.p[i].x,piece.p[i].y);        // 循环从一开始，跳过了 第1个点，因为第一个点已经被 moveTo绘制了 
            cxt.closePath();
          //给各个小块填充色
            cxt.strokeStyle = 'black';   
            cxt.lineWidth = 3;
            cxt.stroke();     //给各个小块 添加边框 以及颜色

            cxt.fillStyle = piece.color;
            cxt.fill();   
        }  
     }
   }
}
</script>
<style scoped>

</style>