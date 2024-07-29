import React, { useState } from 'react';
import './EditUserModal.css';

const EditUserModal = ({ user, onSave, onCancel }) => {
    const [editedUsername, setEditedUsername] = useState(user.username);
    const [editedPassword, setEditedPassword] = useState(user.password);
    const [editedTypeUser, setEditedTypeUser] = useState(user.type_user);

    const handleSave = () => {
        onSave({
            id_user: user.id_user,
            username: editedUsername,
            password: editedPassword,
            type_user: editedTypeUser
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Editar Usuario</h2>
                <label>Nombre de Usuario:</label>
                <input
                    type="text"
                    value={editedUsername}
                    onChange={(e) => setEditedUsername(e.target.value)}
                />
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={editedPassword}
                    onChange={(e) => setEditedPassword(e.target.value)}
                />
                <label>Tipo de Usuario:</label>
                <select value={editedTypeUser} onChange={(e) => setEditedTypeUser(e.target.value)}>
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

export default EditUserModal;