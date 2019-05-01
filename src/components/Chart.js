import React from 'react';
import {Line} from 'react-chartjs-2';

const LineGraph = (props) =>{
	const data = {
	  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'], //date: "2019-04-25 11:28:52.319398" from firebase
	  datasets: [
		{
		  label: 'My First dataset',
		  fill: false,
		  lineTension: 0.1,
		  backgroundColor: 'rgba(75,192,192,0.4)',
		  borderColor: 'rgba(75,192,192,1)',
		  borderCapStyle: 'butt',
		  borderDash: [],
		  borderDashOffset: 0.0,
		  borderJoinStyle: 'miter',
		  pointBorderColor: 'rgba(75,192,192,1)',
		  pointBackgroundColor: '#fff',
		  pointBorderWidth: 1,
		  pointHoverRadius: 5,
		  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		  pointHoverBorderColor: 'rgba(220,220,220,1)',
		  pointHoverBorderWidth: 2,
		  pointRadius: 1,
		  pointHitRadius: 10,
		  data: [65, 59, 80, 81, 56, 55, 40] //C1: 0 C2: 0 C3: 0 Freq: 32768 PAT: 0 Sensor: 0 VAB: 0 VBC: 0 VCA: 0
		},
		{
			label: 'My Second dataset',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: 'rgba(75,192,192,1)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [56, 95, 75, 76, 51, 55, 68] 
		  }
	  ]
	};
	return (
	  
	  <Line data={data} />
	)
  }

export default LineGraph;