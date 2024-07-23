import React, { useState, useEffect } from "react";
import { SidebarData } from './SiderbarData';
import ProductoP from "./productoP";
import ModificarP from "./modificar";
import { Link, useNavigate } from 'react-router-dom';
import ls from 'local-storage'

function Pmodificar() {
    const handleLogout = () => {
        // Lógica para salir
        ls.remove("isAuth")
        navigate("/login")
    };

    const navigate = useNavigate();
    const isAuth = ls.get("isAuth")

    return (
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