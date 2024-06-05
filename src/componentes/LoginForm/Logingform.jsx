import React from "react";
import './LoginForm.css';
import {FaUser, FaLock} from "react-icons/fa";
import logo from './../Assets/logo.png';

const LoginForm = () => {
    return(
        <div className="wrapper">
            <h4 className="tituloTurno">Comenzar Nuevo Turno</h4>
            <div className="logoPrincipal">
                <h3 className="nombreEmpresa">EL TOTO</h3>
                <img className="imgLogo" src={logo} />
            </div>
            
            <form action="">
                
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon" />
                </div>

                <div className="botones">
                    <button className="acceder" type="submit">Acceder</button>
                    <button className="salir" type="submit">Salir</button>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;
