// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './../componentes/LoginForm/Logingform';
import Sidebar from './../componentes/venta/Sidebar';
import BusquedaProd from './../componentes/venta/busquedaProd';
import TicketPage from './../componentes/ventaTicket/TicketPage';
import Caja from './../componentes/caja/Caja';
import Inventario from './../componentes/inventario/Inventario';
import Empleado from './../componentes/empleado/Empleado';
import Producto from './../componentes/Productos/producto';
import CajaVenta from './../componentes/cajaVenta/CajaVenta';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} /> {/* Ruta por defecto */}
            <Route path="/producto" element={<ProtectedRoute element={<Producto />} />} />
            <Route path="/cajaVenta" element={<ProtectedRoute element={<CajaVenta />} />} />
            <Route path="/empleado" element={<ProtectedRoute element={<Empleado />} />} />
            <Route path="/inventario" element={<ProtectedRoute element={<Inventario />} />} />
            <Route path="/caja" element={<ProtectedRoute element={<Caja />} />} />
            <Route path="/busquedaProd" element={<ProtectedRoute element={<BusquedaProd />} />} />
            <Route path="/sidebar" element={<ProtectedRoute element={<Sidebar />} />} />
            <Route path="/ticket" element={<ProtectedRoute element={<TicketPage />} />} />
        </Routes>
    );
};

export default AppRoutes;


