<template>
  <div :id="id" style="height: 100% ;width: 100%;" />
</template>
 
<script>
import echarts from 'echarts'  
import resize from './mixins/resize' 
import { getLineData } from './data'
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
          backgroundColor: '#0f375f',
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#999',
              },
            },
          },
          legend: {
            data: ['line', 'bar'],
            textStyle: {
              color: '#ccc',
            },
          },
          xAxis: {
            data: getLineData.category,
            axisLine: {
              lineStyle: {
                color: '#ccc',
              },
            },
          },
          yAxis: {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: '#ccc',
              },
            },
          },
          series: [
            {
              name: 'line',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 15,
                itemStyle: {
                normal: {
                  barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#14c8d4' },
                    { offset: 1, color: '#43eec6' },
                  ]),
                },
              },
              data: getLineData.lineData,
            },
            {
              name: 'bar',
              type: 'bar',
              barWidth: 10,
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
            {
              name: 'line',
              type: 'bar',
              barGap: '-100%',
              barWidth: 10,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(20,200,212,0.5)' },
                    { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                    { offset: 1, color: 'rgba(20,200,212,0)' },
                  ]),
                },
              },
              z: -12,
              data: getLineData.lineData,
            },
            {
              name: 'dotted',
              type: 'pictorialBar',
              symbol: 'rect',
              itemStyle: {
                normal: {
                  color: '#0f375f',
                },
              },
              symbolRepeat: true,
              symbolSize: [12, 4],
              symbolMargin: 1,
              z: -10,
              data: getLineData.lineData,
            },
          ],
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


