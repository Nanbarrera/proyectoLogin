import React, {  useEffect } from 'react';
import './CajaVentaT.css';
import { FcMoneyTransfer } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ls from 'local-storage'

const URI = 'http://localhost:4000/api/turnos';

function CajaVentaT() {
    const { userId, logout } = useAuth();
    const navigate = useNavigate();

    const isAuth = ls.get("isAuth")
    useEffect(()=>{
        if(!isAuth){
            navigate("/")
        }
    })

    const terminarTurno = async () => {
        try {
            const datosParaCerrarTurno = {
                id_user: userId
            };
    
            console.log('Datos enviados para cerrar turno:', datosParaCerrarTurno);
    
            const res = await axios.put(`${URI}/${userId}`, datosParaCerrarTurno);
    
            console.log('Respuesta del servidor:', res.data);
    
            alert('Turno cerrado exitosamente');
            logout(); // Llama a la función logout para cerrar la sesión
            navigate('/sidebar');
        } catch (error) {
            console.error('Error cerrando el turno:', error.response ? error.response.data : error.message);
            alert('Error cerrando el turno');
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
                    <button onClick={terminarTurno}>Terminar turno</button>
                </div>
            </div>
        </div>
    );
}

export default CajaVentaT;

