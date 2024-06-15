import React from 'react';
import LoginForm from './componentes/LoginForm/Logingform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './componentes/venta/Sidebar';
import './App.css';
import Inventario from "./componentes/inventario/Inventario"; // Asegúrate de tener la ruta correcta aquí

function App() {
  return (
    <div >
      <LoginForm/>
    </div>
  );
}

export default App;
