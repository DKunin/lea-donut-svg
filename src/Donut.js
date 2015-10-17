'use strict';

var React = require('react');  
require('./donut.css');

let DonutPie = React.createClass({  
  getDefaultProps: function(){
    return {
      background: '#40d47e',
      piecolor: '#16a085',
      percent: 20,
      width: 100,
      holeradius: 40,
      fill: '#fff',
      textcolor: '#16a085'
    };
  },
  render: function() {
    var w = this.props.width;
    var fontsize = w*0.4;
    var percent = 158/100 * this.props.percent;
    return <div style={{width: w, position: 'relative', display: 'inline-block'}}>
      <span className='donut-text' style={{color: this.props.textcolor, 'fontSize': fontsize }}>{this.props.percent}</span>
      <svg viewBox={'0 0 100 100'}  style={{background: this.props.background }}>
        <circle r='25' cx='50' cy='50' className='outer-circle' strokeDasharray={percent + ' 158'} stroke={this.props.piecolor}/>
        <circle r={this.props.holeradius} cx='50' cy='50' className='inner-circle' fill={this.props.fill}/>
      </svg>
    </div>
  }
});

module.exports = DonutPie;
