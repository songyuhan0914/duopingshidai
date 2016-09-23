import React from 'react'
import echarts from 'echarts'

class About extends React.Component {
  componentDidMount(){
    let option = {
        title: {
            text: '技能等级'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["javascript","react","html5","css","jquiry","ps"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 15, 10, 20]
        }]
    }
    let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
  }
  render () {
    return(
       <div id="main" style={{width: '600px',height:'400px'}}></div>
    )
  }
}

export default About;
