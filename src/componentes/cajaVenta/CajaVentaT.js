
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


