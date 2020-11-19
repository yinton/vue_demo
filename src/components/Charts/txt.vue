<template>
  <div :id="id" style="height: 100% ;width: 100%;" />
</template>
 
<script>
import echarts from 'echarts' 
import resize from './mixins/resize'

export default {  
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    chartData: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    this.size = 20
    return {
    size: 24,
    chart: null,
    chartOptions: {
    color: ["#226ea0","#c3861c"], 
    tooltip: {
        trigger: 'axis',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
        showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
   //     hideDelay: 100,
        backgroundColor: 'red',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'cross',        // 默认为直线，可选为：'line' | 'shadow' cross 
            shadowStyle : {              // 阴影指示器样式设置 如果是阴影的话相关的配置
                width: '240px',         // 阴影大小
                color: 'rgba(150,150,150,0.9)'  // 阴影颜色
            },
            lineStyle : {          // 直线指示器样式设置 如果是线的话 相关的样式配置
                color: '#48b',
                width: 10,
                type: 'dashe'
            },
            label: {
                show: true,
                backgroundColor: 'red',
            },
        },
                   textStyle: {
                color: 'blue'
            }
    },

  legend:{
    show:true,
    orient:'horizontal',
    borderColor:'#df3434',
    borderWidth:2,
    data:[
        {
            name:'联盟广告',
            textStyle:{
                fontSize:12,
                fontWeight:'bolder',
                color:'#cccccc'
            },
        },
        {
            name:'邮件营销',
            textStyle:{
                fontSize: this.size,
                fontWeight:'bolder',
            },
        },
        {
            name:'搜索引擎',
            textStyle:{
                fontSize: this.size,
                fontWeight:'bolder',
            },
        },
     ]
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '4%',
        top: 70,
        containLabel: true,
        // backgroundColor: 'rgba(0,0,0,0)',
    },
    xAxis: [
        {
            type: 'category',
            name:'（吨）',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
           //boundaryGap: 50,// 刻度离纵轴有无间隙，默认true有间距
            boundaryGap: ['-50%', '-50%'],
            splitLine :{    //网格线
                lineStyle:{
                    type:'dashed',    //设置网格线类型 dotted：虚线   solid:实线
                    color: 'red'
                },
                show:true //隐藏或显示
            },
            axisLine: {
                lineStyle: {
                    color: 'red'
                }
            },
            nameTextStyle: { //左边刻度标识的位置
                color: "#cbcbcd",
                padding:[20,-20,50,-30],
                fontSize:12
            },
                minInterval: 100,
                interval: 100,
                // axisTick: {
                //     show: false
                // },

        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barGap: '200%',
            barWidth: 10,
            data: [320, 332, 301, 334, 390, 330, 320],
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#14c8d4' },
                        { offset: 1, color: '#ff4d4d' }
                    ]),
                    label: {
                        show: true,
                        position: 'top',
                        color:'#cbcdcc',
                 
                        formatter(p) {
                            return p.value > 0 ? p.value+'%' : ''
                        }
                    }
                }
            },
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
  
            barWidth: 10,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            barWidth: 10,
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            barWidth: 10,
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            barWidth: 10,
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
      ]
     }
    }
  },
  mounted() {
      // this.chartOptions.legend.data[1].textStyle.fontSize = this.size
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      //console.log('11111111111111', this.chartData);
      this.chart.setOption(this.chartOptions);  
     
    }
  }
}
</script>


    