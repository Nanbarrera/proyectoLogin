// // src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';


// // Utiliza createRoot en lugar de ReactDOM.render
// const root = ReactDOM.{createRoot}(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );









import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  reportWebVitals();







