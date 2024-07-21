import React, { useState, useEffect } from 'react';
import './Empleado_DC.css';
import AddUserModal from './AddUserModal'; // Importa el nuevo componente modal
import EditUserModal from './EditUserModal';
import { FcMoneyTransfer } from "react-icons/fc";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const URI = 'http://localhost:4000/api/usuarios';

function Empleado_DC() {
    const [employeeName, setEmployeeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(URI);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleAddUser = async () => {
        const newUser = {
            username: employeeName,
            password: phoneNumber,
            type_user: 'employee' // Puedes establecer esto dinámicamente si lo necesitas
        };
        try {
            await axios.post(URI, newUser);
            fetchUsers();
            setEmployeeName('');
            setPhoneNumber('');
            setShowAddUserModal(false);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleUpdateUser = async () => {
        if (selectedUser) {
            const updatedUser = {
                username: employeeName,
                password: phoneNumber,
                type_user: selectedUser.type_user // Mantenemos el tipo de usuario actual
            };
            try {
                await axios.put(`${URI}/${selectedUser.id_user}`, updatedUser);
                fetchUsers();
                setEmployeeName('');
                setPhoneNumber('');
                setSelectedUser(null);
                setShowEditModal(false);
            } catch (error) {
                console.error('Error updating user:', error);
            }
        }
    };

    const handleDeleteUser = async (username) => {
        try {
            await axios.delete(`${URI}/${username}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEditUser = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
        setEmployeeName(user.username);
        setPhoneNumber(user.password);
    };

    const handleSaveEdit = (updatedUser) => {
        axios.put(`${URI}/${updatedUser.id_user}`, updatedUser)
            .then(() => {
                fetchUsers();
                setShowEditModal(false);
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    const handleCancelEdit = () => {
        setShowEditModal(false);
        setEmployeeName('');
        setPhoneNumber('');
        setSelectedUser(null);
    };

    const toggleAddUserModal = () => {
        setShowAddUserModal(!showAddUserModal);
        setEmployeeName('');
        setPhoneNumber('');
    };

    return (
        <div>
            <button className="agregar-btn" onClick={toggleAddUserModal}>Agregar Usuario</button>
            <div className="user-list">
                <h2>Lista de Usuarios</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre de Usuario</th>
                            <th>Contraseña</th>
                            <th>Tipo de Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id_user}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.type_user}</td>
                                <td>
                                    <button onClick={() => handleEditUser(user)}>
                                        <EditIcon />
                                    </button>
                                    <button onClick={() => handleDeleteUser(user.username)}>
                                        <DeleteIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
            <div>
                {showAddUserModal && (
                    <AddUserModal
                        onSave={handleAddUser}
                        onCancel={toggleAddUserModal}
                    />
                )}
                {showEditModal && (
                    <EditUserModal
                        user={selectedUser}
                        onSave={handleSaveEdit}
                        onCancel={handleCancelEdit}
                    />
                )}
            </div>
        </div>
    );
}

export default Empleado_DC;
