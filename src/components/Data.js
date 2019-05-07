import React from 'react';
import LineGraph from './Chart';
import firebase from '@firebase/app';

class Data extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        data : [],
        c1 : [],
        c2 : [],
        c3 : [],
        vab : [],
        vbc : [],
        vca : [],
        date : [],
        sensor:[]
      }
    }

  componentDidMount = () => {
    const that = this
    let c1 = []
    let c2 = []
    let c3 = []
    let vab = []
    let vbc = []
    let vca = []
    let date = []
    let sensor = []
    firebase.database().ref('data').on('value',async function(snapshot){
      let data = await snapshot.val()
      data = await Object.values(data)
      data.forEach(element => {
          c1.push(element.C1)
          c2.push(element.C2)
          c3.push(element.C3)
          vab.push(element.VAB)
          vbc.push(element.VBC)
          vca.push(element.VCA)
          date.push(element.date)
          sensor.push(element.Sensor)
      });
      await that.setState({c1 : c1})
      await that.setState({c2 : c2})
      await that.setState({c3 : c3})
      await that.setState({vab : vab})
      await that.setState({vbc : vbc})
      await that.setState({vca : vca})
      await that.setState({date:date})
      await that.setState({sensor:sensor})
    })
    firebase.database().ref('data').limitToLast(1).on('value', async function(snapshot){
      let data_retrieved = await snapshot.val()
      data_retrieved = await Object.values(data_retrieved)
      await that.setState({c1:that.state.c1.push(data_retrieved[0].C1)})
      await that.setState({c2:that.state.c2.push(data_retrieved[0].C2)})
      await that.setState({c3:that.state.c3.push(data_retrieved[0].C3)})
      await that.setState({vab:that.state.vab.push(data_retrieved[0].VAB)})
      await that.setState({vbc:that.state.vbc.push(data_retrieved[0].VBC)})
      await that.setState({vca:that.state.vca.push(data_retrieved[0].VCA)})
      await that.setState({date:that.state.date.push(data_retrieved[0].date)})
      await that.setState({sensor : that.state.sensor.push(data_retrieved[0].Sensor)})
      console.log(that.state)
    })    
  }
  render() {
    return (
      <div className="wrap-login100 p-t-85 p-b-20">
        <LineGraph data={datos1}  />
        <LineGraph data={datos2}/>
        <LineGraph data={datos3}/>
      </div>
    );
  }
}

const datos1 = {
  labels: Data.date, //date: "2019-04-25 11:28:52.319398" from firebase
  datasets: [
  {
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
    data: Data.c1 //C1: 0 C2: 0 C3: 0 Freq: 32768 PAT: 0 Sensor: 0 VAB: 0 VBC: 0 VCA: 0
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
    data: Data.c2 
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
    data: Data.c3 
  },
  ]
};

const datos2 = {
  labels: Data.date, 
  datasets: [
  {
    label: 'Voltaje AB',
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
    data: Data.vab
  },{
    label: 'Voltaje BC',
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
    data: Data.vbc 
  },{
    label: 'Voltaje CA',
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
    data: Data.vca 
  },
  ]
};

const datos3 = {
  labels: Data.date, 
  datasets: [
  {
    label: 'RPM',
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
    data: Data.sensor 
  },
  ]
};

export default Data;