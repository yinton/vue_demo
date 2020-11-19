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
                    title: '激活阿萨德',
                    pieData: [         
                        { value: 100, name: "计划产量" },
                        { value: 30, name: "实际产量" },
                    ],
                    color: ['#0b3c52','#1995b8']
                };
                this.chartOptions.series[0].data = val.pieData;
            //    let sum = val.pieData[0].value+val.pieData[1].value;   //计算百分比 -- 实际或者是 计划
                let xk = ((val.pieData[0].value / val.pieData[1].value) * 100).toFixed(2);
                this.chartOptions.title.text = `{b|${xk}}{d|%}`+"\n"+`{a|${val.title}}`;
                this.chartOptions.color = val.color;

        }
    }
  },
  data() {
    return {
       chart: null,
                chartOptions: {
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}<br/> {d}%|{c}"
                    },
                    title: {
                        //   text: ["{a|签订进度}","{c|}",`{b|90.00%}`].join("\n"),
                        text: null,
                        left: "center",
                        top: "32",
                        fontFamily: 'myFirstFont',
                        textStyle: {
                            color: "#ccc",
                            rich: {
                                a: {
                                    fontSize: 12,
                                    color: "#cdcdcd",
                                    fontFamily: 'myFirstFont',
                                    // fontFamily: 'myFirstFont',
                                    padding:[0 ,0, 4, 0 ],
                                },
                                b: {
                                    fontSize: 18,
                                    color: "#cdcdcd",
                                    // fontFamily: 'myFirstFont',

                                },
                                d: {
                                    fontSize: 13,
                                    color: "#cdcdcd",

                                }
                            }
                        }
                    },
                    grid: {
                        top: "0%"
                        // left: "3%",
                        // right: "4%",
                        // bottom: "40%",
                        // containLabel: true
                    },
                    color: [],
                    series: [
                        {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["70%", "84%"],
                            avoidLabelOverlap: false,
                            startAngle:120, //起始的角度
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: null
                        }
                    ]
                },   
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
