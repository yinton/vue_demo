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
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
            show: true,
        },

        series : [
            {
                center: ["50%", "44%"],
                name: '土壤健康',
                type: 'gauge',
                z: 1,
                min: 0,
                max: 100,
                splitNumber: 10,
                pointer: {
                    width:3,

                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式 也就是赠一个的边框了
                        width: 10,
                        color: [[0.2, '#1fd370'], [0.8, '#00a0ea'], [1, '#fa3549']]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        width:2       //小刻度的样式
                    }
                },
                splitLine: {           // 分隔线
                    length: 20,         // 属性length控制线长
                    lineStyle: {        // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto',
                        width:2          //大刻度的样式 大分割线

                    }
                },
                axisLabel: {
                    borderRadius: 2,
                    color: 'auto',
                    padding: 0,
                    fontSize:12 , //设置刻度的值
                    fontFamily: 'myFirstFont',
                },
                detail : {
                    formatter:function(value){
                        return `{a|12.5}`+'\n'+'{b|mg/kg}'+'\n'+'{c|钾}'
                    },

                    offsetCenter: [0, "50%"],
                    rich: {
                        a:{
                            fontSize:21,
                            color:'#ffffff',
                            fontFamily: 'myFirstFont',

                        },
                        b:{
                            fontSize:12,
                            color:'#ffffff',
                            fontFamily: 'myFirstFont',
                            padding:[8,0,0,0]

                        },
                        c:{
                            fontSize:28,
                            color:'#ffffff',
                            fontFamily: 'myFirstFont',

                        },
                    }
                },
                data:[{value: 70, name: ''}]
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

