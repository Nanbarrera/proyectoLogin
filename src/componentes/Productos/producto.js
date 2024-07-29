import React, { useState, useEffect } from 'react';
import { SidebarData } from './SiderbarData';
import{ Link,Navigate,useNavigate} from 'react-router-dom'
import ProductoP from "./productoP";
import ls from 'local-storage'
import logo from './../Assets/logo.png'


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
                            <React.Fragment key={key}>
                                {val.title === "Ventas" && (
                                    <li>
                                    <img src={logo} alt="Logo" style={{ width: '250px', height: 'auto' }} />
                                </li>
                                
                                )}
                                <li
                                    className="row"
                                    onClick={() => { navigate(val.link); }}
                                >
                                    <Link to={val.link} className="sidebar-link">
                                        <div id="icon" className="sidebar-icon">{val.icon}</div>
                                        <div id="title">{val.title}</div>
                                    </Link>
                                </li>
                            </React.Fragment>
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