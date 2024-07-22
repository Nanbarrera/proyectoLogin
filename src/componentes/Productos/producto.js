import React, { useState } from "react";
import { SidebarData } from './SiderbarData';
import ProductoP from "./productoP";




function Pmodificar() {
    const handleLogout = () => {
        // Lógica para salir
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
    };

    return (
        <div className="container">

        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => (
                    <li
                        key={key}
                        className="row"
                        onClick={() => { window.location.pathname = val.link; }}
                    >
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                ))}
            </ul>
            <div><button className="logoutButton" onClick={handleLogout}>
                Salir
            </button></div>

        </div>

        <div className="content">
            <div className="header-container">
                <h1 className="header">PRODUCTO</h1>
            </div>
            <div className="main-content">
                <ProductoP/> 
            </div>
           
        </div>
    </div> 
    );
}

export default Pmodificar;