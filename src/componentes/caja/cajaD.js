import React, { useState } from 'react';
import './caja.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const URI = 'http://localhost:4000/api/turnos';

function CajaD() {
    const [monto_inicial, setMontoInicial] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const id_user = 1; // Ajusta esto según tu lógica para obtener el ID del usuario
            const res = await Axios.post(URI, { id_user, monto_inicial });
            console.log(res.data);
            alert(`Dinero inicial en caja registrado: ${res.data.monto_inicial}`);
            navigate('/sidebar'); // Ajusta la ruta según tu lógica
        } catch (error) {
            console.error('Error al registrar dinero inicial:', error.response ? error.response.data : error.message);
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
            <form onSubmit={handleSubmit}>
                <div className="form-groupC">
                    <label htmlFor="dineroInicial">Efectivo Inicial en caja:</label>
                    <input
                        type="text"
                        id="dineroInicial"
                        value={monto_inicial}
                        onChange={(e) => setMontoInicial(e.target.value)}
                        placeholder="Ingrese el dinero inicial"
                    />
                </div>
                <button type="submit" className="btnC">
                    Registrar Dinero Inicial
                </button>
            </form>
        </div>
    );
}

export default CajaD;


