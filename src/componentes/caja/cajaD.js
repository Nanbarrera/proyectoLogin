import React, { useState } from 'react';
import './caja.css';

function CajaD() {
    const [dineroInicial, setDineroInicial] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/[^0-9.]/g, '');
        setDineroInicial(numericValue ? `$${numericValue}` : '');
    };

    const registrarDinero = () => {
        if (dineroInicial) {
            alert(`Dinero inicial en caja registrado: ${dineroInicial}`);
        } else {
            alert('Por favor ingrese el dinero inicial en caja.');
        }
    };

    const cerrarVentana = () => {
        alert('Ventana cerrada');
    };

    return (
        <div className="containerC">
            <div className="title-container">
                <h2 className="header">Dinero en Caja</h2>
                <button className="close-btn" onClick={cerrarVentana}>X</button>
            </div>
            <div className="form-group">
                <label htmlFor="dineroInicial">Efectivo Inicial en caja:</label>
                <input
                    type="text"
                    id="dineroInicial"
                    value={dineroInicial}
                    onChange={handleChange}
                    placeholder="Ingrese el dinero inicial"
                />
            </div>
            <button className="btn" onClick={registrarDinero}>
                Registrar Dinero Inicial
            </button>
        </div>
    );
}

export default CajaD;
