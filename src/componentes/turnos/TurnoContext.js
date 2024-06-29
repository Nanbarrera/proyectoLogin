// TurnoContext.js
import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const TurnoContext = createContext();

export const TurnoProvider = ({ children }) => {
    const [turno, setTurno] = useState(null);

    const fetchCurrentTurno = async () => {
        try {
            const res = await Axios.get('http://localhost:4000/api/turnos/');
            setTurno(res.data);
        } catch (error) {
            console.error('Error fetching current turno:', error);
        }
    };

    const updateTurno = async (id_turno) => {
        const fecha_cierre = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
        const horacierre = new Date().toTimeString().split(' ')[0]; // Hora actual en formato HH:MM:SS

        try {
            const res = await Axios.put(`http://localhost:4000/api/turnos/${id_turno}`, { fecha_cierre, horacierre });
            setTurno(res.data); // Actualiza el estado del turno si es necesario
            console.log('Turno actualizado:', res.data);
        } catch (error) {
            console.error('Error updating turno:', error);
            throw error; // Lanza el error para manejarlo en el componente que llama a updateTurno
        }
    };

    useEffect(() => {
        fetchCurrentTurno();
    }, []);

    return (
        <TurnoContext.Provider value={{ turno, updateTurno }}>
            {children}
        </TurnoContext.Provider>
    );
};

export default TurnoContext;


