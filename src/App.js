import React from 'react';
import LoginForm from './componentes/LoginForm/Logingform';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './componentes/venta/Sidebar';
import './App.css';
import inventario from './componentes/inventario/Inventario'; 
import caja from './componentes/caja/Caja';

function App() {
  return (
    <div >
      <LoginForm/>
    </div>
  );
}

export default App;
