<template>
 <div>
    <div id="chart">
      <apexchart type="line" height="360" width="750" :options="chartOptions" :series="series"></apexchart>
    </div>
 </div>
</template>
<script scoped>

export default {
    data() {
      return {
          series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 198]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
       }
    }
}
</script>