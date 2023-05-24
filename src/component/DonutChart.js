
import ReactApexChart from 'react-apexcharts';
import React from 'react'
class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [43, 20, 15, 8, 14],
      options: {
        chart: {
          type: 'donut',
          animations:{
            enabled:true,
            easing:"easeinout",
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  color:"#000000",
                  fontSize: "20 px",
                },
                name:{
                  show: true,
                  color:"#000000",
                },
                value:{
                  color:"#000000",
                }
              },
            }
          }
        },
        labels: ["Burned after private sale", "Initial Liquidity Pool", "Private Sale", "Later Liquidity Pool", "Marketing"],
        responsive: [{
          breakpoint: 375,
          options: {
            chart: {
              width: 375
            }
          }
        }],

        legend: {
          show:false,
        },
      },
    };
  }

  render() {
    return (
    <div id="chart">
      <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
    </div>
    );
  }
}

export default ApexChart;