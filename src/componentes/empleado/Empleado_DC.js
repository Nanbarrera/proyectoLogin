import React, { useState } from 'react';
import './Empleado_DC.css';
import { FcMoneyTransfer } from "react-icons/fc";

function Empleado_DC() {
    const [employeeName, setEmployeeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div>
            <div className="empleado">
                <div className="NombreE">
                    <label>Nombre del empleado:</label>
                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        className="input-field"
                    />
                </div>
                <div className="NumeroT">
                    <label>Número de teléfono:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="input-field"
                    />
                </div>
            </div>
            <div className="DineroC">
                <h2><i className='iconoD'><FcMoneyTransfer /></i> Dinero en Caja</h2>
                <div className="cash-info">
                    <div className="HoraI">
                        <span>Hora Inicial</span>
                        <span>00:00</span>
                    </div>
                    <div className="FondoI">
                        <span>Fondo Inicial</span>
                        <span>$00.00</span>
                    </div>
                    <div className="VentaT">
                        <span>Venta Total</span>
                        <span>$00.00</span>
                    </div>
                    <div className="HoraC">
                        <span>Hora de corte</span>
                        <span>00:00</span>
                    </div>
                </div>
                <div className="TotalCorte">
                    <span>Total Corte</span>
                    <span>$00.00</span>
                </div>
            </div>
        </div>
    );
};

export default Empleado_DC;
