import React from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = (props) =>{
	return (
	  <Line data={props.data} />
	)
}

export default LineGraph;