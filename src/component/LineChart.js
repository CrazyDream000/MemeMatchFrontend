import ReactApexChart from "react-apexcharts";
import React from "react";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    let historicalData = [];
    for(var i = 0; i < props.historicalData.c.length; i ++)
    {
      historicalData.push([props.historicalData.t[i] * 1000, props.historicalData.c[i]]);
    }

    let bgColor;
    if(historicalData[0][1] > historicalData[historicalData.length - 1][1])
      bgColor = '#DD0000'
    else
      bgColor = '#00DD00'
    this.state = {
      series: [
        {data:historicalData}
      ],
      options: {
        stroke:{
          width:1
        },
        annotations: {
          yaxis: [
            {
              y: historicalData[historicalData.length - 1][1]>100?historicalData[historicalData.length - 1][1].toFixed(4):historicalData[historicalData.length - 1][1].toFixed(12),
              borderColor: bgColor,
              label: {
                borderColor: bgColor,
                style: {
                  color: '#fff',
                  background: bgColor
                },
                text: 'Current Price' + historicalData[historicalData.length - 1][1]>100?historicalData[historicalData.length - 1][1].toFixed(4):historicalData[historicalData.length - 1][1].toFixed(12)
              }
            }
          ]
        },
        grid: {
          show: true,
          borderColor: '#FFFFFF',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },   
          yaxis: {
              lines: {
                  show: true
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
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
          show: true,
          showAlways: false,
          labels: {
              show:true,
              minWidth:0,
              maxWidth:50,
              formatter: function (val) {
                if(val > 100)
                  return (val).toFixed(4) + "$";
                else
                  return (val).toFixed(12) + "$";
              },
          },    
        },
        xaxis: {
          tickPlacement: 'on',
          type: "datetime",
        },
        responsive:[{
          breakpoint:500,
          options:{
            xaxis:{
              show:false,
              showAlways: false,
              labels: {
                show:false
              },
              axisBorder: {
                show:false
              },
              axisTicks: {
                show: false,
              }
            },
            yaxis: {
              show: false,
              showAlways: false,
              labels: {
                show:false,
                minWidth:0,
                maxWidth:50,
                formatter: function (val) {
                  if(val > 100)
                    return (val).toFixed(4) + "$";
                  else
                    return (val).toFixed(12) + "$";
                },
              },    
            },
          }
        }],
        grid: {
          show: true,
          borderColor: '#F2F2F9',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },   
          yaxis: {
              lines: {
                  show: true
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
      },
        tooltip: {
          shared: false,
          y: {
            title: {
              formatter: (seriesName) => "Price",
            },
            formatter: function (val) {
              if(val > 100)
                  return (val).toFixed(4) + "USD";
                else
                  return (val).toFixed(12) + "USD";
            },
          },
        },
      },
    };
  }
  componentDidUpdate(prevProps) {
    if(prevProps.historicalData !== this.props.historicalData) {
      let historicalData = [];
      for(var i = 0; i < this.props.historicalData.c.length; i ++)
      {
        historicalData.push([this.props.historicalData.t[i] * 1000, this.props.historicalData.c[i]]);
      }

      let bgColor;
      if(historicalData[0][1] > historicalData[historicalData.length - 1][1])
        bgColor = '#DD0000'
      else
        bgColor = '#00DD00'
      this.setState({series: [{data:historicalData}]});
      this.setState({options: {
        stroke:{
          width:1
        },
        annotations: {
          yaxis: [
            {
              y: historicalData[historicalData.length - 1][1]>100?historicalData[historicalData.length - 1][1].toFixed(4):historicalData[historicalData.length - 1][1].toFixed(12),
              borderColor: bgColor,
              label: {
                borderColor: bgColor,
                style: {
                  color: '#fff',
                  background: bgColor
                },
                text: 'Current Price' + historicalData[historicalData.length - 1][1]>100?historicalData[historicalData.length - 1][1].toFixed(4):historicalData[historicalData.length - 1][1].toFixed(12)
              }
            }
          ]
        },
        chart: {
          type: "area",
          stacked: false,
          height: 'auto',
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
          show: true,
          showAlways: false,
          labels: {
            show:true,
            minWidth:0,
            maxWidth:50,
            formatter: function (val) {
              if(val > 100)
                return (val).toFixed(4) + "$";
              else
                return (val).toFixed(12) + "$";
            },
          },    
        },
        xaxis: {
          tickPlacement: 'on',
          type: "datetime",
        },
        responsive:[{
          breakpoint:500,
          options:{
            xaxis:{
              show:false,
              showAlways: false,
              labels: {
                show:false
              },
              axisBorder: {
                show:false
              },
              axisTicks: {
                show: false,
              }
            },
            yaxis: {
              show: false,
              showAlways: false,
              labels: {
                show:false,
                minWidth:0,
                maxWidth:50,
                formatter: function (val) {
                  if(val > 100)
                    return (val).toFixed(4) + "$";
                  else
                    return (val).toFixed(12) + "$";
                },
              },    
            },
          }
        }],
        tooltip: {
          shared: false,
          y: {
            title: {
              formatter: (seriesName) => "Price",
            },
            formatter: function (val) {
              if(val > 100)
                  return (val).toFixed(4) + "USD";
                else
                  return (val).toFixed(12) + "USD";
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
