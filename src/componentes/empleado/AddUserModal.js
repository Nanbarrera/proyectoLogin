import React, { useState } from 'react';
import './AddUserModal.css';
import axios from 'axios';

const AddUserModal = ({ onSave, onCancel }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [typeUser, setTypeUser] = useState('');

    const handleSave = async () => {
        try {
            const newUser = {
                username,
                password,
                type_user: typeUser
            };

            // Llama al endpoint POST /api/usuarios en tu servidor Express
            const response = await axios.post('http://localhost:4000/api/usuarios', newUser);

            // Llama a onSave con los datos del nuevo usuario (opcional, depende de tu flujo)
            onSave(response.data);

            // Limpia los campos del formulario después de guardar
            setUsername('');
            setPassword('');
            setTypeUser('');

            // Recarga la página
            window.location.reload();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Agregar Nuevo Usuario</h2>
                <label>Nombre de Usuario:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Tipo de Usuario:</label>
                <select value={typeUser} onChange={(e) => setTypeUser(e.target.value)}>
                    <option value="admin">Administrador</option>
                    <option value="empleado">Empleado</option>
                </select>
                <div className="modal-buttons">
                    <button className="save-btn" onClick={handleSave}>Guardar</button>
                    <button className="cancel-btn" onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default AddUserModal;