<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2
import { SidebarData } from './SiderbarData';
import{ Link,Navigate,useNavigate} from 'react-router-dom'
import ProductoP from "./productoP";
<<<<<<< HEAD
import ls from 'local-storage'
import logo from './../Assets/logo.png'

=======
import ModificarP from "./modificar";
import { Link, useNavigate } from 'react-router-dom';
import ls from 'local-storage'
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2

function Pmodificar() {
    const handleLogout = () => {
        // Lógica para salir
<<<<<<< HEAD
    ls.remove("isAuth")
    navigate("/login")
=======
        ls.remove("isAuth")
        navigate("/login")
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2
    };

    const navigate = useNavigate();
    const isAuth = ls.get("isAuth")

    return (
        <div className="container">

        <div className="Sidebar">
        <ul className="SidebarList">
<<<<<<< HEAD
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
=======
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
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2
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