import React from 'react';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import AuthUserContext from './AuthUserContext';
import {Nav, Navbar} from "react-bootstrap";

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


const NavigationAuth = () =>
  
<Navbar bg="gray" expand="lg">
  <Navbar.Brand href={routes.LANDING}>
  <img src="images/logo.jpg" alt="tConBelt" style={pStyle}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={routes.CONTROL}>Control</Nav.Link>
      <Nav.Link href={routes.HISTORICOS}>Históricos</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href={routes.SIGN_IN}><SignOutButton /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

const NavigationNonAuth = () =>
<Navbar bg="gray" expand="lg">
  <Navbar.Brand href={routes.LANDING}>
  <img src="images/logo.jpg" alt="tConBelt" style={pStyle}/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={routes.SIGN_IN}>Ingresar</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

export default Navigation;