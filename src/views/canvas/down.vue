<template>
  <div>
    <canvas id="cans" style="border:1px solid #aaa;display:block;margin:50px auto"></canvas>
  </div>
</template>  
<script>
//const digit = () => import('./digit');   //此种方法引入 无法顺利输出数组
import digit from './digit'
export default {
  data(){
    return {
       RADIUS:8,    //假设 圆的半径取值为 8
       MARGIN_TOP:60,     // 每 一个数字距离画布上边距
       MARGIN_LEFT:30,    //第 一个数字距离画布的左边距
       endTime:null,       //定制一个截止时间
       curShowTimeSecond:0,
       timer:null,
       balls:[],
       colors:['#33B5E5','#0099cc','#AA66CC','#9933CC','#99CC00','#669900','#FFBB33','#FF8800','#FF4444','#CC0000'],

    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
  },
  mounted(){
     let canvass = document.getElementById('cans');
     let context = canvass.getContext('2d');   
     canvass.height = 768;    
     canvass.width = 1024;     

    /*本案例 的 设置天数不要超过四天 因为超过四天的话 小时就超过了两位数了 就会报错了 !!!!!!!!!!*/

    // this.endTime = new Date(2019,10,1,18,47,52);     //定制一个截止时间 若第二个参数 6 表示 7月  从0开始的 1就表示 2 月了
      this.endTime = new Date();
      this.endTime.setTime(this.endTime.getTime() + 3600*1000);  //总是设为 当前时间后一个小时的时间
      console.log(this.endTime);    //Fri Jul 11 2019 18:47:52

     this.curShowTimeSecond = this.getCurrentShowTimeSeconds(); //调用当前时间
     console.log('curShowTimeSecond12',this.curShowTimeSecond); 

    // this.renders(context);      //绘制函数

    this.timer = setInterval(()=>{
       this.renders(context);    //负责绘制
       this.update();            //负责数据的改变 ，小球的生成亦是放在 update 中
     },50)   //这里时间间隔小一点，小球运动的频率就搞，这里时间间隔在1000以内，都是对倒计时不影响的，因为整秒数才会被渲染，重新绘制

  },
  methods:{
    update(context){        //this.curShowTimeSecond 记录前一秒的时间 和 this.getCurrentShowTimeSeconds(); 实时调用的后一秒的时间，最后做出对比
      let nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
      let nextHours = parseInt(nextShowTimeSeconds / 3600); //总的小时数  取整 剩下的余数先给 分钟再给秒
      let nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600) / 60);    //得到了 除取整的小时 外的值，减去小时的值，余下的取整部分当做分钟 分钟也有余数部分，当做秒，下面处理
      let nextSecond = nextShowTimeSeconds % 60;

      //都是调用的现在的时间，但是上面是 后一秒，下面是前一秒的时间

      let curHours = parseInt(this.curShowTimeSecond / 3600); //总的小时数  取整 剩下的余数先给 分钟再给秒
      let curMinutes = parseInt((this.curShowTimeSecond - curHours*3600) / 60);    //得到了 除取整的小时 外的值，减去小时的值，余下的取整部分当做分钟 分钟也有余数部分，当做秒，下面处理
      let curSecond = this.curShowTimeSecond % 60;

      if(nextSecond !== curSecond){   //nextSecond记录的是下一秒的小时的数，curSecond记录的是上一秒，相对nextSecond来说的
         //对小时的处理
        if(parseInt(curHours/10) !== parseInt(nextHours/10)){    //如果前一秒的小时 那位不等于 后一秒的，说明小时位的值变了
            this.addBalls(this.MARGIN_LEFT+0,this.MARGIN_TOP,parseInt(curHours/10));  //注意各个球的位置
        }
         //除以是相当于取得第一位数字， 取谋是取得第二位数字  默认日期差不超过 4天 看小时的第一位和第二位是否发生了改变，相对于前一秒来说
        if(parseInt(curHours%10) !== parseInt(nextHours%10)){
          this.addBalls(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curHours/10));  //注意各个球的位置
        }
          //对分钟的处理
        if(parseInt(curMinutes/10) !== parseInt(nextMinutes/10)){
           this.addBalls(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curMinutes/10));  //注意各个球的位置
        }

        if(parseInt(curMinutes%10) !== parseInt(nextMinutes%10)){
           this.addBalls(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curMinutes/10));  //注意各个球的位置
        }

        if(parseInt(curSecond/10) !== parseInt(nextSecond/10)){
           this.addBalls(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curSecond/10));  //注意各个球的位置
        }

        if(parseInt(curSecond%10) !== parseInt(nextSecond%10)){
           this.addBalls(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curSecond/10));  //注意各个球的位置
        }

        this.curShowTimeSecond = nextShowTimeSeconds;    //倒计时实现 就是 障眼法啦，获取现在时间，再获取一秒后的现在时间，把一秒后的现在时间赋值给前一个变量
      }
        this.updateBalls(context);   //小球的生成实现

    },
    addBalls(x,y,num){    //num表示传入的数字
        for(let i = 0;i<digit[num].length;i++){
            for(let j = 0;j<digit[num][i].length;j++){   //digit[num]对应的数字的配置数据
                if(digit[num][i][j] === 1){
                    let aBall = {
                        x:x+j*2*(this.RADIUS+1)+(this.RADIUS+1),
                        y:y+i*2*(this.RADIUS+1)+(this.RADIUS+1),
                        g:1.5+Math.random(),//加速度
                        vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,     //Math.ceil() 向上取整数，有小数就向上取一位
                        vy:-5,
                        color:this.colors[Math.floor(Math.random()*this.colors.length)],     //Math.floor向下取整
                    };
                    this.balls.push(aBall);
                }
            }
        }
    },
    updateBalls(){   //对所有的小球进行更新操作
       for(let i = 0;i<this.balls.length;i++){
           this.balls[i].x += this.balls[i].vx;
           this.balls[i].y += this.balls[i].vy;
           this.balls[i].vy += this.balls[i].g;
           if(this.balls[i].y >= 768 - this.RADIUS){   //地板的碰撞检测
               this.balls[i].y = 768 - this.RADIUS;
               this.balls[i].vy = -this.balls[i].vy*0.75
           }
       }

       //增加与减少小球的数量；  性能优化，不在画布的小球就不要了
       //  let cnt = 0;
       //  for(let h = 0;h<this.balls.length;h++){
       //      if(this.balls[h].x + this.RADIUS >0 && this.balls[h].x - this.RADIUS < '1024')   //说明该小球还留在画面里
       //          this.balls[cnt++] = this.balls[h];   //满足要求才添加
       //          while (this.balls.length>cnt){
       //              this.balls.pop();
       //          }
       //
       //
       //  }

    },
    getCurrentShowTimeSeconds(){
       let curTime = new Date();     //现在时间  
       //getTime方法 返回指定时间的毫秒数 js 与 1970年 某日为起点  两个指定值 求得距离 1970年的毫秒数，再相减 即可得到差值
       //   console.log(curTime);   //例如返回结果为  Fri Oct 25 2019 16:43:05
       let ret = this.endTime.getTime() - curTime.getTime();
       ret = Math.round(ret / 1000); //把毫秒转为秒，去除小数点后面的位数 结果整数了
       return ret >= 0 ? ret : 0;
    },
    renders(cxt){
       cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height); //对一个矩形内的图形进行刷新操作，否则canvas会重复绘制并且覆盖  x,y,width height
       console.log('curShowTimeSecond3',this.curShowTimeSecond); 
      // let hours = 25;
      // let minutes = 34;
      // let second = 56;   // 假设的倒计时的 起始值 先写死掉了

     // 拿到的倒计时 的秒数，转为相应的倒计时间格式；  this.curShowTimeSecond记录了前一秒的时间
      let hours = parseInt(this.curShowTimeSecond / 3600); //总的小时数  取整 剩下的余数先给 分钟再给秒
      let minutes = parseInt((this.curShowTimeSecond - hours*3600) / 60);    //得到了 除取整的小时 外的值，减去小时的值，余下的取整部分当做分钟 分钟也有余数部分，当做秒，下面处理
      let second = this.curShowTimeSecond % 60;   //秒数最好处理了，总的时间转化为分钟，余数即是剩余的秒数 取谋    
      //绘制小时
      this.renderDigit(this.MARGIN_LEFT,this.MARGIN_TOP,parseInt(hours/10),cxt);     //数字需要一个一个绘制  parseInt方法会保留整数其他小数点后的全部过滤掉
          //parseInt(hours/10)  相当于是取了第一位数      
          //parseInt(hours%10)  相当于是取了第二位数
      this.renderDigit(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(hours%10),cxt);    
      this.renderDigit(this.MARGIN_LEFT+30*(this.RADIUS+1),this.MARGIN_TOP,10,cxt);   //第十个是 冒号；

      //绘制分钟
      this.renderDigit(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(minutes/10),cxt);   
      this.renderDigit(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(minutes%10),cxt);    
      this.renderDigit(this.MARGIN_LEFT+69*(this.RADIUS+1),this.MARGIN_TOP,10,cxt);  
      
      //绘制秒钟
      this.renderDigit(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(second/10),cxt);   
      this.renderDigit(this.MARGIN_LEFT+94*(this.RADIUS+1),this.MARGIN_TOP,parseInt(second%10),cxt);    
      // this.renderDigit(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,10,cxt);

        //绘制小球
        for(let i = 0;i < this.balls.length;i++){
            cxt.fillStyle = this.balls[i].color;
            cxt.beginPath();
            cxt.arc(this.balls[i].x,this.balls[i].y,this.RADIUS,0,2*Math.PI,true);
            cxt.closePath();
            cxt.fill();
        }

    },
    renderDigit(x,y,num,cxt){        // num 为取的第一位，如果是 1 ，则对应 digit数组中的 数字 1 的配置数据
        cxt.fillStyle = 'rgb(0,102,153)';
        for(let i = 0;i < digit[num].length;i++){
          for(let j = 0;j < digit[num][i].length;j++){ 
            if(digit[num][i][j] === 1) {    //j代表每行第几个    i代表 所有行
              cxt.beginPath();
              //比如现在 num 值为 1 ，则对应到了 digit数组中的 数字 1 的配置数据 下面计算了 小球的绘制圆心；this.RADIUS是已知的
              cxt.arc(x+j*2*(this.RADIUS+1)+(this.RADIUS+1),y+i*2*(this.RADIUS+1)+(this.RADIUS+1),this.RADIUS,0,2*Math.PI);
              cxt.closePath();
              cxt.fill();
            }
          }
        }   
    },
  }
}
</script>>