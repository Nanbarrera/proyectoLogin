import React, { useState } from "react";
import { SidebarData } from './SidebarData';
import Empleado_DC from './Empleado_DC';
import ls from 'local-storage'
import { Link, useNavigate } from 'react-router-dom';



function Empleado() {

    const isAuth = ls.get("isAuth")
    const navigate = useNavigate();
    const handleLogout = () => {
        ls.remove("isAuth")
        navigate("/login");
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