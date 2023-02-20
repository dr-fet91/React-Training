import React from 'react';
var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      isStart: false,
      hour: 0,
      minute: 0,
      second: 0
    }
  }

  startInterval = ()=>{
    if(this.state.isStart){
      return;
    }
    this.state.isStart = true;
    interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
      if(this.state.second === 60){
        this.setState({
          second : 0,
          minute : this.state.minute + 1,
        });
      }
      if(this.state.minute === 60){
        this.setState({
          minute: 0,
          hour: this.state.hour = 1,
        })
      }
    }, 1000);
  }
  stopInterval = ()=>{
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  }
  resetInterval = ()=>{
    this.setState({
      hour: 0,
      minute: 0,
      second: 0
    });
  }




  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h2 className='timer'>
          {`${h <= 9 ? '0' + h : h} : ${m <= 9 ? '0' + m : m} : ${s <= 9 ? '0' + s : s}`}
        </h2>
        <div className='button-box'>
          <button className='action-button start-button' onClick={this.startInterval}>Start</button>
          <button className='action-button stop-button' onClick={this.stopInterval}>Stop</button>
          <button className='action-button reset-button' onClick={this.resetInterval}>Reset</button>
          <button className='action-button reset-button' onClick={this.props.handleSetIsLight}
          style={{backgroundColor: this.props.isLight ? 'black' : 'white', color: this.props.isLight ? 'white' : 'black'}}
          >{this.props.isLight ? 'Dark' : 'Light'}</button>
        </div>
      </>
    );
  }
}

export default Timer;