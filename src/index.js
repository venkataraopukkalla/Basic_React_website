import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import { Message } from './side';
import { Footer } from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
   <Header/>
   <Message/>
   <Footer/>
  </div>, document.getElementById("root")
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

