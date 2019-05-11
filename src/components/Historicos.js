import React from 'react';
import CustomizedTable from './Tabla';
import DateRange from './DateRange';
import firebase from '@firebase/app';
require('firebase/database')

class Historicos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c1 : [],
            c2 : [],
            c3 : [],
            vab : [],
            vbc : [],
            vca : [],
            date : [],
            sensor:[],
            pa : [],
            pb : [],
            pc : [],
            datos: [],
        }
    }
    
    componentDidMount = () =>{        
        const that = this
        //firebase.database().ref('data').limitToLast(100);
        firebase.database().ref('data').orderByChild('date').startAt("2019/5/10 16:59").endAt("2019/5/10 17:0").on("value",async function(snapshot){
        //firebase.database().ref("data").orderByChild("date").equalTo("2019/5/10 16:59").on("value", function(snapshot) { 
        //console.log(snapshot.val());
        //});
            let c1 = []
            let c2 = []
            let c3 = []
            let vab = []
            let vbc = []
            let vca = []
            let date = []
            let pa = []
            let pb = []
            let pc = []
            let sensor = []
            let data = await snapshot.val()
            data = await Object.values(data)
            data.forEach(element => {
                c1.push(element.C1)
                c2.push(element.C2)
                c3.push(element.C3)
                vab.push(element.VAB)
                vbc.push(element.VBC)
                vca.push(element.VCA)
                date.push(element.date)
                pa.push(element.PA)
                pb.push(element.PB)
                pc.push(element.PC)
                sensor.push(element.Sensor)
            });
            await that.setState({c1:c1})
            await that.setState({c2:c2})
            await that.setState({c3:c3})
            await that.setState({vab:vab})
            await that.setState({vbc:vbc})
            await that.setState({vca:vca})
            await that.setState({date:date})
            await that.setState({pa:pa})
            await that.setState({pb:pb})
            await that.setState({pc:pc})
            await that.setState({sensor:sensor})
        })   
    }
    render() {
        let datos = {
            date:this.state.date, 
            c1:this.state.c1, 
            c2:this.state.c2, 
            c3:this.state.c3, 
            vab:this.state.vab, 
            vbc:this.state.vbc, 
            vca:this.state.vca,
            pa:this.state.pa,
            pb:this.state.pb,
            pc:this.state.pc,
            sensor:this.state.sensor
          }
          console.log(datos)
        return (
            <div >
                <div className="wrap-input100 validate-input m-t-85 m-b-35">
                <input className="input100" type="text" placeholder="Ingrese fecha de Inicio '2019/5/9 19:11'" ref="name" />
                <br />
                <input className="input100" type="text" placeholder="Ingrese fecha de Fin arriba en vez de ' van comillas " ref="name" />
                <br />
                <button className="login100-form-btn" onClick={this.componentDidMount}>Buscar</button>
                </div>
                <div className="container-login100">
                 <CustomizedTable datos={datos} />
                </div>
                <div className="container-login100">
                 <DateRange/>
                </div>            
            </div>
        );
    }
}

export default Historicos;