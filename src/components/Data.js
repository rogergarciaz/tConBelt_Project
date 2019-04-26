import React from 'react';
import { auth } from '../firebase';

const Data = () =>
  <button 
    className="btn btn-danger"
    type="button"
    onClick={auth.doSignOut}
  >
    Cerrar Sesión
  </button>

export default Data;