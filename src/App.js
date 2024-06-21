import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './componentes/LoginForm/Logingform';
import Sidebar from './componentes/venta/Sidebar';
import './App.css';
<<<<<<< HEAD
import Inventario from "./componentes/inventario/Inventario"; // Asegúrate de tener la ruta correcta aquí
=======
import inventario from './componentes/inventario/Inventario'; 
import caja from './componentes/caja/Caja';
>>>>>>> 523a6f9d6b17de3815aeb5176770b30bc76df6cb

function App() {
  return (
      <ProductProvider> {/* Envuelve tus rutas con ProductProvider */}
        <Routes>
          <Route path="/busquedaProd" element={<BusquedaProd />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/ticket" element={<TicketPage />} /> {/* Ruta para la página del ticket */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<LoginForm />} /> {/* Ruta por defecto */}
        </Routes>
      </ProductProvider>

  );
}

export default App;
