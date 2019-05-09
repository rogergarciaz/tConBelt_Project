import React from 'react';
import CustomizedTable from './Tabla';
import DateRange from './DateRange';
import DatePicker from 'react-datepicker';
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
        this.PorFecha = this.PorFecha.bind(this);
        this.applyCallback = this.applyCallback.bind(this);
    }
    PorFecha() {
        this.setState({
            datos: [{}]
        })
    }
    
    applyCallback(rangeDate) {
        var uno =  rangeDate.start.subtract(5, "hours");
        var dos =  rangeDate.end.subtract(5, "hours");
        let daa = {
            start: uno.toISOString(),
            end: dos.toISOString(),
        }        
        uno =  rangeDate.start.add(5, "hours");
        dos =  rangeDate.end.add(5, "hours");
        const that = this
        firebase.database().ref('data').orderByValue('date').get('value',async function(snapshot){
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
            if (data[0].lng === undefined) {
                this.setState({ datos: [{}] })
            } else {
                this.setState({ datos: [{}] })
                this.setState({ datos: data })
                await that.setState({c1 : c1})
                await that.setState({c2 : c2})
                await that.setState({c3 : c3})
                await that.setState({vab : vab})
                await that.setState({vbc : vbc})
                await that.setState({vca : vca})
                await that.setState({date:date})
                await that.setState({pa:pa})
                await that.setState({pb:pb})
                await that.setState({pc:pc})
                await that.setState({sensor:sensor})
            }
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
        return (
            <div>
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