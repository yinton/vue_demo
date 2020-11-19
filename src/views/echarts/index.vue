<template>
<div>
  <div class="chart-container"> 
    <chart id="aa" />
  </div>
  <div class="chart-container">
    <bar2 id="bb" />
  </div>
  <div class="chart-container2">
    <bar3 id="cc" />
  </div>
  <div class="chart-container">
    <bar4 id="dd" />
  </div>
  <div class="chart-container">
    <bar6 id="ff" />
  </div>
  <div class="chart-container">
    <bar5 id="ee" />
  </div>
  <div>radius: ["40%", "58%"],调整圆环大小</div>
  <div class="chart-container3">
    <pie1 id="hh" />
  </div>
    <div class="chart-container4">
    <line2 id="gg" />
  </div>
  <div class="chart-container4">
    <chart1 id="g2" />
  </div>
  <div class="chart-container5">
    <chart2 id="g3" />
  </div>
    <div class="chart-container5">
    <chart3 id="g4" />
  </div>
      <div class="chart-container6">
    <chart42 id="g5" />
  </div>
   <div class="chart-container6">
    <txt2 id="g6" />
  </div>
  <pre style="font-size: 18px;">
    先拿柱状图看一下：
    1、图例，就是显示数据name的小块，一般在图表的上面
      一般使用：legend: {   
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
                }, 
      上面是简单的配置： 若是没有 legend 这个字段，图例不显示，若是 有 legend 字段，但是里面可能是空的，什么都没有，也会显示出图例，取值就是根据 series 字段 （是数组）的 每一项的 name 字段来取的值,当然，如果legend的data里面如果少写了某一个名字，那么 那组数据的 图例就不会显示了      
      legend 的 data 里面的配置，也可以是复杂的，比如：
                      legend:[   // 可以是这种写法 是一个数组，当然也可以是对象，设置其他属性，再然后里面有一个data
                         {
                           orient: 'vertical',          // 布局方式，默认为水平布局，可选为：
                             x: 'right',  
                            top: '3%',
                            backgroundColor: '#cbcbcd',   // 相当于是盒子的背景色，而不是图例本身的
                            borderColor: 'red',            // 图例盒子的边框颜色 不是图例小方块的注意了
                            borderWidth: 10,             // 即使是对象的写法，也是指的是整个图例盒子的样式
                            itemWidth:10,  // 设置图例宽度
                            itemHeight:10,
                            icon:'rect',    // 可以是 'circle',circle，rect,line，roundRect，triangle，diamond，pin，arrow，none 等等 自行百度
                            textStyle: {
                                color: '#cbcbcd',
                                padding: [3, 0, 0, 1],
                            },
                            data:[{name:'粗锡'}, {name:'粗锡2'},]    // 这写法我觉得可以吧某几个图例设为一个小组，方便控制位置吧可能, 但是要注意了，这里是需要 data 里面的name 值是下面serves 每一项name 值有的，如果没有，图例自然就不显示了
                        },  
                        {    // 这是另外一个组了，这样子的话呢就是 相当于单独放了一个盒子
                            x: '47.4%',
                            top: '3%',
                            data:[{name:'联盟广告'}]
                        },   
                      ]  
      上面的操作，legend 也可以是对象，让后 data 是数组 ，每一项但配置里面的各个属性 比如下面，上面是因为吧legend分组，设置位置的话就好一点，一般会是下面这种，图例也可以是其他的图片的 但是注意 图片路径需要网络地址
      legend:{
        data:[
            {
                name:'蒸发量',
                textStyle:{
                    fontSize:12,
                    fontWeight:'bolder',
                    color:'#cccccc'
                },
                icon:'image://./images/icon1.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
            },
        ]
    }
      最后在说一下图例的颜色问题: color: ["#226ea0","#c3861c"], 有这么一个配置属性，和 legend 平级的 这里就是设置比如柱状图的颜色了，会设置每一组 serves 的颜色，一次取里面的颜色，渲染 serves 里面柱子，那么又回到，图例，图例的颜色自然与数据渲染的柱子的颜色是保持一致的，虽然有  backgroundColor: '#cbcbcd',  这种配置，但是其实是设置的所有图例盒子的样式，不会设置到图例本身的样式
      更多的配置看收藏夹就行了，这里主要说下容易出错的地方

   2、color 属性，可以是一个数组， color: ['#ccc'] 比如柱状图的颜色，会从里面依次读取，如果，没有此属性，颜色会自动填充，图例的颜色也从此处获取

   3、tooltip 提示框 也就是鼠标放上去的时候，出现的框了，包括坐标轴指示器的设置
    tooltip: {   // 
            trigger: "axis", // 触发类型，默认数据触发，可选为：'item' ¦ 'axis' 设为 asix 默认显示全部，设为item的话，鼠标到哪里，才显示那一项的信息的，并且 axisPointer会效果，不在有线或者阴影了
            backgroundColor: 'rgba(0,0,0,0.7)', 还有各种的样式的话，可以参考百度收藏的标签吧
            axisPointer: { 
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow' | cross 鼠标放上去是阴影还是 线 设为cross的话，y轴的描述也会出现的
                lineStyle : {          // 直线指示器样式设置 如果是线的话 相关的样式配置
                    color: '#48b',
                    width: 2,
                    type: 'solid'    // 线的类型，其实可以设置成实线或者虚线 虚线是 dashe
                },
                shadowStyle : {              // 阴影指示器样式设置 如果是阴影的话相关的配置
                    width: 'auto',         // 阴影大小 这属性设置了没有用，默认会是x轴的每一组的大小吧
                    color: 'rgba(150,150,150,0.3)'  // 阴影颜色 
                },
                label: {   // 此属性可以使得鼠标放入显示提示框的同时，高亮下面x轴的刻度，可以设置背景
                    show: true,
                    backgroundColor: 'red',
                },
            },
            textStyle: {
                color: 'blue'
            },
            showDelay: 20,  // 显示延迟，添加显示延迟可以避免频繁切换，单位ms 注意设置了此属性以后，当你的鼠标离开了图，提示框都还在的。。。
            hideDelay: 100,  // 隐藏延迟，单位ms
        },

  4、title 图表标题  标题和 y 轴相关配置 类似，也可以显示一个类似标题的文字
      title: {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '主标题',//主标题文本，'\n'指定换行
        link:'',//主标题文本超链接,默认值true
        subtext: '副标题',//副标题文本，'\n'指定换行
        sublink: '',//副标题文本超链接       
        x: 'left',                 // 水平安放位置，默认为左对齐，可选为：
                                   // 'center' ¦ 'left' ¦ 'right'
                                   // ¦ {number}（x坐标，单位px） 可以设置为 20%这样子
        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                   // 'top' ¦ 'bottom' ¦ 'center'
                                   // ¦ {number}（y坐标，单位px）
        itemGap: 10,               // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'          // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'          // 副标题文字颜色
        }
      },

  5、grid 网格 首先整张图表就像是铺在一个容器里面的，可以使用此属性设置该图表距离容器的 四个方向的距离
    这属性似乎就是设置 位置内容边距吧，至于 网格线这东西，好像是在 x轴 和 y 轴的属性里面进行设置的
    grid: {
        left: '1%',  // 距离左边的距离，可以是 字符 单位 px 比如 '20'就是 20px 吧 或者数值
        right: '1%',
        bottom: '0%',
        containLabel: true,  // 控制是否显示 x 轴 和 y 轴
    },

  6、xAxis 横轴配置 包括横轴的刻度线样式等
     xAxis: [  // 当然也可以写成对象的形式，写成数组可以设置多个刻度的应该是
        { 
            type: 'category',  // 设为 value 是 数值型的 category 是类目轴 
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            boundaryGap: true,// 刻度离纵轴有无间隙，默认true有间距 boundaryGap: ['20%', '20%'] 非类目轴可用
            name: '吨',
            splitLine :{    //网格线 注意 在x轴设置的是纵轴的线
                lineStyle:{
                    type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                    color: 'red'  // 可以设置线的颜色
                },
                show:true //隐藏或显示
            },
            axisLine: {  // 当前x轴的线条的颜色，包括子的颜色与之同步了
                lineStyle: {
                    color: 'red'
                }
            },
            nameTextStyle: {  // name 属性（x轴名字）的样式 其实需要配合 grid 的right 设置距离右边，效果更佳
                color: "#cbcbcd",
                padding: [10,20,-10,23]  // 设置 name 的位置，微调 设为负值的话效果相反的就是
            },
            axisTick: {  // 是否显示那个小刻度，也就是凸出来的哪一点点，如果设置为 false 则刻度不见了
                show: false
            },
        }
    ],   
    如果type是value 的话，可以显示数字加 ml比如 
        axisLabel: {
        formatter: '{value} ml'
    }
    注意 如果 type 是 value 的话，还有几个属性可以设置 x轴是会自动读取
                        min: 0,
                        max: 60,
                        interval: 10, 

      axisLabel : { 
          // clickable:true,//并给图表添加单击事件  根据返回值判断点击的是哪里
          interval: 2,     // 隔着几组数据显示一个刻度，例如值为 2 那么x轴就只是显示：周一、周四、周日
          rotate: 40,// 文字倾斜度 x 坐标轴的刻度样式，倾斜角度 可以是负值
      },                    

  7、 serves 图表数据
            {
              name: 'bar', // 名字 这个名字 在legend 属性中用到，用于显示他的图例
              type: 'bar',  // 图表类型
              barWidth: 10,  粗细
              stack: 'total2',  // 这个值也是有用的，主要是 在该serves数组中，一样的值会叠加在一起
            // barMaxWidth: 7,
              itemStyle: { 
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#14c8d4' },
                    { offset: 1, color: '#43eec6' },
                  ]),
                },
              },
              data: getLineData.barData,
            },
      注意，当柱状图 是从左向右延伸的，那么，其实 x轴可能是 value 而y轴可能是category 轴，相反了
  </pre>
</div>

</template> 

<script>
import Chart from '@/components/Charts/LineMarker';
import bar2 from '@/components/Charts/bar2';
import bar3 from '@/components/Charts/bar3';
import bar4 from '@/components/Charts/bar4';
import bar5 from '@/components/Charts/bar5';
import bar6 from '@/components/Charts/bar6';
import pie1 from '@/components/Charts/pei1';
import line2 from '@/components/Charts/line2';
import chart1 from '@/components/Charts/chart1';
import chart2 from '@/components/Charts/chart2';
import chart3 from '@/components/Charts/chart3';
import chart42 from '@/components/Charts/chart4'; 
import txt2 from '@/components/Charts/txt';
export default {
  name: 'LineChart',
  components: {  
    Chart,
    bar2,
    bar3,
    bar4,
    bar5,
    bar6,
    pie1,
    line2,
    chart1,
    chart2,
    chart3,
    chart42,
    txt2
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.chart-container{
  width: 420px;
  height: 175px;
}
.chart-container2{
  height: 375px;
}
.chart-container3{
  width: 200px;
}
.chart-container4{
  width: 90%;
  height: 500px;
}
.chart-container5{
  width: 40%;
  height: 300px;
  background: rgb(189, 228, 177)
}
.chart-container6{
  width: 90%;
  height: 500px;
}
</style>
