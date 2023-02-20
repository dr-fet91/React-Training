import React from 'react';
var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    }
  }
  componentDidMount() {
   interval = setInterval(() => {
      this.setState(
        {
          time: new Date().toLocaleTimeString(),
        }
      );
    }, 1000);
  }
  componentDidUpdate(){
    if(this.state.time == '11:53:35 PM'){
      clearInterval(interval);
    }
  }
  componentWillUnmount(){
    //
  }
  render() {

    return (
      <h2 className='timer'>
        it is {this.state.time}
      </h2>
    );
  }
}

export default Timer;