import React from 'react';
import firebase from "@firebase/app";
require("firebase/database");
const pStyle = {
  width:'15 rem',
  height:'15 rem'
};
class LandingPage extends React.Component {
  
  componentDidMount=()=>{
    firebase.database().ref("commands").update({
      DIN1: 0,
      DIN2: 0,
      DIN3: 0
    });
  }
    render(){
        return (
          <div className="limiter">
            <br />
            <span className="login100-form-title b-70p-">
               tConBelt  
             </span>
             <br />
             <br />
             <h4 className="text-center">
              Bienvenido al sistema de gestión y telegestión de la banda transportadora del Laboratorio de Automatización Industrial de la Universidad del Norte.
              El sistema tConBelt es un módelo de solución para automatización industrial orientado a la Industria 4.0. El sistema diseñado y construido, ofrece al usuario de manera remota el control de velocidad, sensado de velocidad, y gestión de parámetros de consumo energético de la banda transportadora del laboratorio de Automatización Industrial, ya sea desde una interfaz web o móvil en Android. 
              </h4>  
              <br />
              <br /> 
              <div className="text-center">
              <img  src="images/login.jpg" alt="logg" style={pStyle}/> 
              <img  src="images/control.jpg" alt="con" style={pStyle}/> 
              </div>     
              <br />   
            <h4 className="text-center">
              Descarga la APK para el sistema operativo Android, y controla la banda transportadora desde tu celular. 
              Revisa los datos actuales de la banda transportadora como lo son el consumo energético y la velocidad. 
              </h4> 
            <div className="login100-form-title p-b-70">
              <a href="../files/PF_Instructivo_201830.pdf" download="tConBelt_Android">
              <button className="btn btn-success" >
              Descargar APK
              </button>
              </a>
              </div>
              <br/>
              <h4 className="text-center">
              Aprende todo lo necesario para controlar y analizar los datos de la banda transportadora.
              Descarga el manual de usuario del sistema tConBelt.
              </h4>
             <div className="login100-form-title p-b-70">
             <a href="../files/PF_Instructivo_201830.pdf" download="tConBelt_Manual_Usuario.pdf">
              <button className="btn btn-success" >
              Manual de Usuario
              </button>
            </a>   
            </div>
            </div>
        )
    }   
}

export default LandingPage;