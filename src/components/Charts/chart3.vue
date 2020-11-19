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
        color: ["#00e818","#dd0f19"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
            //    type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show: true,
        //    data: ['A', 'B', 'C']
            x: 'center',
            y:'bottom',
            textStyle: {
                color: "#ccc",
                fontSize:13,
                padding: [3, 0, 0, 3]  //图例文字的设置
            },

        },
        grid: {
            top: "18%", 
            // left: "3%",
            right: "20%",
            bottom: "16%",
            // borderColor: "red",
            //  containLabel: true
        },

        xAxis: [
            {
                type: "category",
              //  minInterval: 2,
             //   interval: 'auto',
                // axisTick: {
                //     show: true,
                // },
                // splitLine: {
                //     show: false
                // },
                minInterval: 1,
                nameTextStyle: {
                    color: "#cccc",

                },
                axisTick: {
                    show: true
                },
                axisLine: {
                    lineStyle: {
                        color: "#ffffff"
                    }
                },
                axisLabel: {
                 //   interval: 0,   //全显示刻度
                    color: "#cccc",
                    fontSize:14,
                    formatter: function(value,index) {
                        if(index===0||index==4||index===8){
                            return value.split("").join("");
                        }
                        
                    }
                },
                data: [
                    "00：00",
                    "5",
                    "5",
                    "1",
                    "10:00",
                    "5",
                    "5",
                    "1",
                    "20:00"
                ]
            }
        ],
        yAxis: [
            {
                type: "value",

                name: '空气温度℃',

                min: 0,
                max: 15,
          //      splitNumber: 3,
                interval: 3,   //刻度显示已最小值逐渐加1
          //      axisLabel: {verticalAlign: "top", color: "#cbcbcb",fontSize:16,formatter: "{value}"},
                // axisTick: {
                //     show: false
                // },
                splitLine: {
                    lineStyle: {
                     //   color: "#074b58",
                        
                    },
                    show: false
                },
                nameTextStyle: { //左边刻度标识的位置 
                 //   color: "#fe0000", 
                    padding:[0,0,0,20],
                    fontSize:14
                },
                axisLine: {
                    lineStyle: {
                        color: "#fe0000"
                    }
                }
            },
            {
                type: "value",
                name: '空气湿度(%HR)',
                min: 0,
                max: 100,
          //      splitNumber: 3,
                interval: 20,   //刻度显示已最小值逐渐加1
          //      axisLabel: {verticalAlign: "top", color: "#cbcbcb",fontSize:16,formatter: "{value}"},
                // axisTick: {
                //     show: false
                // },
                splitLine: {
                    lineStyle: {
                    //    color: "#074b58",
                        
                    },
                    show: false
                },
                nameTextStyle: { //左边刻度标识的位置
                  //  color: "#00e818",
                    padding:[0,0,0,20],
                    fontSize:14
                },
                axisLine: {
                    lineStyle: {
                        color: "#00e818"
                    }
                }
            },
        ],
        series: [ 
            {
                name:'空气温度℃',
                type:'line',
            //    stack: 'total',
                symbolSize: 5,
          //      symbol: 'circle', //折线图的圆演示
                data:[10.0, 11.34, 11.26, 13.12, 14.64, 15, 14.36, 6,13],
                itemStyle: {
                    // normal: {
                    //     barBorderRadius: 0,
                    //     label: {
                    //       //  show: true,
                    //         position: 'top',
                    //         color:'#cbcdcc',
                    //         fontSize:15,
                    //         formatter(p) {
                    //             return p.value > 0 ? p.value+'%' : ''
                    //         }
                    //     }
                    // }
                },
            },
            {
                name:'空气湿度(%HR)',
                type:'line',
              //  stack: 'total',
                symbolSize: 5,
          //      symbol: 'circle', //折线图的圆演示
                data:[9, 14.34, 10.26, 10.12, 10.64, 12, 11.36, 11,13],
                itemStyle: {
                    // normal: {
                    //     barBorderRadius: 0,
                    //     label: {
                    //       //  show: true,
                    //         position: 'top',
                    //         color:'#cbcdcc',
                    //         fontSize:15,
                    //         formatter(p) {
                    //             return p.value > 0 ? p.value+'%' : ''
                    //         }
                    //     }
                    // }
                },
            },
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

 