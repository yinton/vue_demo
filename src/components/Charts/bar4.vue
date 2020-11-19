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
        handler(val2) { 
           // this.chartOptions.backgroundColor = '#ccc';
            let val = {
                lef:[0.1,0.2,0.1,0.3,0.1,0.2,0.2],
                rig:[0.1,0.1,0.3,0.1,0.2,0.1,0.2],
                color:['#4894ea','#fa2656'],
                legends :[
                    {name:'合格',icon:'rect'},
                    {name:'不合格',icon:'rect'},
                ]
            };
           const xData = ['TSP','PM10','SO2','NO2','酸雾','As','pb'];
           this.chartOptions.xAxis[0].data = xData;
                this.chartOptions.xAxis[0].data = xData;
                this.chartOptions.series[0].data = val.lef;
                this.chartOptions.series[1].data = val.rig;
                this.chartOptions.color = val.color;
                this.chartOptions.legend.data = val.legends;   //legned 需要两处同时赋值后才会正确显示出来
                this.chartOptions.series[0].name = val.legends[0].name;
                this.chartOptions.series[1].name = val.legends[1].name;

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
                    color: [],
                    grid: {
                        left: '12%',
                        right: '3%',
                        borderWidth: 0,
                        top: 40,
                        bottom: 30,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    legend: {
                        x: '30%',
                        top: '3.5%',
                        textStyle: {
                            color: '#cbcbcd',
                            padding: [3, 0, 0, 1]
                        },
                        itemGap:21,
                        itemWidth:10,
                        itemHeight:10,
                        data:[]
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
                        name:'（mgm³）',
                        min: 0,
                        max: 0.4,
                        interval: 0.1,
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
                        xAxisIndex: [
                            0
                        ],
                        bottom: 30,
                        start: 0,
                        end: 100,
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
                        end: 105
                    }],
                    series: [{
                        name: '进场原料',
                        type: 'bar',
                        stack: 'total',
                        // barMaxWidth: 7,
                        barWidth:15,
                        // symbol: 'circle',
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
                        data: []
                    },
                        {
                            name: '库存原料',
                            type: 'bar',
                            stack: 'total',
                            barWidth:17,
                            // symbol: 'circle',
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
                            data: []
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
