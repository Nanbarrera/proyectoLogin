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
import CajaVenta from './../componentes/cajaVenta/CajaVenta'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/producto" element={<Producto />} />
            <Route path='/cajaVenta' element={<CajaVenta />} />
            <Route path="/empleado" element={<Empleado />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/caja" element={<Caja />} />
            <Route path="/busquedaProd" element={<BusquedaProd />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<LoginForm />} /> {/* Ruta por defecto */}
        </Routes>
    );
};

export default AppRoutes;
