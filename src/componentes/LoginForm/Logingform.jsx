import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import Sidebar from './../venta/Sidebar'
import logo from './../Assets/logo.png';
import Inventario from './../inventario/Inventario';
import Caja from "../caja/Caja";

const LoginForm = () => {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("123456");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí iría tu lógica de autenticación, como consultar una base de datos o verificar las credenciales
        // Por simplicidad, aquí solo comprobaremos que el usuario y la contraseña no estén vacíos
        if (username && password) {
            setIsLoggedIn(true); // Establecer el estado de inicio de sesión como verdadero
        } else {
            alert("Por favor, introduce un nombre de usuario y una contraseña.");
        }
    }

    return isLoggedIn ? (
        <Caja/>
    ) : (
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
                    {/* No necesitas un botón de "Salir" en el formulario de inicio de sesión */}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
