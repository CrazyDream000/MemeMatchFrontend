import ReactApexChart from "react-apexcharts";
import React from "react";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);
    let bgColor;
    if(props.historicalData[0][1] > props.historicalData[props.historicalData.length - 1][1])
      bgColor = '#DD0000'
    else
      bgColor = '#00DD00'
    this.state = {
      series: [
        {
          data: props.historicalData,
        },
      ],
      options: {
        annotations: {
          yaxis: [
            {
              y: props.historicalData[props.historicalData.length - 1][1]>100?props.historicalData[props.historicalData.length - 1][1].toFixed(2):props.historicalData[props.historicalData.length - 1][1].toFixed(6),
              borderColor: bgColor,
              label: {
                borderColor: bgColor,
                style: {
                  color: '#fff',
                  background: bgColor
                },
                text: 'Current Price' + props.historicalData[0][1]>100?props.historicalData[0][1].toFixed(2):props.historicalData[0][1].toFixed(6)
              }
            }
          ]
        },
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0,
            stops: [0, 90, 100],
          }
        },
        yaxis: {
         
          labels: {
              formatter: function (val) {
                if(val > 100)
                  return (val).toFixed(2) + "$";
                else
                  return (val).toFixed(6) + "$";
              },
          },    
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: false,
          y: {
            title: {
              formatter: (seriesName) => "Price",
            },
            formatter: function (val) {
              if(val > 100)
                  return (val).toFixed(2) + "USD";
                else
                  return (val).toFixed(6) + "USD";
            },
          },
        },
      },
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.historicalData !== this.props.historicalData) {
      let bgColor;
      if(this.props.historicalData[0][1] > this.props.historicalData[this.props.historicalData.length - 1][1])
        bgColor = '#DD0000'
      else
        bgColor = '#00DD00'
      this.setState({series: [{data:this.props.historicalData}]});
      this.setState({options: {
        annotations: {
          yaxis: [
            {
              y: this.props.historicalData[this.props.historicalData.length - 1][1]>100?this.props.historicalData[this.props.historicalData.length - 1][1].toFixed(2):this.props.historicalData[this.props.historicalData.length - 1][1].toFixed(6),
              borderColor: bgColor,
              label: {
                borderColor: bgColor,
                style: {
                  color: '#fff',
                  background: bgColor
                },
                text: 'Current Price' + this.props.historicalData[0][1]>100?this.props.historicalData[0][1].toFixed(2):this.props.historicalData[0][1].toFixed(6)
              }
            }
          ]
        },
        chart: {
          type: "area",
          stacked: false,
          height: 350,
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          text: "Stock Price Movement",
          align: "left",
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.6,
            opacityTo: 0,
            stops: [0, 90, 100],
          }
        },
        yaxis: {
         
          labels: {
              formatter: function (val) {
                if(val > 100)
                  return (val).toFixed(2) + "$";
                else
                  return (val).toFixed(6) + "$";
              },
          },    
        },
        xaxis: {
          type: "datetime",
        },
        tooltip: {
          shared: false,
          y: {
            title: {
              formatter: (seriesName) => "Price",
            },
            formatter: function (val) {
              if(val > 100)
                  return (val).toFixed(2) + "USD";
                else
                  return (val).toFixed(6) + "USD";
            },
          },
        },
      }});
    }
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
