import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import swal from 'sweetalert'

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
  hideAlert:true,
  rememberMe:false
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE};
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
  };

  componentDidMount=()=> {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    this.setState({ password, rememberMe });
    this.setState({ email, rememberMe });
  }

  onSubmit = (event) => {
    var {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

  
    const rememberMe  = this.state.rememberMe
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('email', rememberMe ? email: '');
    localStorage.setItem('password', rememberMe ? password : '');

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.CONTROL);
      })
      .catch(error => {
        console.log(error)
        if (this.state.email ==="" && this.state.password===""){
          swal({
            title: "Error",
            text: "Los campos están vacíos",
            icon: "warning",
            dangerMode: true,
          })
        }else{
          error= error.code === "auth/wrong-password" ? "La contraseña es incorrecta":"El email es incorrecto"
          swal({
            title: "Error",
            text: error,
            icon: "warning",
            dangerMode: true,
          })
        }
        
        this.setState({error:error});
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;


    return (
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100 p-t-85 p-b-20">
                <form className="login100-form validate-form" onSubmit={this.onSubmit}>
                <div className="login100-form-title p-b-70">
                  <span>
                    Bienvenidos
                  </span>
                  </div>
                       
                  <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "Ingrese usuario">
                    <input className="input100" value={email} placeholder="Email" onChange={event => this.setState(byPropKey('email', event.target.value))} type="text"/>
                  </div>

                  <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                    <input className="input100" placeholder="Contraseña" value={password} onChange={event => this.setState(byPropKey('password', event.target.value))} type="password"/>
                  </div>
                  <label>
                    <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Recuerda me
                  </label>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" type="submit">
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

export default withRouter(SignInPage);
export {SignInForm};