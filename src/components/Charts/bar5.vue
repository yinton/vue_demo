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
            let val = {
                top:[22, 35, 47, 16, 5, 42, 56, 62, 15, 26, 35, 18],
                bot:[15, 26, 11, 34, 25, 14, 36, 15, 27, 42, 16, 42],
            };
            this.chartOptions.series[0].data = val.top;
            this.chartOptions.series[1].data = val.bot;
        }
    }
  },
  data() {
    return {
      chart: null,
        chartOptions:{
            // backgroundColor: '#394056',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                top: '4.5%',
                // icon: 'rect',
                x: '30%',
                itemWidth: 19,
                itemHeight: 12,
                itemGap: 20,
                data: ['吨锡电耗', '总电耗'],
                textStyle: {
                    fontSize: 12,
                    color: '#cbcbcd'
                }
            },
            grid: {
                top: 43,
                left: '3.5%',
                right: '3.5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#364f63'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                        margin: 10,
                    color:'#cbcbcd',
                    interval:'auto',  //代表显示所有x轴标签  刻度的显示的情况；

                    textStyle: {
                        fontSize: 11,

                    }
                },
                // axisTick: {
                //     show: false
                // },

                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]
            }],
            yAxis: [{
                type: 'value',
                name: '(kw)',
                min: 0,
                max: 80,
                interval: 20,
                // axisTick: {   //刻度显示情况
                //     show: false
                // },
                axisLine: {
                    lineStyle: {
                        color: '#364f63'
                    }
                },
                nameTextStyle: { //左边刻度标识的位置
                    color: "#cbcbcd",
                    padding:[0,0,-8,5],
                    fontSize:12
                },
                axisLabel: {
                    // margin: 10,
                    color:'#cbcbcd',
                    textStyle: {
                        fontSize: 11
                    }
                },
                splitLine: {    //网格线
                    show: false
                },
            }],
            dataZoom: [{
                show: false,
                height: 30,
                xAxisIndex: [
                    0
                ],
                bottom: 30,
                start: 10,
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
                name: '吨锡电耗',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1.5,
                    }
                },
                areaStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: 'rgb(25, 59, 86)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgb(25, 59, 86)'
                        // }], false),
                        // shadowColor: 'rgb(0, 0, 0, 1)',
                        // shadowBlur: 10
                        color:'rgb(58, 88, 88)'
                    }
                },
                itemStyle: {   //鼠标滑过时的显示图标大小
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: []
            }, {
                name: '总电耗',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1.5
                    }
                },
                areaStyle: {
                    normal: {
                        // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        //     offset: 0,
                        //     color: 'rgba(0, 136, 212, 0.3)'
                        // }, {
                        //     offset: 0.8,
                        //     color: 'rgba(0, 136, 212, 0)'
                        // }], false),
                        // shadowColor: 'rgba(0, 0, 0, 0.1)',
                        // shadowBlur: 10
                        color:'rgb(25, 59, 86)'
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(0,136,212)',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12

                    }
                },
                data: []
            }]
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
