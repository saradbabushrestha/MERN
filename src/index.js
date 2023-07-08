import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//import React from "react";
//import ReactDOM, { flushSync } from "react-dom";

//ReactDOM.render(<h1>Hello world!!!</h1>,//jsx ko karan h1 use garna milyo k natra lamo arkai code lekna parxa babel ley convert arxa yo code lai 
                                         //lamo huncha code use garena bane pure js ma garna koje no babel jsx
    //document.getElementById("root"));
    //DOM= document object model
//react component ley break garxauxa  interface laiso that it can be handle independently
//functional comp-ui or for preesentation only
