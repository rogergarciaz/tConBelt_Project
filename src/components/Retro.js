import React from 'react';
import CustomizedTable from './Table'
import firebase from '@firebase/app';
require('firebase/database')

class Retro extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        value:0,
        update:{DIN3:0,DIN2:0,DIN1:0,PISTON:0},
        c1 : [],
        c2 : [],
        c3 : [],
        vab : [],
        vbc : [],
        vca : [],
        date : [],
        pa : [],
        pb : [],
        pc : [],
        sensor:[]
      } 
    }
  
    componentDidMount = () => {
      const that = this
          firebase.database().ref('PLC').on('value', function(snapshot) {
             that.setState({update :snapshot.val()})
             let value_lab = that.state.update.DIN3.toString()+that.state.update.DIN2.toString()+that.state.update.DIN1.toString()
             switch(value_lab){
                 case  "000":
                 that.setState({value:0})
                 break;
                 case "001":
                 that.setState({value:9})
                 break;
                 case "010":
                 that.setState({value:18})
                 break;
                 case "011":
                 that.setState({value:27})
                 break;
                 case "100":
                 that.setState({value:36})
                 break;
                 case "101":
                 that.setState({value:45})
                 break;
                 case "110":
                 that.setState({value:54})
                 break;
                 case "111":
                 that.setState({value:60})
                 break;
                 default:
                 // do nothing
             }      
            });

            firebase.database().ref('data').limitToLast(1).on('value',async function(snapshot){
              let c1 = []
              let c2 = []
              let c3 = []
              let vab = []
              let vbc = []
              let vca = []
              let date = []
              let pa = []
              let pb = []
              let pc = []
              let sensor = []
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
                  pa.push(element.PA)
                  pb.push(element.PB)
                  pc.push(element.PC)
                  sensor.push(element.Sensor)
              });
              await that.setState({c1 : c1})
              await that.setState({c2 : c2})
              await that.setState({c3 : c3})
              await that.setState({vab : vab})
              await that.setState({vbc : vbc})
              await that.setState({vca : vca})
              await that.setState({date:date})
              await that.setState({pa:pa})
              await that.setState({pb:pb})
              await that.setState({pc:pc})
              await that.setState({sensor:sensor})
            })   
  }
  render() {
    let datos = {
      value:this.state.value, 
      c1:this.state.c1, 
      c2:this.state.c2, 
      c3:this.state.c3, 
      vab:this.state.vab, 
      vbc:this.state.vbc, 
      vca:this.state.vca, 
      sensor:this.state.sensor,
      pa:this.state.pa,
      pb:this.state.pb,
      pc:this.state.pc,
      piston:this.state.update.PISTON
    }
    return (
        <div >
          <CustomizedTable datos={datos}/>
        </div>
    );
  }
}

export default Retro;