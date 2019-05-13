import React, { Component } from 'react'
const {Line} = require("react-chartjs-2")

class Graph extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() {
    var Labels = this.props.datos.date
    var c1 = this.props.datos.c1
    var c2 = this.props.datos.c2
    var c3 = this.props.datos.c3
    var vab = this.props.datos.vab
    var vbc = this.props.datos.vbc
    var vca = this.props.datos.vca
    var pa = this.props.datos.pa
    var pb = this.props.datos.pb
    var pc = this.props.datos.pc
    var sensor = this.props.datos.sensor
    var chartData = {
      labels:Labels,
      datasets: [
        {
          data: c1,
          label: 'Corriente A',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(90,172,172)',
          borderColor: 'rgba(90,172,172)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(90,172,172)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(90,172,172)',
          pointHoverBorderColor: 'rgba(90,172,172)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
        },{
            label: 'Corriente B',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,134)',
            borderColor: 'rgba(75,192,134)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,134)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,134)',
            pointHoverBorderColor: 'rgba(75,192,134)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: c2 
          },{
            label: 'Corriente C',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(192,75,104)',
            borderColor: 'rgba(192,75,104)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(192,75,104)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(192,75,104)',
            pointHoverBorderColor: 'rgba(192,75,104)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: c3 
          },
      ]
    }
    var chartData1 = {
        labels:Labels,
        datasets: [
          {
            data: vab,
            label: 'Voltaje A-B',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(90,172,172)',
            borderColor: 'rgba(90,172,172)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(90,172,172)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(90,172,172)',
            pointHoverBorderColor: 'rgba(90,172,172)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },{
              label: 'Voltaje B-C',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,134)',
              borderColor: 'rgba(75,192,134)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,134)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,134)',
              pointHoverBorderColor: 'rgba(75,192,134)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: vbc 
            },{
              label: 'Voltaje C-A',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(192,75,104)',
              borderColor: 'rgba(192,75,104)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(192,75,104)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(192,75,104)',
              pointHoverBorderColor: 'rgba(192,75,104)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: vca
            },
        ]
      }

      var chartData2 = {
        labels:Labels,
        datasets: [
          {
            data: pa,
            label: 'Potencia Activa A',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(90,172,172)',
            borderColor: 'rgba(90,172,172)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(90,172,172)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(90,172,172)',
            pointHoverBorderColor: 'rgba(90,172,172)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },{
              label: 'Potencia Activa B',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,134)',
              borderColor: 'rgba(75,192,134)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,134)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,134)',
              pointHoverBorderColor: 'rgba(75,192,134)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: pb
            },{
              label: 'Potencia Activa C',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(192,75,104)',
              borderColor: 'rgba(192,75,104)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(192,75,104)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(192,75,104)',
              pointHoverBorderColor: 'rgba(192,75,104)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: pc 
            },
        ]
      }
      var chartData3 = {
        labels:Labels,
        datasets: [
          {
            data: sensor,
            label: 'Sensor',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(90,172,172)',
            borderColor: 'rgba(90,172,172)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(90,172,172)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(90,172,172)',
            pointHoverBorderColor: 'rgba(90,172,172)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ]
    }
    return (
      <div className="limiter">
      <Line 
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Corriente en las fases [A]",
            fontSize: 20
          },
          legend:{
            display:true,
            position:"top"
          },
        }}
      />
      <Line
        data={chartData1}
        options={{
          title: {
            display: true,
            text: "Voltajes linea linea [V]",
            fontSize: 20
          },
          legend:{
            display:true,
            position:"top"
          },
        }}
      />
      <Line
        data={chartData2}
        options={{
          title: {
            display: true,
            text: "Potencia activa en las lineas",
            fontSize: 20
          },
          legend:{
            display:true,
            position:"top"
          },
        }}
      />
      <Line
        data={chartData3}
        options={{
          title: {
            display: true,
            text: "Velocidad [RPM]",
            fontSize: 20
          },
          legend:{
            display:true,
            position:"top"
          },
        }}
      />
    </div>
    );
  }
}
export default Graph;