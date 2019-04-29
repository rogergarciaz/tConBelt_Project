import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import ControlPage from './Control';
import SignInPage from './SignIn';
import Data from './Data';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <Route exact path={routes.LANDING} component={SignInPage} />
      <Route exact path={routes.CONTROL} component={ControlPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route exact path={routes.DATA} component={Data} />
    </div>
  </Router>

export default withAuthentication(App);
