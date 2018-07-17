<template>
    <div>
      <div id="charts1"></div>
    </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        charts1_init(){
          let myChart = this.$echarts.init(document.getElementById('charts1'))
          myChart.setOption({
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          });
        }
      },
      mounted(){
        this.charts1_init()
      },
      created(){

      }
    }
</script>

<style>
#charts1{
  height: 500px;
}
</style>
