import React from 'react';
import CustomizedTable from './Tabla';
import Calendar from './Calendar';
import withAuthorization from './withAuthorization';
import firebase from '@firebase/app';
require('firebase/database')

var data = {};

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
            verTabla : false,
            datosListos : false,
        }
    }
    
    //componentDidMount = () =>{        
    //    const that = this  
    //}

    applyCallback(rangeDate) {
        const that = this
        data = {};
        var uno =  rangeDate.start.subtract(5, "hours");
        var dos =  rangeDate.end.subtract(5, "hours");
        data = {
            start: uno.toISOString(),
            end: dos.toISOString()
        }
        uno =  rangeDate.start.add(5, "hours");
        dos =  rangeDate.end.add(5, "hours");
        var inicio = data.start.toString();
        var final = data.end.toString();
        //firebase.database().ref('data').limitToLast(100);
        firebase.database().ref('data').orderByChild('date').startAt(inicio).endAt(final).on("value",async function(snapshot){
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
        that.state.c1.length===0?that.setState({datosListos:false}):that.setState({datosListos:true})         
    }
    render() {
        let datos={
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
              <div className="p-l-10 p-t-10 p-b-10 p-r-250">
              <div className="p-r-250">
              <div className="p-r-200">
              <Calendar onSelectDate={this.applyCallback}/> 
                </div>
                </div>
                <div className="m-l-250 p-l-250">
                <div className="m-l-250 ">
                {this.state.datosListos?<button className="btn btn-success" onClick={async()=>{
                    await this.setState({verTabla:!this.state.verTabla})}} >
                {this.state.verTabla?'Mostrar Tabla':'Mostrar Graficas'}
                </button>:''}
                </div>
                </div> 
                </div>       
                <div className="p-l-10 p-t-10 p-b-10 p-r-10">
                {this.state.datosListos?!this.state.verTabla?<CustomizedTable datos={datos}/>:'Graficas':''}
                </div>
                </div>     
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Historicos);