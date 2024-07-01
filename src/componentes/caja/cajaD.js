// src/componentes/caja/CajaD.js
import React, { useState } from 'react';
import './caja.css';
import { useNavigate } from 'react-router-dom';


const URI ='http://localhost:4000/api/turnos'

function CajaD() {
    const [monto_inicial, setmonto_inicial] = useState('');




    const [dineroInicial, setDineroInicial] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, '');
        setDineroInicial(numericValue ? `$${numericValue}` : '');
    };

    const registrarDinero = () => {
        if (dineroInicial) {
            //alert(`Dinero inicial en caja registrado: ${dineroInicial}`);
            navigate('/sidebar');
        } else {
            alert('Por favor ingrese el dinero inicial en caja.');
        }
    };

    const cerrarVentana = () => {
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
                    value={dineroInicial}
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



