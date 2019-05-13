import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './Navigation';
import ControlPage from './Control';
import SignInPage from './SignIn';
import Historicos from './Historicos';
import LandingPage from './Landing';
import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

const App = () =>
  <Router >
    <div >
      <Navigation />

      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.CONTROL} component={ControlPage} />
      <Route exact path={routes.HISTORICOS} component={Historicos} />
    </div>
  </Router>

export default withAuthentication(App);
