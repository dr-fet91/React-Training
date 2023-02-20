import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
const root = ReactDOM.createRoot(document.getElementById('root'));


class Hello extends React.Component{
  render(){
    return (
      <h1>hello</h1>
    );
  }
}
class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      time : new Date().toLocaleTimeString(),
    }
  }
  render(){
    setInterval(()=>{
      this.setState(
        {
          time: new Date().toLocaleTimeString(),
        }
      );
    }, 1000);
    return(
      <h2 className='timer'>
        it is {this.state.time}
      </h2>
    );
  }
}
class App extends React.Component{
  render(){
    return (
      <div className='main'>
        <Hello />
        <Timer />
      </div>
    );
  }
}
// اینم میشه اما پایینیه درسته
//const elem = new App();
// const tick = ()=>{
//   root.render(elem.render());
// }

root.render(<App />);
const tick = ()=>{
  
}

setInterval(()=>{
  tick();
}, 1000);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals