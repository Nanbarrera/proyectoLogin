// src/componentes/LoginForm/LoginForm.js
import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import logo from './../Assets/logo.png';
import axios from 'axios';

const URI ='http://localhost:4000/api/login'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); 

    const getLogin = async () =>{
        console.log(username,password)
            const res = await axios.post(URI, {
                username:username,
                password:password
            })
            console.log(res.data==="Invalid credentials");

            if(res.data!="Invalid credentials"){
                navigate('/caja')
            } else{
               alert("Usuario o contraseña incorrecta")
            }
    }

    const handleLogin =  (e) => {
        e.preventDefault(); 
        getLogin();
        
        //if(username, password){
            //setIsLoggedIn(true);
            //  navigate('/caja');
        //} else{
            //alert("Por favor, introduce un nombre de usuario y una contraseña.");
        //}
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