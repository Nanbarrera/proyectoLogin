import React, { useState } from "react";
import './caja.css';
import { SidebarData } from './SidebarData';
import CajaD from './cajaD';


function Caja() {
    const handleLogout = () => {
        // Lógica para salir
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
    };

    return (
        <div className="principalC">
  
                    <CajaD />
 
        </div>
    );
}

export default Caja;