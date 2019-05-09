import React, { Component } from 'react';

export class Tabla extends Component {
  render() {
    if(this.props.show === 1){
      var todos = this.props.datos.map((dato) => {
      return (
        <tr>
          <th><div>{dato.ID}</div></th>
          <th><div>{dato.Fecha}</div></th>
          <th><div>{dato.lat}</div></th>
          <th><div>{dato.lng}</div></th>
        </tr>
      )
    })
    }
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Latitud</th>
            <th>Longitud</th>
          </tr>
        </thead>
        {todos}
      </table>
    )
  }
}

export default Tabla;