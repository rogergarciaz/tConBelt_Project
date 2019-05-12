import React from 'react';

const column = {
  flex: '33.33%',
  padding: '10px'
};

const pStyle = {
  width:'300px',
  height:'300px'
};
class LandingPage extends React.Component {
    render(){
        return (
          <div>
            <br />
            <span className="login100-form-title b-70p-">
               tConBelt  
             </span>
             <br />
             <br />
             <h4 style={column}>
              Somos el sistema de gestión y telegestión de la banda transportadora del Laboratorio de Automatización Industrial de la Universidad del Norte.
              Este proyecto inicio en el año 2019 y fue elaborado por estudiantes de Ingenieria Electronica para el uso de todo el departamento de Ingenieria Electrica y Electronica.
              </h4>  
              <br />
              <br /> 
              <div className="login100-form-title b-70p-">
              <img  src="images/APP1.jpg" alt="app" style={pStyle}/> 
              </div>       
            <h4 style={column}>
              Descarga la APK para el sistema operatvio Android, y controla la banda transportadora desde tu celular. 
              Revisa los datos actuales de la banda transportadora como lo son el consumo energetico y la velocidad. 
              </h4> 
            <div className="login100-form-title p-b-70">
              <a href="../files/PF_Instructivo_201830.pdf" download="tConBelt_Android">
              <button className="btn btn-success" >
              Descargar APK
              </button>
              </a>
              </div>
              <br/>
              <h4 style={column}>
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