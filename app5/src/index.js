import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Hello extends React.Component{
  render(){
    return (
      <h1>hello</h1>
    );
  }
}
class Timer extends React.Component{
  render(){
    return(
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    );
  }
}
class App extends React.Component{
  render(){
    return (
      <div>
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
const tick = ()=>{
  root.render(<App />);
}

setInterval(()=>{
  tick();
}, 1000);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals