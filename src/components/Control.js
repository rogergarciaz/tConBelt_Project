import React, { Component } from 'react';
import StepSlider from './Slider';
import Piston from './Piston';
import Retro from './Retro';
import withAuthorization from './withAuthorization';

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