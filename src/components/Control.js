import React, { Component } from 'react';
import Home from './Home'
 
class ControlPage extends Component {
  // El constructor siempre va de primero

   render() {
    
    return (
    <div> 
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-85 p-b-20">
           <Home/>
          </div>
        </div>
      </div>
    </div>
     );
  }
}
export default ControlPage;



