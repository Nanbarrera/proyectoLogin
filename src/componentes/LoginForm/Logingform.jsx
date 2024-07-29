// src/componentes/LoginForm/LoginForm.js
import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from './../Assets/logo.png';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // Importa el useAuth

const URI = 'http://localhost:4000/api/login'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Usa el contexto de autenticación

    const getLogin = async () => {
        console.log(username, password);
        try {
            const res = await axios.post(URI, {
                username: username,
                password: password
            });
            if (res.data !== "Invalid credentials") {
                const { id_user } = res.data; // Asegúrate de que la respuesta contenga id_user
                login(id_user); // Llama a la función login del contexto con id_user
                navigate('/caja');
            }
        } catch {
            alert("Usuario o contraseña incorrecta")
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        getLogin();
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
