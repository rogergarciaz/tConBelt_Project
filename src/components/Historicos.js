import React from 'react';
import Calendar from './Calendar';
import Tabla from './Tabla';

var show = 0;
var mensajes = "";
var data = {};

export class Historicos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datos: [{}],
            hist: "",
        }
        this.PorFecha = this.PorFecha.bind(this);
        this.applyCallback = this.applyCallback.bind(this);
    }
    PorFecha() {
        this.setState({
            hist: "SoloFecha",
            datos: [{}]
        })
        mensajes = "Seleccione Fecha de Busqueda";
    }
    
    applyCallback(rangeDate) {
        data = {};
        show = 1;
        var uno =  rangeDate.start.subtract(5, "hours");
        var dos =  rangeDate.end.subtract(5, "hours");
        data = {
            start: uno.toISOString(),
            end: dos.toISOString(),
            hist: this.state.hist
        }
        
        uno =  rangeDate.start.add(5, "hours");
        dos =  rangeDate.end.add(5, "hours");
        fetch('http://3.95.47.65:4000/Hist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {  
                if (response[0].lng === undefined) {
                    mensajes = "Sin resultados";
                    this.setState({ datos: [{}] })
                } else {
                    mensajes = "";
                    this.setState({ datos: [{}] })
                    this.setState({ datos: response })
                }
            })
            .catch(err => console.error(err))
        
    }

    render() {
        console.log("datos: ",this.state.datos);

        return (
            <div>
                    <span>
                        <button  type="button" onClick={this.PorFecha} >Filtrar por Fecha</button>
                    </span>
                    <span >
                        {mensajes}
                    </span>
                <div>
                    <Calendar onSelectDate={this.applyCallback} />
                </div>
                <div>
                    <Tabla datos={this.state.datos} show={show} />
                </div>
            </div>
        );
    }
}

export default Historicos;