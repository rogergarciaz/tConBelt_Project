import React from 'react';

class LandingPage extends React.Component {
    render(){
        return (
            <div className="login100-form-title p-b-70">
             <div>
               <img src="images/logo.jpg" alt="AVATAR"/>
             </div>
             <span>
               tConBelt
             </span>
             <h6 >Somos el sistema de gestión y telegestión de la banda transportadora del Laboratorio de Automatización Industrial de la Universidad del Norte. </h6>
            <div>
             <button className="btn btn-success" >
              Descargar APK
             </button>
             <button className="btn btn-success" >
              Descargar IOS
             </button>
             <button className="btn btn-success" >
              Descargar Manual de Usuario
             </button>
            </div>            
            </div>
        )
    }   
}

export default LandingPage;