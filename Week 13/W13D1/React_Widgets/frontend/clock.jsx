import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.date = new Date();
    this.tick = this.tick.bind(this);
  }
  
  componentDidMount() {
    let timeHandle = setInterval(this.tick, 1000);
  }
  
  render () {
    if (!this.state.date) {
      return <div>Loading...</div>
    }
    
    return <div>
      <h1> Clock </h1>
      <div class="clock">
        <li>
            <p class="time">
            Time: 
            {this.hours = this.state.date.getHours()}:
            {this.minutes = this.state.date.getMinutes()}:
            {this.seconds = this.state.date.getSeconds()}
            </p>
        </li>
     </div>
    </div>;
    
  }
  
  tick () {
    this.setState({date: new Date()});
  }

}


export default Clock; 