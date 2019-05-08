import React from 'react';
import firebase from '@firebase/app';
require('firebase/database')

class Piston extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            PISTON:0
        }
        
    }

    componentDidMount = () => {
        const that = this
        firebase.database().ref('PISTON').on('value', function(snapshot) {
            that.setState({PISTON :snapshot.val()})
        });
        
        }

    componentWillUnmount (){
        firebase.database().ref('/').update({
            PISTON:0
            })
        }

    render() {         
        
        return (
            <div className="container-login100-form-btn" >
            <button className="login100-form-btn"  onClick={async()=>{
                await this.setState({PISTON:!this.state.PISTON})
                await firebase.database().ref('/').update({PISTON:this.state.PISTON ? 1:0})
                }}>
            {this.state.PISTON ?'Desactivar Pistón':'Activar Pistón'}
            </button>
            
            </div>
        );
    }
}

export default Piston;
