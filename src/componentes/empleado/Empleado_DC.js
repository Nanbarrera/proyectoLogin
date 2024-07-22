import React, { useEffect, useState } from 'react';
import './Empleado_DC.css';
import EditUserModal from './EditUserModal';
import AddUserModal from './AddUserModal';
import axios from 'axios';

const Empleado_DC = () => {
    const [users, setUsers] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Fetch users from the backend
        axios.get('http://localhost:4000/api/usuarios')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/usuarios/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
        setShowEditModal(true);
    };

    const handleSaveEdit = (updateUsuario) => {
        axios.put(`http://localhost:4000/api/usuarios/${currentUser.id}`, updateUsuario)
            .then(() => {
                setUsers(users.map(user => (user.id === currentUser.id ? updateUsuario : user)));
                setShowEditModal(false);
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    const handleSaveAdd = (newUser) => {
        setUsers([...users, newUser]);
        setShowAddModal(false);
    };

    return (
        <div>
            <h1>Usuarios</h1>
            <button onClick={() => setShowAddModal(true)}>Agregar Usuario</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre de Usuario</th>
                        <th>Tipo de Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.type_user}</td>
                            <td>
                                <button onClick={() => handleEdit(user)}>Editar</button>
                                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showEditModal && (
                <EditUserModal
                    user={currentUser}
                    onSave={handleSaveEdit}
                    onCancel={() => setShowEditModal(false)}
                />
            )}
            {showAddModal && (
                <AddUserModal
                    onSave={handleSaveAdd}
                    onCancel={() => setShowAddModal(false)}
                />
            )}
        </div>
    );
};

export default Empleado_DC;
