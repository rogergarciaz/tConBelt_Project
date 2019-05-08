import React, { Component } from 'react';
import StepSlider from './Slider';
import Piston from './Piston';
import CustomizedTable from './Table'

class ControlPage extends Component {

   render() {
    
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
          <div >
          <CustomizedTable/>
          </div>
          </div>
      </div>
    </div>
     );
  }
}

export default ControlPage;