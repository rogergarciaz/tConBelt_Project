import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import firebase from '@firebase/app';
require('firebase/database')

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};
let value_slider;

class StepSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value:0, 
      update:{DIN1:0,DIN2:0,DIN3:0}
    }
    
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.onSlidingComplete(value);
  };

  componentDidMount = () => {
    const that = this
        firebase.database().ref('commands').on('value', function(snapshot) {
           that.setState({update :snapshot.val()})
           value_slider = that.state.update.DIN3.toString()+that.state.update.DIN2.toString()+that.state.update.DIN1.toString()
           switch(value_slider){
               case "000":
               that.setState({value:0})
               break;
               case "001":
               that.setState({value:9})
               break;
               case "010":
               that.setState({value:18})
               break;
               case "011":
               that.setState({value:27})
               break;
               case "100":
               that.setState({value:36})
               break;
               case "101":
               that.setState({value:45})
               break;
               case "110":
               that.setState({value:54})
               break;
               case "111":
               that.setState({value:60})
               break;
               default:
               // do nothing
           }      
          });
}

componentWillUnmount (){
    firebase.database().ref('commands').update({
        DIN1:0,
        DIN2:0,
        DIN3:0,
    })
}

onSlidingComplete = async (value)=>{
    switch(value){
        case 0:
        await this.setState({update : {
            DIN1:0,
            DIN2:0,
            DIN3:0,
        }})
        break;
        case 9:
        await this.setState({update : {
            DIN1:1,
            DIN2:0,
            DIN3:0,
        }})
        break;
        case 18:
        await this.setState({update : {
            DIN1:0,
            DIN2:1,
            DIN3:0,
        }})
        break;
        case 27:
        await this.setState({update : {
            DIN1:1,
            DIN2:1,
            DIN3:0,
        }})
        break;
        case 36:
        await this.setState({update : {
            DIN1:0,
            DIN2:0,
            DIN3:1,
        }})
        break;
        case 45:
        await this.setState({update : {
            DIN1:1,
            DIN2:0,
            DIN3:1,
        }})
        break;
        case 54:
        await this.setState({update : {
            DIN1:0,
            DIN2:1,
            DIN3:1,
        }})
        break;
        case 63:
        await this.setState({update : {
            DIN1:1,
            DIN2:1,
            DIN3:1,
        }})
        break;
        default:
         // do nothing
    }
    await firebase.database().ref('commands').update(this.state.update)
}

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={60}
          step={9} 
          onChange={this.handleChange}
        />
        <h2>Frecuencia: {this.state.value} Hz</h2>
      </div>
    ); 
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);