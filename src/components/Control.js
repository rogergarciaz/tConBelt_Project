import React, { Component } from 'react';
import { db } from '../firebase';
import Slider from './Slider'
const uuid = require('uuid');

const row = {
  display: 'flex'
};

const column = {
  flex: '33.33%',
  padding: '5px'
};

const width = {
  width: '100%'
};
const pad = {
  paddingTop: 0 + 'px !important'
};

const Speed = []

const changeSpeed =  (info) =>{ 
  db.moveSpeedData(info,(snapshot)=>{
   const Velocidad=snapshot.val()+1;
   console.log({Velocidad})
   db.changeSpeed(info,Velocidad)
  })
}
const seeSpeed = (info) =>{
  db.takeSpeedData(info,(snapshot)=>{
    Speed.push(parseInt(snapshot.val()))
  })
}
 
const DINval = ({ din }) =>
<div>
  <div className="login100-form-title p-b-70">Varia la Velocidad</div>
    {Object.keys(din).map(info =>
      <div  key={info}>
        <div style={row}>
          <div style={column} className="login100-form-title p-b-70">
            {din[info].username}
          </div>
          <div style={column}>
          <button onClick={()=>changeSpeed(info)} className="btn btn-success"> 0 Hz</button>
          </div>
        </div>
      <hr style={width} />
      {seeSpeed(info)}
      </div>
     )}
  </div>


class ControlPage extends Component {
  // El constructor siempre va de primero
   constructor(props) {
    super(props);

    this.state = {
      uid: uuid.v1(),
      speed:Speed,
      DIN: {
        DIN1: "",
        DIN2: "",
        DIN3: ""
      },
    };

  }

   render() {
    
    return (
    <div> 
      {<DINval din={Speed} />}
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-85 p-b-20" style={pad}>
           <h2>Cosas</h2>
           <Slider/>
          </div>
        </div>
      </div>
    </div>
     );
  }
}
export default ControlPage;



