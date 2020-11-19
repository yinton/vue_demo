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
    return {
      chart: null,
    chartOptions: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['水','电','煤','气']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: [
            {
              type: "value",
              name: "(水m³)",
              min: 0,
              max: 2000,
              interval: 200,
              offset: 60,
              // interval: 20,
              position: 'left',
              // axisTick: {   //刻度显示情况
              //     show: false
              // },
              axisLine: {
                lineStyle: {

                }
              },
              nameTextStyle: {
                //左边刻度标识的位置

                padding: [0, 0, -8, 5],
                fontSize: 12
              },
              axisLabel: {
                // margin: 10,

                textStyle: {
                  fontSize: 11
                }
              },
              splitLine: {
                //网格线
                show: false
              }
            },
            {
              type: "value",
              name: "(电kw)",
              min: 0,
              max: 2000,
              interval: 200,
              // interval: 20,
              position: 'left',
              // axisTick: {   //刻度显示情况
              //     show: false
              // },
              axisLine: {
                lineStyle: {

                }
              },
              nameTextStyle: {
                //左边刻度标识的位置

                padding: [0, 0, -8, 5],
                fontSize: 12
              },
              axisLabel: {
                // margin: 10,

                textStyle: {
                  fontSize: 11
                }
              },
              splitLine: {
                //网格线
                show: false
              }
            },
            {
              type: "value",
              name: "(煤吨)",
              min: 0,
              max: 500,
              interval: 50,
              // interval: 20,
              offset: 60,
              position: 'right',
              // axisTick: {   //刻度显示情况
              //     show: false
              // },
              axisLine: {
                lineStyle: {

                }
              },
              nameTextStyle: {
                //左边刻度标识的位置

                padding: [0, 0, -8, 5],
                fontSize: 12
              },
              axisLabel: {
                // margin: 10,

                textStyle: {
                  fontSize: 11
                }
              },
              splitLine: {
                //网格线
                show: false
              }
            },
            {
              type: "value",
              name: "(气m³)",
              min: 0,
              max: 100,
              interval: 10,
              // interval: 20,
              position: 'right',
              // axisTick: {   //刻度显示情况
              //     show: false
              // },
              axisLine: {
                lineStyle: {

                }
              },
              nameTextStyle: {
                //左边刻度标识的位置

                padding: [0, 0, -8, 5],
                fontSize: 12
              },
              axisLabel: {
                // margin: 10,

                textStyle: {
                  fontSize: 11
                }
              },
              splitLine: {
                //网格线
                show: false
              }
            },
          ],
          series: [
            {
              name:'水',
              type:'line',
              stack: '总量1',
              yAxisIndex: 0,
              smooth: true,
              data:[1500, 1232, 1201, 1154, 1190, 1330, 1410]
            },
            {
              name:'电',
              type:'line',
              stack: '总量2',
              yAxisIndex: 1,
              smooth: true,
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'煤',
              type:'line',
              stack: '总量',
              yAxisIndex: 2,
              smooth: true,
              data:[20, 32, 51, 74, 90, 30, 80]
            },
            {
              name:'气',
              type:'line',
              stack: '总量4',
              yAxisIndex: 3,
              smooth: true,
              data:[20, 32, 51, 74, 90, 30, 80]
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
      //console.log('11111111111111', this.chartData);
      this.chart.setOption(this.chartOptions)
    }
  }
}
</script>
