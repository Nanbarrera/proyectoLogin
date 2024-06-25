import React, { useState } from "react";
import './Inventario.css';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';


function Inventario() {
    const navigate = useNavigate();  // Inicializa el hook useNavigate

    const handleLogout = () => {
        // Lógica para salir
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
    }

    return (
        <div className="principal">
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
                        <h1 className="header">INVENTARIO</h1>
                    </div>
                    <div className="main-content">
                        <div className="search-bar1">
                            <label className="CategoriaI" htmlFor="search">Categoría:</label>
                            <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />
                            <button className="search-button"><i className="fas fa-search"></i></button>
                        </div>
                        <div className="search-bar1">
                            <label className="productosI" htmlFor="search">Productos:</label>
                            <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />
                            <button className="search-button"><i className="fas fa-search"></i></button>
                        </div>

                        <div className="tabla">
                            <table className="tableI">
                                <thead>
                                    <tr>
                                        <th>Descripción</th>
                                        <th>Costo</th>
                                        <th>Venta</th>
                                        <th>Existencia</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventario;
