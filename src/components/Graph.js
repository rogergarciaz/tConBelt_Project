import React, { Component } from 'react'
const {Line} = require("react-chartjs-2")

class Graph extends Component {
  constructor(props){
    super(props);
    this.state={
    c1 : props.datos.c1,
    c2 : props.datos.c2,
    c3 : props.datos.c3,
    vab : props.datos.vab,
    vbc : props.datos.vbc,
    vca : props.datos.vca,
    date : props.datos.date,
    sensor:props.datos.sensor,
    pa:props.datos.pa,
    pb:props.datos.pb,
    pc:props.datos.pc
    }
  }

  render() {
    const Labels = this.state.date
    const c1 = this.state.c1
    const c2 = this.state.c2
    const c3 = this.state.c3
    const vab = this.state.vab
    const vbc = this.state.vbc
    const vca = this.state.vca
    const pa = this.state.pa
    const pb = this.state.pb
    const pc = this.state.pc
    const sensor = this.state.sensor
    const chartData = {
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
    const chartData1 = {
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

      const chartData2 = {
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
      const chartData3 = {
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
      <div className="chart p-t-10 p-r-5 p-l-5 p-b-10">
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