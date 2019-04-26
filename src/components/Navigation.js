import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';

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

const ControlButton = () =>
  <button 
    className="btn"
    type="button"
  >
    Control
  </button>

const DataButton = () =>
  <button 
    className="btn"
    type="button"
  >
    Datos
  </button>

const NavigationAuth = () =>
  
  <ul>
    <li style={divStyle}><Link to={routes.CONTROL}><ControlButton /></Link></li>
    <li style={divStyle}><Link to={routes.DATA}><DataButton /></Link></li>
    <li style={divStyle}><Link to={routes.SIGN_IN}><SignOutButton /></Link></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li style={divStyle}><Link to={routes.SIGN_IN}>Ingresa</Link></li>
  </ul>

export default Navigation;