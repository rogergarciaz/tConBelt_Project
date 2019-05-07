import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';

const pStyle = {
  width:'70px',
  height:'70px'
};

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const divStyle = {
  display:'inline',
  margin: '40px', 
};

const NavigationAuth = () =>
  
  <ul>
    
    <li style={divStyle}><Link to={routes.LANDING}>
    <img src="images/logo.jpg" alt="tConBelt" style={pStyle}/>
    </Link></li>
    <li style={divStyle}><Link to={routes.CONTROL}>Control</Link></li>
    <li style={divStyle}><Link to={routes.DATA}>Datos</Link></li>
    <li style={divStyle}><Link to={routes.LANDING}><SignOutButton /></Link></li>
  </ul>

const NavigationNonAuth = () =>
<ul>
<li style={divStyle}><Link to={routes.LANDING}>
    <img src="images/logo.jpg" alt="tConBelt" style={pStyle}/>
    </Link></li>
 <li style={divStyle}><Link to={routes.SIGN_IN}>Ingresar</Link></li>
</ul>

export default Navigation;