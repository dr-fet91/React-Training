import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


const tick = ()=>{
  const elem = (
    <div>
      <h1>hello</h1>
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    </div>
  );
  root.render(elem);
}

setInterval(()=>{
  tick();
}, 1000);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)) 
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals