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
        color: ["#226ea0","#c3861c"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            bottom: -5,
            itemWidth: 18,          // 图例图形宽度
            itemHeight: 18,
         //   icon: ['rect','diamond'],    //图例形状  rect 'roundRect', 'triangle', 'diamond', 'pin', 'arrow','circle'
            itemGap: 40,
            textStyle: {
                color: "#ccc",
                fontSize:15,
                padding: [3, 0, 0, 7]  //图例文字的设置
            },
         //   data: ["实际育苗株数","育苗进度"],
            data:[
                {
                    name:"实际育苗株数",
                    icon:"rect"
                },
                {
                    name:"育苗进度",
                  //  color:'red'
                },
            ]
        },
        grid: {
            top: "24%",
            // left: "3%",
            right: "10%",
            bottom: "16%",
            // borderColor: "red",
            //  containLabel: true
        },

        xAxis: [
            {
                type: "category",
                minInterval: 100,
                interval: 100,
                axisTick: {
                    show: false
                },
                nameTextStyle: {
                    color: "#cccc",

                },
                axisLine: {
                    lineStyle: {
                        color: "#05487f"
                    }
                },
                axisLabel: {
                    interval: 0,
                    color: "#cccc",
                    fontSize:14,
                    formatter: function(value) {
                        return value.split("").join("");
                    }
                },
                data: [
                    "昆明",
                    "玉溪",
                    "红河",
                    "楚雄",
                    "大理",
                    "昭通",
                    "宝山",
                    "文山",
                    "普洱",
                    "临沧",
                    "丽江"
                ]
            }
        ],
        yAxis: [
            {
                type: "value",
                name: '亿株',
                min: 0,
                max: 8,
                splitNumber: 1,
                interval: 1,   //刻度显示已最小值逐渐加1
                axisLabel: {verticalAlign: "top", color: "#cbcbcb",fontSize:16,formatter: "{value}"},
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#074b58"
                    }
                },
                nameTextStyle: { //左边刻度标识的位置
                    color: "#ccc",
                    padding:[0,27,0,0],
                    fontSize:16
                },
                axisLine: {
                    lineStyle: {
                        color: "#074b58"
                    }
                }
            },
            {
                type: "value",

                name: '进度',

                min: 0,
                max: 100,
                // splitNumber: 1,
                interval: 20,   //刻度显示已最小值逐渐加20
                axisLabel: {verticalAlign: "top",fontSize:16, color: "#cbcbcb",formatter: "{value}%"},
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

                splitArea: {
                    show: false
                },
                nameTextStyle: { //左边刻度标识的位置
                    color: "#ccc",
                    padding:[0,0,0,45],
                    fontSize:16
                },
                axisLine: {
                    lineStyle: {
                        color: "#074b58"
                    }
                }
            },
        ],
        series: [
            {
                name: "实际育苗株数",
                type: "bar",
                stack: "广告",
                barWidth:22,
                yAxisIndex: 0,   //设置后分别显示 双Y轴的两组数据域
                label: {
                    normal: {
                        show: false,
                        position: "inside"
                    }
                },
                data: [6.20, 5.32, 7.01, 6.74, 7.0, 6.30, 5.10, 6.50, 6.61, 5.29,6.20]
            },
            {
                name:'育苗进度',
                type:'line',
                stack: 'total',
                yAxisIndex: 1,
                symbolSize: 19,
                symbol: 'circle', //折线图的圆演示
                data:[94,91,91,93,96,92,90,91,91,95,93],
                itemStyle: {
                    normal: {
                        barBorderRadius: 0,
                        label: {
                            show: true,
                            position: 'top',
                            color:'#cbcdcc',
                            fontSize:15,
                            formatter(p) {
                                return p.value > 0 ? p.value+'%' : ''
                            }
                        }
                    }
                },
            }
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
