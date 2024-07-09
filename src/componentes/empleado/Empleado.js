// import React, { useState } from "react";
// import { SidebarData } from './SidebarData';
// import Empleado_DC from './Empleado_DC';
// import { useNavigate } from 'react-router-dom';



// function Empleado() {
//     const handleLogout = () => {
//         window.location.pathname = "/login";
//     }

//     return (
//         <div className="principal">
//             <div className="container">

//                 <div className="Sidebar">
//                     <ul className="SidebarList">
//                         {SidebarData.map((val, key) => (
//                             <li
//                                 key={key}
//                                 className="row"
//                                 onClick={() => { window.location.pathname = val.link; }}
//                             >
//                                 <div id="icon">{val.icon}</div>
//                                 <div id="title">{val.title}</div>
//                             </li>
//                         ))}
//                     </ul>
//                     <div><button className="logoutButton" onClick={handleLogout}>
//                         Salir
//                     </button></div>

//                 </div>

//                 <div className="content">
//                     <div className="header-container">
//                         <h1 className="header">EMPLEADO</h1>
//                     </div>
//                     <div className="main-content">
//                         <Empleado_DC />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ); escripcion
// </td >
// }






























// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoriasList = () => {
//     const [categorias, setCategorias] = useState([]);

//     useEffect(() => {
//         const fetchCategorias = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/categorias');
//                 setCategorias(response.data);
//             } catch (error) {
//                 console.error('Error fetching categorias:', error);
//             }
//         };

//         fetchCategorias();
//     }, []);

//     const handleDelete = async (id) => {
//         if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
//             try {
//                 await axios.delete(`http://localhost:4000/api/categorias/${id}`);
//                 // Actualizar la lista de categorías después de eliminar
//                 const updatedCategorias = categorias.filter(cat => cat.id !== id);
//                 setCategorias(updatedCategorias);
//                 alert('Categoría eliminada exitosamente.');
//             } catch (error) {
//                 console.error('Error deleting categoria:', error);
//                 alert('Hubo un error al eliminar la categoría.');
//             }
//         }
//     };

//     return (
//         <div>
//             <h1>Lista de Categorías</h1>
//             <table className="basic-table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nombre</th>
//                         <th>Descripción</th>
//                         <th>Acciones</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {categorias.map((cat) => (
//                         <tr key={cat.id}>
//                             <td>{cat.id}</td>
//                             <td>{cat.nombre}</td>
//                             <td>{cat.descripcion}</td>
//                             <td>
//                                 <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
//                                 {/* Aquí podrías agregar botones para editar, si lo necesitas */}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default CategoriasList;



// import { SidebarData } from './SidebarData';
// import Empleado_DC from './Empleado_DC';
// import { useNavigate } from 'react-router-dom';


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Categorias = () => {
//     const [categorias, setCategorias] = useState([]);
//     const [editandoCategoria, setEditandoCategoria] = useState(null);
//     const [nombre, setNombre] = useState('');
//     const [descripcion, setDescripcion] = useState('');
//     const CATEGORIAS_URI = 'http://localhost:4000/api/categorias';

//     useEffect(() => {
//         const fetchCategorias = async () => {
//             try {
//                 const response = await axios.get(CATEGORIAS_URI);
//                 setCategorias(response.data);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             }
//         };

//         fetchCategorias();
//     }, []);

//     const handleEdit = (categoria) => {
//         setEditandoCategoria(categoria.id);
//         setNombre(categoria.nombre);
//         setDescripcion(categoria.descripcion);
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.put(`${CATEGORIAS_URI}/${editandoCategoria}`, { nombre, descripcion });
//             setCategorias(categorias.map(cat => (cat.id === editandoCategoria ? { id: editandoCategoria, nombre, descripcion } : cat)));
//             setEditandoCategoria(null);
//             setNombre('');
//             setDescripcion('');
//         } catch (error) {
//             console.error('Error updating category:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
//             try {
//                 await axios.delete(`${CATEGORIAS_URI}/${id}`);
//                 setCategorias(categorias.filter(categoria => categoria.id !== id));
//                 alert('Categoría eliminada exitosamente.');
//             } catch (error) {
//                 console.error('Error deleting category:', error);
//                 alert('Hubo un error al eliminar la categoría.');
//             }
//         }
//     };

//     return (
//         <div>
//             <h1>Categorías</h1>
//             {editandoCategoria ? (
//                 <form onSubmit={handleUpdate} style={{ marginBottom: '20px' }}>
//                     <div>
//                         <label>Nombre:</label>
//                         <input
//                             type="text"
//                             value={nombre}
//                             onChange={(e) => setNombre(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Descripción:</label>
//                         <input
//                             type="text"
//                             value={descripcion}
//                             onChange={(e) => setDescripcion(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Actualizar Categoría</button>
//                     <button type="button" onClick={() => setEditandoCategoria(null)}>Cancelar</button>
//                 </form>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Nombre</th>
//                             <th>Descripción</th>
//                             <th>Acciones</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {categorias.map(categoria => (
//                             <tr key={categoria.id}>
//                                 <td>{categoria.id}</td>
//                                 <td>{categoria.nombre}</td>
//                                 <td>{categoria.descripcion}</td>
//                                 <td>
//                                     <button onClick={() => handleEdit(categoria)}>Editar</button>
//                                     <button onClick={() => handleDelete(categoria.id)}>Eliminar</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Categorias;


import React, { useState } from "react";
import { SidebarData } from './SidebarData';
import Empleado_DC from './Empleado_DC';
import { useNavigate } from 'react-router-dom';



function Empleado() {
    const handleLogout = () => {
        window.location.pathname = "/login";
    }

    return (
        <div className="principal">
            <div className="container">

                <div className="Sidebar">
                    <ul className="SidebarList">
                        {SidebarData.map((val, key) => (
                            <li
                                key={key}
                                className="row"
                                onClick={() => { window.location.pathname = val.link; }}
                            >
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                            </li>
                        ))}
                    </ul>
                    <div><button className="logoutButton" onClick={handleLogout}>
                        Salir
                    </button></div>

                </div>

                <div className="content">
                    <div className="header-container">
                        <h1 className="header">EMPLEADO</h1>
                    </div>
                    <div className="main-content">
                        <Empleado_DC/> 
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Empleado;