import React, { useState } from 'react';
import './Empleado_DC.css';

function Empleado_DC() {
    const [employeeName, setEmployeeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [initialTime, setInitialTime] = useState('00:00');
    const [initialPeriod, setInitialPeriod] = useState('AM');
    const [cutoffTime, setCutoffTime] = useState('00:00');
    const [cutoffPeriod, setCutoffPeriod] = useState('AM');
    const [initialFund, setInitialFund] = useState('');
    const [totalSales, setTotalSales] = useState('');

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
                <h2>Dinero en Caja</h2>
                <div className="cash-info">
                    <div className="HoraI">
                        <span>Hora Inicial</span>
                        <input
                            type="time"
                            value={initialTime}
                            onChange={(e) => setInitialTime(e.target.value)}
                            className="input-field"
                        />
                        <select
                            value={initialPeriod}
                            onChange={(e) => setInitialPeriod(e.target.value)}
                            className="period-select"
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                    <div className="FondoI">
                        <span>Fondo Inicial</span>
                        <input
                            type="number"
                            value={initialFund}
                            onChange={(e) => setInitialFund(e.target.value)}
                            className="input-field"
                            placeholder="$00.00"
                        />
                    </div>
                    <div className="VentaT">
                        <span>Venta Total</span>
                        <input
                            type="number"
                            value={totalSales}
                            onChange={(e) => setTotalSales(e.target.value)}
                            className="input-field"
                            placeholder="$00.00"
                        />
                    </div>
                    <div className="HoraC">
                        <span>Hora de corte</span>
                        <input
                            type="time"
                            value={cutoffTime}
                            onChange={(e) => setCutoffTime(e.target.value)}
                            className="input-field"
                        />
                        <select
                            value={cutoffPeriod}
                            onChange={(e) => setCutoffPeriod(e.target.value)}
                            className="period-select"
                        >
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Empleado_DC;
