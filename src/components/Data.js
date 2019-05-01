import React from 'react';
import LineGraph from './Chart';
import firebase from '@firebase/app';

let medidas;
let value_date ;

class Data extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:0
    }
    
  }
  componentDidMount = () => {
    const that = this
     firebase.database().ref('data').on('value', function(snapshot){
      console.log(snapshot.val())
      that.setState({value :snapshot.val()})
      medidas = {
        value_C1 : that.state.value.C1,
        value_C2 : that.state.value.C2,
        value_C3 : that.state.value.C3,
        value_VAB : that.state.value.VAB,
        value_VBC : that.state.value.VBC,
        value_VCA : that.state.value.VCA,
        value_PAT : that.state.value.PAT,
        value_Freq : that.state.value.Freq,
        value_Sensor : that.state.value.Sensor
      }
      value_date = that.state.value.date
      })
  }
  render() {
    
    return (
      <div className="wrap-login100 p-t-85 p-b-20">
        <LineGraph data={this.state.value} />
      </div>
    );
  }
}

export default Data;