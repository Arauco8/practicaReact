/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Context from './Context/Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
//</React.StrictMode>
)
