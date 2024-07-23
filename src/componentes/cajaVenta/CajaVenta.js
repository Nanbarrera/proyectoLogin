import React, { useState } from "react";
import { SidebarData } from './SidebarData';
import CajaVentaT from './CajaVentaT';
import { Link, useNavigate } from 'react-router-dom';
import ls from 'local-storage'

function CajaVenta() {
    const navigate = useNavigate();
    const handleLogout = () => {
        ls.remove("isAuth")
        navigate("/login")
    }

    return (
        <div className="principal">
            <div className="container">
    return (
        <div className="principal">
            <div className="container">

                <div className="Sidebar">
                <ul className="SidebarList">
                        {SidebarData.map((val, key) => (
                            <li
                                key={key}
                                className="row"
                                onClick={() => { navigate(val.link); }}
                            >
                                <Link to={val.link} >
                                    <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </Link>
                                
                            </li>
                        ))}
                    </ul>
                    <div><button className="logoutButton" onClick={handleLogout}>
                        Salir
                    </button></div>

                </div>
                </div>

                <div className="content">
                    <div className="header-container">
                        <h1 className="header">CAJA TURNO</h1>
                    </div>
                    <div className="main-content">
                        <CajaVentaT/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CajaVenta
;