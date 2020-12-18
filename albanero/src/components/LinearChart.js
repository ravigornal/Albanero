import React from 'react';
import {Line} from 'react-chartjs-2';
import {Link} from "react-router-dom";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
  datasets: [
    {
      label: 'Value',
      fill: true,
      lineTension: 0.3,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 7,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2
      ,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20,30,35,25,45,59,65,41]
    }
  ],
};

function LinearChart() {
  return (
    <div>
        <Link to="/"><button type="button" class="btn btn-info" >Home</button></Link>
        <h2>Line Chart</h2>
        <Line data={data} options={{
          responsive: true,
          maintainAspectRatio: true,
        }}/>
    </div>
  );
}

export default LinearChart;