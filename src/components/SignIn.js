import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
  </div>



const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.LANDING);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-t-85 p-b-20">
                <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                  <span className="login100-form-title p-b-70">
                    Bienvenido
                  </span>
                  
                  <img src="images/avatar-01.jpg" alt="AVATAR"/>
                  
                            
                  <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Ingrese usuario">
                    <input className="input100" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text"/>
                    <span className="focus-input100" data-placeholder="Correo"></span>
                  </div>

                  <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                    <input className="input100" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password"/>
                    <span className="focus-input100" data-placeholder="Contraseña"></span>
                  </div>

                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" disabled={isInvalid} type="submit">
                      Iniciar Sesión
                    </button>
                  </div>
                  { error && <p>{error.message}</p> }
                </form>
              </div>
            </div>
          </div>
    );
  }
}

const SignInLink = () =>
  <p>
    ¿Ya tienes una cuenta? 
    {' '}
    <Link to={routes.SIGN_IN}>¡Inicia Sesión!</Link>
  </p>

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink
};