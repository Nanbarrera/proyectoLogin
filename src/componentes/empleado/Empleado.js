import React, { useState } from "react";
import { SidebarData } from './SidebarData';
import Empleado_DC from './Empleado_DC';
import { useNavigate } from 'react-router-dom';

function Empleado() {
    const handleLogout = () => {
        window.location.pathname = "/login";
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
                        <h1 className="header">EMPLEADO</h1>
                    </div>
                    <div className="main-content">
                        <Empleado_DC/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Empleado;