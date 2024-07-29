// src/componentes/caja/CajaD.js
import React, { useState, useEffect } from 'react';
import './caja.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import ls from 'local-storage'
<<<<<<< HEAD
import logo from './../Assets/logo.png'
=======
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2


const URI = 'http://localhost:4000/api/turnos';

function CajaD() {
    const [dinero_inicial, setDinero_Inicial] = useState('');
    const navigate = useNavigate();
    const { userId } = useAuth();

    const handleChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, '');
        setDinero_Inicial(numericValue ? `$${numericValue} ` : '');
    };
    
    const isAuth = ls.get("isAuth")
    useEffect(()=>{
        if(!isAuth){
            navigate("/")
        }
    })

    const isAuth = ls.get("isAuth")
    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    })

    const registrarDinero = async () => {
        if (dinero_inicial) {
            console.log('Enviando datos:', { id_user: userId, dinero_inicial: parseFloat(dinero_inicial.replace('$', '').replace(',', '')) });
            try {
                const res = await axios.post(URI, {
                    id_user: userId,
                    dinero_inicial: parseFloat(dinero_inicial.replace('$', ''))
                });
                if (res.data.error && res.data.error.includes('Ya tienes un turno abierto')) {
                    alert('Ya tienes un turno abierto. No puedes iniciar otro.');
                    // Aquí podrías redirigir al usuario a una página apropiada
                    navigate('/sidebar');
                }
            } catch (error) {
                navigate('/sidebar')
            }
        } else {
            alert('Por favor ingrese el dinero inicial')
        }
    };


    const cerrarVentana = () => {
        ls.remove("isAuth")
        navigate("/login");
    };

    return (
        <div className="containerC">
            <div className="title-containerC">
                <h2 className="headerC">Dinero en Caja</h2>
                <button className="close-btnC" onClick={cerrarVentana}>X</button>
            </div>
            <div className="form-groupC">
                <label htmlFor="dineroInicial">Efectivo Inicial en caja:</label>
                <input
                    type="text"
                    id="dineroInicial"
                    value={dinero_inicial}
                    onChange={handleChange}
                    placeholder="Ingrese el dinero inicial"
                />
            </div>
            <button className="btnC" onClick={registrarDinero}>
                Registrar Dinero Inicial
            </button>
        </div>
    );
}

export default CajaD;

// dstafhgkldsagafcgbajhygvhdafvgbhadgvbhwfgyh