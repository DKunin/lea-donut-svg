'use strict';

import React from 'react';
import LeaDonut from './Donut';  
import ReactDOM from 'react-dom';  

let Pies = React.createClass({  
  render: function() {
    return <div>
      <LeaDonut percent={9} width={50}/>
      <LeaDonut background='#fff'  percent={50} piecolor='#000' textcolor='#000'/>
      <LeaDonut background='#3498db' width={150} percent={78} piecolor='#2980b9' textcolor='#2980b9'/>
      <LeaDonut background='#e74c3c' width={200} percent={89} piecolor='#c0392b' textcolor='#c0392b'/>
    </div>
  }
});



ReactDOM.render(<Pies />,  document.getElementById('donutpie'));
