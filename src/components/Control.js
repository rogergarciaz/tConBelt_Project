import React, { Component } from 'react';
import StepSlider from './Slider';
 
class ControlPage extends Component {

   render() {
    
    return (
    <div> 
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-85 p-b-20">
             <div className="login100-form-title p-b-70">
               <img src="images/logo.jpg" alt="AVATAR"/>
             </div>
           <StepSlider/>
          </div>
        </div>
      </div>
    </div>
     );
  }
}

export default ControlPage;