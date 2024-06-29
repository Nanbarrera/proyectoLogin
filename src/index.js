//import React from 'react';
//import ReactDOM from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
//import './index.css';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

  //const root = ReactDOM.createRoot(document.getElementById('root'));
  //root.render(
    //<React.StrictMode>
      //<App />
    //</React.StrictMode>
  //);
  //reportWebVitals();



// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);



