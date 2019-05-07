import React from 'react';

const column = {
  flex: '33.33%',
  padding: '10px'
};

class LandingPage extends React.Component {
    render(){
        return (
          <div>
            <span className="login100-form-title b-70p-">
               tConBelt  
             </span>
             <h4 style={column}>
              Somos el sistema de gestión y telegestión de la banda transportadora del Laboratorio de Automatización Industrial de la Universidad del Norte.
              A continuación se encuentran los enlaces a la app tanto para el sistema operatvio Android como IOS. 
              Se encuentra también anexo un enlace al manual de ususario. 
              </h4>  
             
             <div className="login100-form-title p-b-70">
              <a href="../files/PF_Instructivo_201830.pdf" download="tConBelt_Android">
              <button className="btn btn-success" >
              Descargar APP Android
              </button>
              </a>

              <div className="m-l-10">
             <a href="../files/PF_Instructivo_201830.pdf" download="tConBelt_Manual_Usuario.pdf">
              <button className="btn btn-success" >
              Descargar Manual de Usuario
              </button>
            </a>            
            </div>
            </div>
            </div>
        )
    }   
}

export default LandingPage;