import React from 'react';
import firebase from '@firebase/app';
require('firebase/database')

const column = {
    flex: '33.33%',
    padding: '10px'
  };

class Retro extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        value:0,
        update:{DIN1:false,DIN2:false,DIN3:false,PISTON:false}
      }
      
    }
  
    componentDidMount = () => {
      const that = this
          firebase.database().ref('PLC').on('value', function(snapshot) {
             that.setState({update :snapshot.val()})
             let value_slider = [that.state.update.DIN3, that.state.update.DIN2, that.state.update.DIN1]
             switch(value_slider){
                 case [false,false,false]:
                 that.setState({value:0})
                 break;
                 case [false,false,true]:
                 that.setState({value:9})
                 break;
                 case [false,true,false]:
                 that.setState({value:18})
                 break;
                 case [false,true,true]:
                 that.setState({value:27})
                 break;
                 case [true,false,false]:
                 that.setState({value:36})
                 break;
                 case [true,false,true]:
                 that.setState({value:45})
                 break;
                 case [true,true,false]:
                 that.setState({value:54})
                 break;
                 case [true,true,true]:
                 that.setState({value:60})
                 break;
                 default:
                 // do nothing
             }      
            });
  }
  render() {         
        
    return (
        <div >
        <h4 style={column}>
            En el Laboratorio la banda se desplaza a: {this.state.value}
        </h4>
        <h4 style={column}>
            En el laboratorio el piston se encuentra: {(this.state.update.PISTON) ? 'Activo' : 'Desactivado'}
        </h4>
        
        </div>
    );
}
}

export default Retro;