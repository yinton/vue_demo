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
  watch: {
    charts1: {
        deep: true,
         immediate: true,
        handler(val) { 
           // this.chartOptions.backgroundColor = '#ccc';
          const xData = (function() {
              const data = [];
              for (let i = 1; i < 13; i++) {
                  data.push(i + '月')
              }
              return data
          }());
       //   this.chartOptions.xAxis[0].data = xData;
          //       let lef = [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 2208, 3372, 1484, 1078];
          //       let cen = [1709, 1917, 455, 2910, 789, 1433, 2544, 1285, 3208, 2672, 4484, 4078];
          //       let rig = [1327, 1776, 1507, 1200, 1800,3482, 3204, 3290, 3001, 2951, 2381, 2220];
          // this.chartOptions.series[0].data = lef;
          // this.chartOptions.series[1].data = cen;
          // this.chartOptions.series[2].data = rig;

        }
    }
  },
  data() {
    return {
      chart: null,
                chartOptions: {
                    //   backgroundColor: '#344b58',
                    color:['#625454','#836f57','#58804e','#2e7c88','#115fc1','#585aa5','#537fb0','#3258ad','#625453','#494963'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    title: {
                        text: '投入：',
                        subtext:'产出：',
                        x:20,
                        y:9,
                        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            fontFamily: 'Arial, Verdana, sans...',
                            fontSize: 12,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            color:'#ccc'
                        },
                    },
                    legend: {
                        x: '12.5%',
                        top: '1.5%',
                        textStyle: {
                            color: '#cbcbcd',
                           // padding: [3, 0, 0, 1],
                            fontSize:11
                        },
                        itemWidth:10,
                        itemHeight:10,
                        data:[
                            {name:'烟尘',icon:'rect'},
                            {name:'焙烧矿',icon:'rect'},
                            {name:'高硫精矿',icon:'rect'},
                            {name:'还原煤',icon:'rect'},
                            {name:'析渣/黄渣',icon:'rect'},
                            {name:'燃煤',icon:'rect'},
                            {name:'甲锡',icon:'rect'},
                            {name:'乙锡',icon:'rect'},
                            {name:'烟尘',icon:'rect'},
                            {name:'炉渣',icon:'rect'},
                        ],
                    },
                    grid: {
                        left: '3.3%',
                        right: '4%',
                        bottom: '2%',
                        containLabel: true
                    },
                    dataZoom: [{
                        show: false,
                        height: 30,
                        moveOnMouseMove:true,
                        xAxisIndex: [
                            0
                        ],
                        bottom: 30,
                       // start: 40,
                        end: 80,
                        // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                        // handleSize: '110%',
                        // handleStyle: {
                        //     color: '#d3dee5'
                        // },
                        // textStyle: {color: '#fff' },
                        // borderColor: '#90979c'

                    }, {
                        type: 'inside',
                        show: false,
                        height: 15,
                        start: 1,
                        end: 35
                    }],
                    xAxis: {
                        type: 'value',
                        name:'（吨）',
                        min: 0,
                        max: 60,
                        interval: 10,
                        nameTextStyle: { //左边刻度标识的位置
                            color: "#cbcbcd",
                            padding:[20,-20,50,-30],
                            fontSize:12
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#364f63'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            color:'#cbcbcd'
                        },
                    },
                    yAxis: {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                        axisLine: {
                            lineStyle: {
                                color: '#364f63'
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            color:'#cbcbcd'
                        },
                    },
                    series: [
                        {
                            name: '烟尘',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [10, 5, 11, 14, 10, 14, 10]
                        },
                        {
                            name: '焙烧矿',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [7, 8, 11, 14, 10, 14, 4]
                        },
                        {
                            name: '高硫精矿',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [17, 18, 7, 4, 5, 9, 9]
                        },
                        {
                            name: '还原煤',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [7, 8, 8, 8, 10, 14, 4]
                        },
                        {
                            name: '析渣/黄渣',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [7, 12, 11, 14, 10, 14, 10]
                        },
                        {
                            name: '燃煤',
                            type: 'bar',
                            stack: '总量',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [7, 12, 11, 14, 10, 14, 10]
                        },
                        {
                            name: '甲锡',
                            type: 'bar',
                            stack: '总量2',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [9, 15, 12, 10, 10, 11, 8]
                        },
                        {
                            name: '乙锡',
                            type: 'bar',
                            stack: '总量2',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [12, 10, 8, 6, 8, 13, 11]
                        },
                        {
                            name: '烟尘',
                            type: 'bar',
                            stack: '总量2',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [20, 10, 8, 16, 8, 13, 11]
                        },
                        {
                            name: '炉渣',
                            type: 'bar',
                            stack: '总量2',
                            barWidth:12,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'insideRight'
                                }
                            },
                            data: [18, 10, 18, 6, 8, 13, 11]
                        },
                    ]
                }
    }
  },
  mounted() {
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
      this.chart.setOption(this.chartOptions)
    }
  }
}
</script>
