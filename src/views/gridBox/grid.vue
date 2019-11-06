<template>
	<div class='z-padding-all-10px'>
		<div class="z-bold z-color-bx z-bg-80d z-margin-bottom-10px">看注释笔记</div> 
		<div class="z-bold z-color-bx z-bg-80d zing-v-10px">
			<img src="./1.png" alt="" width="100%">
		</div> 
		<div class="container">  
      <div class="item">
        <div class="box">1</div>
      </div>
      <div class="item">
         <div class="box">1</div>
      </div>
      <div class="item">
         <div class="box">1</div>
      </div>  
      <div class="item">
         <div class="box">1</div>
      </div>            
		</div>
		<div class="containerTwo">  
      <div class="item">
        <div class="box">2</div>
      </div>
      <div class="item">
         <div class="box">2</div>
      </div>
      <div class="item">
         <div class="box">2</div>
      </div>  
      <div class="item">
         <div class="box">2</div>
      </div>            
		</div>	
		<div class="z-bold z-color-f z-bg-80d z-margin-bottom-10px">
			<div>一般来说就是：grid-template-columns定义有多少列；grid-template-rows 定义有多少行，定义时高度与行数一体，也就是如果你是 200px 200px 200px; 这样子写，那么意思就是三行并且每一行200px 就算你内容没那么多，也会撑起三行的高度，比如上面（ 1 ）所示</div>
		</div>
		<div class="z-bold">
			( 2 )是相关的测试 测试后可以看到，当设置了列数时，内容多了会自动换行；行数你设置一个值或者多个值，其实不影响，因为一个值是对第一行的设置高度，两个值也就是前两行了，如果不设置的话那就是 auto 了
		</div>
		<div class="z-bold z-color-bx z-bg-80d zing-v-10px">
			<img src="./2.png" alt="" width="100%">
		</div> 			
		<div class="containerTher">  
      <div class="item">
        <div class="box">3</div>
      </div>
      <div class="item">
         <div class="box">3</div>
      </div>
      <div class="item">
         <div class="box">3</div>
      </div>  
      <div class="item">
         <div class="box">3</div>
      </div>            
		</div>
		<div class="z-bold">
       这里是 grid-template-areas 属性以及他的值；相当于是给现有的每一个区域都设置名字 
		</div>		
		<div class="z-bold z-color-bx z-bg-80d zing-v-10px">
			<img src="./3.png" alt="" width="100%">
		</div> 	
		<div class="z-bold">
       上面是简写与非简写的写法以及区别；效果展示是一样的 ;如下展示间隙；
		</div>
		<div class="containerFour">  
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>   
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>                
		</div>		
		<div class="containerFive">  
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>   
      <div class="item">
        	<img src="http://pic47.nipic.com/20140903/2531170_171611627000_2.jpg" alt="" width="100" height="100">
      </div>                
		</div>	
		<div class="containerSix">   
        <div class="box" v-for="(item,index) in 25" :key="index">5</div>             
		</div>
    <div class="containerSeven">
        <div class="box" v-for="(ite,ind) in 16" :key="ind"></div>
    </div>
	</div>
</template>
<script>
  export default {

  }
	/*
   概念介绍：
          示例：    <div class="container">
                     <div class="item">One</div>     
                     <div class="item">Two</div>        
                   </div>   

            网格概念介绍       
         1、 Grid Container :网格容器  元素应用  display:grid; 他是其 ——所有—— 网格项的父元素。
              .container{
	               display:grid;   
              }

         2、Grid Item : 网格项  网格容器的子元素，下面的 item 元素是网格项  

         3、Grid line : 网格线  组成网格项的分界线，网格线仅仅是我们定义网格的时候就产生的，和网格项无直接关联；

         4、Grid Track  : 网格轨道 ，两个相邻的网格之间为网格轨道

         5、Grid Cell : 网格单元 ，两个相邻的列网格线和两个相邻的行网格线组成的单元格

         6、Grid Area : 网格区域 ，四个网格线包围的总空间。

         单位介绍
         1、fr（单位）：剩余空间分配数。用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，
         则剩下的空间根据各自的数字按比例分配
         2、gr (单位) ：网格数  //目前暂未使用
             
         容器中的属性介绍  
         1、作用于网格容器中的属性：
          （1） display  （2） grid-template
           (3)  gap       (4) items
           (5)  content   (6) grid-auto
           (7)  grid 

         在父元素中开启网格布局的方法： display:grid | inline-grid | subgrid;
         将元素定义为 grid container，并为其内容建立新的网格格式化上下文
              .container{  //如上面的 HTML结构示例，
	               display:grid | inline-grid | subgrid ;   
              }

          Grid : 生成块级网格 -- 常用
          inline-grid ： 生成行内网格  -- 不常用
          subgrid ： 如果网格容器本身是网格项（嵌套网格容器），此属性用来继承其父网格容器的列、行大小

          注意：当元素设置了网格布局，column 、 float 、 clear 、 vertical-align 属性无效
          display：subgrid 目前所有浏览器都不兼容

        定义网格的行和列： grid-template
                      grid-template-columns /  grid-template-rows
                     即使用 以空格分隔的多个值来定义网格的行和列

              .container{  
	               grid-template-columns： <track-size>.. | <line-name>; 
	               grid-template-rows： <track-size>.. | <line-name>
              }                     
                
           先介绍下  grid-template
                轨道大小（track-size）: 可以使用css长度（px、em等）、百分比、或用分数（用fr单位）  
                网格线名字（line-name）: 可以选择任何名字
            
  轨道大小（track-size） -- 示例 ： .container{     // 定义了一个 三行 五列 的表格
        grid-template-columns: 40px 50px auto 50px 40px; //相当于是 第一到第五列的宽分别是 40px 50px auto 50px 40px
        grid-template-rows: 25% 100px auto;  //相当于是第一到三行的高度分别为 25% 100px auto
      }        

   网格线名字（line-name）-- 示例   .container {
	      grid-template-columns: [first] 40px [line2] 50px [line3] auto [end]       
        grid-template-rows: [row1-start] 25% [row-end] 100px [last-line] 
   }
    可以看到，grid-template-columns中 用 [] 包裹一个名字， [] 总是比 显示的 px大小 多一个，是因为在一行中，点的数量总是比边的数量要多一个； [] 里面的名称即是对应的每一个点的 所起的名字了； （ 也就是外面的纵向的点 ）

     grid-template-rows 中的也是一样的  如上示例 及对应 左边一行的点的名称 示例 为两行
     也可以 [one two] 这样子就是取了两个名字了 
     --  取名字是让网格区域有更好的描述 -- 

    下面讲解 grid-template-xx 的另外一个属性 grid-template-areas
           通过引用 grid-area属性指定的网格区域的名称来定义网格模板  
     示例： container {
           grid-template-areas：none | grid-area-name| .grid-area-name  
     }      
     grid-template-areas 的属性值 
           （ 1、） <grid-area-name> : 使用 grid-area 属性设置的网格区域的名称
           （ 2、） "."  点号代表一个空网格单元
           （ 3、） none 没有定义网格区域
       
      演示： container {   //具体看图  每一个值都对应每一个区域，规则如上
	        grid-template-areas： "header header header header"
	                              "main main .sidebar"   
	                              "footer footer footer footer";
      }   //注意 每一行引号隔开 行间 空格隔开 行与行不需要分号，最后一行需要分号i
               
       现在，把上面的用到的三个属性和并 写到一起
       grid-template ： 在单个声明中定义 grid-template-rows、grid-template-columns、
                        grid-template-areas的简写；
       如 ： grid-template:none | subgrid | <grid-template-rows> / <grid-template-rows>;     这里的意思是演示了三种  合并写法；

       具体含义如下： （ 1）、 none: 将三个属性都设置为其初始值；
        （ 2）、subgrid： 把 grid-template-rows 和 grid-template-columns设置为 subgrid,并且 grid-template-areas设置为初始值 ；
        （ 3）、grid-template-rows / grid-template-columns: 把 grid-template-columns 和 grid-template-rows 设置为指定值，与此同时，设置 grid-template-areas为none        
         第三种 是常用的；

         示例： .container {
	               grid-template:
	                 [row1-start] "header header header" 25px [row1-end]
	                 [row2-start] "footer footer footer" 25px [row2-end]
	                 / auto 50px auto;
         }
          就等同于： 
            .container {
	               grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
	               grid-template-columns:auto 50px auto;
	               grid-template-areas:
	                 "header header header"
	                 "footer footer footer";
                   
            }

         新的属性： gap 
                  grid-column-gap / grid-row-gap
                 指定网格线的大小，可以想象为设置列 / 行 之间的间距的宽度 
         示例   .container {
                  grid-column-gap : <line-size>;
                  grid-row-gap : <line-size>;     
         }       

         属性值： （ 1）、line-size : 一个长度值
         用法示例 ： .container {
         	           grid-column-gap: 10px;
         	           grid-row-gap: 10px;   
         	}
          
          gap的缩写 ： grid-row-gap 和 grid-clomns-gap 的缩写

          如下： .container {
	               grid-gap : <grid-row-gap> <grid-column-gap>;       
          }
          所以上面的就可以简写为： grid-gap: 10px 10px; 对应  行 / 列

          说明 ： 起初是用 grid-gap 属性来定义的，目前逐渐被 gap 替代
          如果没有指定 grid-row-gap,则会被设置为与grid-column-gap相同的值
          也就是说可以简写为  gap: 10px 10px ; 就是这个意思
          两个放上去的话兼容性就会好一点
          
          网格项的对齐方式： items
          justify-items : 沿着行轴对齐网格内的内容；
          示例：  .container {
	                  justify-items: start | end | center | stretch 
	                  align-items: start | end | center | stretch
          }  语法实际上和 flex-box有点像，但是更加强大

           justify-items / align-items分别对应水平 / 竖直方向的位置 

          属性值：（1）start： 内容与网格区域的左端对齐
                 （2）end： 内容与网格区域的右端对齐
                 （3）center： 内容位于网格区域的中间位置
                 （4）stretch： 内容宽度占据整个网格区域空间（这是默认值）
               
          justify-items / align-items 可以简写为： 
          比如：justify-items: start 
               align-items: end  就可以是如下简写：  
          place-items: start end     其中start是列，end是行

         justify-content: 设置网格容器内的网格沿着行轴对齐网格的对齐方式。
         （ 应用场景 ）父容器为1000px的宽度，有4列 每列宽度为200 这时就没有达到最大宽度；

         示例： .container { 左对齐是默认值 也就是 start
	               justify-content: start | end | center stretch | space-around | space-between | space-evenly;
         }  此属性相当于是 在父组件的宽度足够宽的时候，子元素宽度达不到最大值，也就是宽度不到最大，那么此时是有空隙的，但是浏览器控制台预览的时候只会显示网格，其实 可以理解为 container 的里面还包了一层 div 将此div 进行局中； 而不是网格每个格子内容居中； 当然也可以是其他值

         注意：space-evenly 可以使得中间，两边的空隙一模一样
             align-content: space-evenly  亦是竖直方向的问题
         这两个的合并属性的写法为： place-content: space-evenly    
         
         gride-auto 属性： 术语：隐式网格轨道，相当于是规定了列数，行数自动适应，也就是自动换行；
        （1、） grid-auto-columns / grid-auto-row : 指定自动生成的网格轨道（又名隐式网格轨道 ）的大小
        （2、）隐式网格轨道： 隐式网格轨道在显示的定位超出指定网格范围的行或列时被创建 
        该属性应该不建议被列使用  行使用可以，只设一个auto
        使用示例：  .container {
	                   grid-auto-columns:<track-size>...;   
	                   grid-auto-rows:<track-size>...;     
        }

        grid-auto-flow : 控制自动布局算法的工作方式。
        使用示例： .container{
	                   grid-auto-flow:row | column | row dense | column dense;
        }  
         上面属性，填充内容不一样， 比如设置column后可以 先填充每列，一列一列填充

         本节最后再来讲一个 grid 属性；
         在单个属性中设置所有以下属性的简写： grid-template-rows,
         grid-template-columns, grid-template-areas, grid-auto-rows,
         grid-auto-columns和grid-auto-flow。

         同时将 sets grid-column-gap 和 grid-row-gap设置为他们的初始值，
         即使它们不能被此属性显示设置。

         本次讲解一下 用于简化代码的css特殊函数； 
         （1）、repeat()
          (2)、fit-content()
         （3）、minmax()
       先看一下 repeat() 重复：耿总列表的重复片段，允许大量显示重复模式的列或行以更紧凑的形式编写
       示例：  .container {
	               grid-template-columns:repeat(repeat,value);
	               grid-template-rows:repeat(repeat,value); 
       }
       例如：  .container {
	               display: grid;
	               grid-template-columns:1fr 1fr 1fr 1fr 1fr;
	               grid-template-rows: auto;
	               gap:20px 25px;        
       }

       可以使用repeat()函数 来表示为：
           .container {
	               display: grid;
	               grid-template-columns:repeat(5,1fr);
	               grid-template-rows: auto;
	               gap:20px 25px;        
       }       
     可用范围：这个函数可以用在 css grid 属性 grid-template-columns 和 grid-template-rows          

    (2)、fit-content() : 内容适配 
        根据公式大小 min （ 最大大小、最大值（最小大小、参数）将给定大小夹紧为可用大小 ）
        
    示例：  .container {
	           grid-template-columns:fit-content( [<length> | <percentage>] );
	           grid-template-rows:fit-content( [<length> | <percentage>] );                    
    }
    使用实例  .container {
	               display: grid;
	               grid-template-columns:100px fit-content(200px); 
	               //如果内容不足200，那么是多宽就是多宽，超200 最多也显示200
	               grid-template-rows: auto;
	               gap:20px 25px;        
       }   

     (3)、minmax() : 长度范围 
       定义了一个长度范围的闭区间。
     用法 grid-template-columns:100px fit-content(200px);

    上面讲的都是父容器的属性，现在讲一下子容器
    也就是网格项上面的属性
       操作方式围绕下面三点。。。
     （1 ）、 start / end
     （2）、  grid-area     
      (3)、  self

       1、  start / end   
           grid-column-start / grid-column-end / grid-row-start /
           grid-row-end
           使用特定的网格线确定 grid item 在网格内的位置。
        
      示例： item {
	            grid-column-start: <number> | <name>     
      }   

      2、 grid-area

       item-a {   //此种相当于是 下面的写法
	        grid-area:row1-start / 2 / 3 five;  
       }
   
       .item-a {  //相当于
	        grid-column-start: 2;
	        grid-column-end: five;
	        grid-row-start:row1-start;
	        grid-row-end:3;
       }     
      其实以上不是太实用；具体参照 作者视频的讲解

      3、 self   
         justify-self :沿着行轴对齐 grid item 里的内容
         四个值：start / end / center / stretch
      




	*/
</script>
<style scoped>
 *{
    margin:0;
 	  padding:0;
    border:none;
 }
 .container{   /*在未设置宽度时默认为当前100%宽 auto会撑满当前剩余空间 内容多大就有多宽*/ 
   	display:grid;  /* fr 是分配剩余*/
    grid-template-columns: 100px 100px 200px auto;  /*1fr 1fr 1fr 1fr*/
    grid-template-rows: 100px 100px 50px; /*一般不要规定死了列数 写一个 auto 即可*/
 }
 .containerTwo{
   	display:grid;  /* fr 是分配剩余*/
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 100px 100px; 
 }
 .containerTher{
   	display:grid;  /* fr 是分配剩余*/
    grid-template-columns: 100px 100px 100px;
   grid-template-rows: 100px 100px;
 }
 .box{width:70px;height:70px;background-color: #ffcc99}
 .zing-v-10px{padding:10px;margin-bottom:20px;}
 .containerFour{
 	  display:grid;
 	  width:70%;
    margin:0 auto;
 	  justify-items: center;   /*单个内容水平居中*/
    grid-template-columns: 100px 100px auto;
    grid-template-rows: 100px 100px 100px; 	
    grid-column-gap:10px; /*网格线宽度*/
    grid-row-gap:10px;    /*网格线高度*/
 }
 .containerFive{
 	  display:grid;
 	  width:500px;
    justify-content:center; /*整体内容与父盒子居中*/
    align-items:center; /*单个内容垂直居中*/
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 300px 100px 100px;
    grid-column-gap:10px; 
    grid-row-gap:15px; 	 /*可简写为 grid-gap: 20px 20px*/
 }
 .containerSix{
  	display:grid; 
    justify-content:center;
    grid-template-columns: repeat(5,70px); /*相当于 70px 70px 70px 70px 70px */
    grid-template-rows: 70px 70px 70px 70px 70px; 	
    grid-column-gap:10px; 
    grid-row-gap:15px; 	 	
 }
 .containerSix > .box:first-of-type{
  	 grid-column-start: 2;
  	 grid-column-end: 5;
  	 grid-row-start: 2;
  	 grid-row-end: 5;
 }
 .containerSeven{
    margin-top:20px;
    display: grid;
    grid-column-gap:10px;
    grid-row-gap:15px;
    grid-template-columns: repeat(auto-fill, 70px);   /*会自动根据当前的宽度填充或者换行，类似flex-wrap:wrap*/
 }
</style>