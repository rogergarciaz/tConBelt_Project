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
              <a href="./PF_Instructivo_201830.pdf" download="tConBelt_Android">
              <button className="btn btn-success" >
              Descargar APP Android
              </button>
              </a>
              </div>

              <div>
              <a href="./PF_Instructivo_201830.pdf" download="tConBelt_IOS">
              <button className="btn btn-success" >
              Descargar APP IOS
              </button>
              </a>
              </div>

             <div>
             <a href="files/PF_Instructivo_201830.pdf" download="tConBelt_Manual_Usuario">
              <button className="btn btn-success" >
              Descargar Manual de Usuario
              </button>
            </a>            
            </div>
          </div>
        )
    }   
}

export default LandingPage;