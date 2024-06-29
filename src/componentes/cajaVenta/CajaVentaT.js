// CajaVentaT.js
import React, { useContext, useEffect, useState } from 'react';
import './CajaVentaT.css';
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { TurnoContext } from './../turnos/TurnoContext'; // Asegúrate de la ruta correcta

function CajaVentaT() {
    const { turno, updateTurno } = useContext(TurnoContext);
    const [horaCierre, setHoraCierre] = useState('00:00');

    useEffect(() => {
        if (turno) {
            setHoraCierre(turno.horacierre || '00:00');
        }
    }, [turno]);

    const terminarTurno = async () => {
        try {
            if (turno) {
                await updateTurno(turno.id_turno); // Pasa el ID del turno a updateTurno
                console.log('Turno terminado:', turno.id_turno);
            } else {
                console.error('ID de turno no disponible');
            }
        } catch (error) {
            console.error('Error al terminar el turno:', error);
            // Manejo de errores si es necesario
        }
    };

    return (
        <div>
            <h2><i className='iconoV'>< MdAttachMoney />Ventas Totales</i></h2>

            <div className="DineroC">
                <h2><i className='iconoD'><FcMoneyTransfer /></i> Dinero en Caja</h2>
                <div className="cash-info">
                    <div className="HoraInicial">
                        <span>Hora Inicial</span>
                        <span>{turno ? turno.horainicio : '00:00'}</span>
                    </div>
                    <div className="FondoInicial">
                        <span>Fondo Inicial</span>
                        <span>{turno ? `$${turno.monto_inicial}` : '$00.00'}</span>
                    </div>
                    <div className="VentaTotal">
                        <span>Venta Total</span>
                        <span>$00.00</span>
                    </div>
                    <div className="HoraCorte">
                        <span>Hora de corte</span>
                        <span>{horaCierre}</span>
                    </div>
                </div>
                <div className='terminoT'>
                    <button onClick={terminarTurno}>Terminar turno</button>
                </div>
            </div>
        </div>
    );
}

export default CajaVentaT;


