// src/componentes/LoginForm/LoginForm.js
import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from './../Assets/logo.png';

const LoginForm = () => {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("123456");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            setIsLoggedIn(true);
            navigate('/caja');
        } else {
            alert("Por favor, introduce un nombre de usuario y una contraseña.");
        }
    }

    return (
        <div className="wrapper">
            <h4 className="tituloTurno">Comenzar Nuevo Turno</h4>
            <div className="logoPrincipal">
                <h3 className="nombreEmpresa">EL TOTO</h3>
                <img className="imgLogo" src={logo} alt="logo" />
            </div>

            <form onSubmit={handleLogin}>
                <div className="input-box">
                    <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="botones">
                    <button className="acceder" type="submit">Acceder</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;


