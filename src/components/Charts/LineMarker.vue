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
                this.chartOptions.xAxis[0].data = xData;
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
                chartOptions:{
                    //   backgroundColor: '#344b58',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: "shadow",
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    color:['#695c94','#498e9e','#5c9562','#94915c','#625454'],
                    title: {
                        text: '投入：',
                        subtext:'产出：',
                        x:80,
                        y:5,
                        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                            fontFamily: 'Arial, Verdana, sans...',
                            fontSize: 12,
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            color:'#ccc',
                        },
                    },
                    grid: {
                        left: '12%',
                        right: '3%',
                        borderWidth: 0,
                        top: 50,
                        bottom: 25,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    legend: {
                        x: '30%',
                        top: '1.5%',
                        textStyle: {
                            color: '#cbcbcd',
                          //  padding: [3, 0, 0, 1]
                        },
                        itemWidth:10,
                        itemHeight:10,
                        data:[
                            {name:'锡次精矿',icon:'rect'},
                            {name:'低硫锡中矿',icon:'rect'},
                            {name:'高硫锡中矿',icon:'rect'},
                            {name:'黄铁矿',icon:'rect'},
                            {name:'烟尘',icon:'rect'},
                        ]
                    },
                    calculable: true,
                    xAxis: [{
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#364f63'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        // axisTick: {
                        //     show: false
                        // },
                        splitArea: {
                            show: false
                        },
                        axisLabel: {
                            interval: 0,
                            color:'#cbcbcd'
                        },
                        data: []
                    }],
                    yAxis: [{
                        type: 'value',
                        scale : true,
                        name:'（吨）',
                        min: 0,
                        max: 6000,
                        interval: 2000,
                        // splitNumber : 10,   //和 interval 相冲突，因为设置了 interval 就是分段了，这个也是
                        nameTextStyle: { //左边刻度标识的位置
                            color: "#cbcbcd",
                            padding:[0,0,-6,0],
                            fontSize:13
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#364f63'
                            }
                        },
                        // axisTick: {
                        //     show: false
                        // },
                        axisLabel: {
                            interval: 0,
                            color:'#cbcbcd'
                        },
                        splitArea: {
                            show: false
                        }
                    }],
                    dataZoom: [{
                        show: false,
                        height: 30,
                        moveOnMouseMove:true,
                        xAxisIndex: [
                            0
                        ],
                        bottom: 30,
                        start: 40,
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
                    series: [{
                        name: '锡次精矿',
                        type: 'bar',
                        stack: 'total2',
                        // barMaxWidth: 7,
                        barWidth:12,
                        symbol: 'circle',
                        barGap: 0,
                        itemStyle: {
                            normal: {
                                // color: '',
                                label: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    },
                                    position: 'insideTop',
                                    formatter(p) {
                                        return p.value > 0 ? p.value : ''
                                    }
                                }
                            }
                        },
                        data: [1709, 1917, 455, 2910, 789, 1433, 2544, 1285, 3208, 2672, 4484, 4078]
                    }, {
                        name: '低硫锡中矿',
                        type: 'bar',
                        stack: 'total2',
                        // barMaxWidth: 7,
                        barWidth:12,
                        symbol: 'circle',
                        barGap: 0.2,
                        itemStyle: {
                            normal: {
                                // color: '',
                                label: {
                                    show: false,
                                    textStyle: {
                                        color: '#fff'
                                    },
                                    position: 'insideTop',
                                    formatter(p) {
                                        return p.value > 0 ? p.value : ''
                                    }
                                }
                            }
                        },
                        data: [1327, 1776, 1507, 1200, 1800,3482, 3204, 3290, 3001, 2951, 2381, 2220]
                    },
                        {
                            name: '高硫锡中矿',
                            type: 'bar',
                            stack: 'total2',
                            // barMaxWidth: 7,
                            barWidth:12,
                            symbol: 'circle',
                            barGap: 0.2,
                            itemStyle: {
                                normal: {
                                    // color: '',
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: '#fff'
                                        },
                                        position: 'insideTop',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : ''
                                        }
                                    }
                                }
                            },
                            data: [1709, 1917, 455, 2910, 789, 1433, 2544, 1285, 3208, 2672, 4484, 4078]
                        },
                        {
                            name: '黄铁矿',
                            type: 'bar',
                            stack: 'total2',
                            // barMaxWidth: 7,
                            barWidth:12,
                            symbol: 'circle',
                            barGap: 0.2,
                            itemStyle: {
                                normal: {
                                    // color: '',
                                    label: {
                                        show: false,
                                        textStyle: {
                                            color: '#fff'
                                        },
                                        position: 'insideTop',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : ''
                                        }
                                    }
                                }
                            },
                            data: [1327, 1776, 1507, 1200, 1800,3482, 3204, 3290, 3001, 2951, 2381, 2220]
                        },
                        {
                            name: '烟尘',
                            type: 'bar',
                            stack: 'total',
                            barWidth:12,
                            symbol: 'circle',
                            barGap: 0.2,
                            itemStyle: {
                                normal: {
                                    // color: '#18b8ac',
                                    barBorderRadius: 0,
                                    label: {
                                        show: false,
                                        position: 'top',
                                        formatter(p) {
                                            return p.value > 0 ? p.value : ''
                                        }
                                    }
                                }
                            },
                            data: [1709, 1917, 455, 2910, 789, 1433, 2544, 1285, 3208, 2672, 4484, 4078]
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
      console.log('11111111111111', this.chartData);
      this.chart.setOption(this.chartOptions)
    }
  }
}
</script>
