import React, { Component } from 'react';
import StepSlider from './Slider';
import Piston from './Piston';
import Retro from './Retro';
import Graph from './Graph';
import withAuthorization from './withAuthorization';
import firebase from '@firebase/app';
require('firebase/database');

class ControlPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        c1 : [],
        c2 : [],
        c3 : [],
        vab : [],
        vbc : [],
        vca : [],
        date : [],
        sensor:[],
        pa : [],
        pb : [],
        pc : [],
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
    let pa = []
    let pb = []
    let pc = []
    let sensor = []
    firebase.database().ref("data").limitToLast(1).on("value",async function(snapshot){
      if (snapshot.val() === null){
          return(<div>No hay datos</div>)
      }else{
        if (c1.length == 10){
          c1= [c1[1],c1[2],c1[3],c1[4],c1[5],c1[6],c1[7],c1[8],c1[9]]
          c2= [c2[1],c2[2],c2[3],c2[4],c2[5],c2[6],c2[7],c2[8],c2[9]]
          c3= [c3[1],c3[2],c3[3],c3[4],c3[5],c3[6],c3[7],c3[8],c3[9]]
          vab= [vab[1],vab[2],vab[3],vab[4],vab[5],vab[6],vab[7],vab[8],vab[9]]
          vbc=[vbc[1],vbc[2],vbc[3],vbc[4],vbc[5],vbc[6],vbc[7],vbc[8],vbc[9]]
          vca= [vca[1],vca[2],vca[3],vca[4],vca[5],vca[6],vca[7],vca[8],vca[9]]
          pa= [pa[1],pa[2],pa[3],pa[4],pa[5],pa[6],pa[7],pa[8],pa[9]]
          pb= [pb[1],pb[2],pb[3],pb[4],pb[5],pb[6],pb[7],pb[8],pb[9]]
          pc= [pc[1],pc[2],pc[3],pc[4],pc[5],pc[6],pc[7],pc[8],pc[9]]
          sensor= [sensor[1],sensor[2],sensor[3],sensor[4],sensor[5],sensor[6],sensor[7],sensor[8],sensor[9]]
          date= [date[1],date[2],date[3],date[4],date[5],date[6],date[7],date[8],date[9]]
        }
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
        await that.setState({c1:c1})
        await that.setState({c2:c2})
        await that.setState({c3:c3})
        await that.setState({vab:vab})
        await that.setState({vbc:vbc})
        await that.setState({vca:vca})
        await that.setState({date:date})
        await that.setState({pa:pa})
        await that.setState({pb:pb})
        await that.setState({pc:pc})
        await that.setState({sensor:sensor})
      }
    });
  }

  componentWillUnmount = ()=>{
    this.setState({c1:[]})
    this.setState({c2:[]})
    this.setState({c3:[]})
    this.setState({vab:[]})
    this.setState({vbc:[]})
    this.setState({vca:[]})
    this.setState({date:[]})
    this.setState({pa:[]})
    this.setState({pb:[]})
    this.setState({pc:[]})
    this.setState({sensor:[]})
  }

  render() {
    let datos={
      date:this.state.date, 
      c1:this.state.c1, 
      c2:this.state.c2, 
      c3:this.state.c3, 
      vab:this.state.vab, 
      vbc:this.state.vbc, 
      vca:this.state.vca,
      pa:this.state.pa,
      pb:this.state.pb,
      pc:this.state.pc,
      sensor:this.state.sensor
    }
    return (
    <div> 
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-85 p-b-20">
           <StepSlider/> 
           <div className="wrap-login100 p-t-85 p-b-20">
             <Piston />
           </div>
          </div>
          <div className="p-l-10 p-t-10 p-b-10 p-r-10">
          <Graph datos={datos}/>
          </div>
          <div >
            <Retro/>
          </div>
        </div>
      </div>
    </div>
     );
  }
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ControlPage);