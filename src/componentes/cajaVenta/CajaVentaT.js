import React, { useState } from 'react';
import './CajaVentaT.css';
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";

function CajaVentaT() {
    const [employeeName, setEmployeeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div>
            <h2><i className='iconoV'>< MdAttachMoney />Ventas Totales</i></h2>

            <div className="DineroC">
                <h2><i className='iconoD'><FcMoneyTransfer /></i> Dinero en Caja</h2>
                <div className="cash-info">
                    <div className="HoraInicial">
                        <span>Hora Inicial</span>
                        <span>00:00</span>
                    </div>
                    <div className="FondoInicial">
                        <span>Fondo Inicial</span>
                        <span>$00.00</span>
                    </div>
                    <div className="VentaTotal">
                        <span>Venta Total</span>
                        <span>$00.00</span>
                    </div>
                    <div className="HoraCorte">
                        <span>Hora de corte</span>
                        <span>00:00</span>
                    </div>
                </div>
                <div className=''>
                    <button>Terminar turno</button>
                </div>
            </div>
        </div>
    );
}

export default CajaVentaT;