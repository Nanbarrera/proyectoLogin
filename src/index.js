//import React from 'react';
//import ReactDOM from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
//import './index.css';
//import { BrowserRouter } from 'react-router-dom';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);
//reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client'; // Usa createRoot desde 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Solo importa BrowserRouter aquí
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot para crear la raíz
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

