// import React, { useEffect, useState } from "react";
// import './Inventario.css';
// import { SidebarData } from './SidebarData';
// import axios from "axios";

// const URI = 'http://localhost:4000/api/productos';


// function Inventario() {
//     const [productos, setProductos] = useState([]);
//     const[nombre, setNombre] = useState([]);
//     const [categoryTerm, setCategoryTerm] = useState('');

//     useEffect(() => {
//         axios.get(URI)
//             .then(response => {
//                 setProductos(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching the product data:', error);
//             });
//     }, []);

//     const handleLogout = () => {
//         // Lógica para salir
//         window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
//     };
//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`${URI}/search/name`, {
//                 params: { name: searchTerm }
//             });
//             setProductos(response.data);
//         } catch (error) {
//             console.error('Error searching the product data:', error);
//         }
//     };




//     //


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
//                         <h1 className="header">INVENTARIO</h1>
//                     </div>
//                     <div className="main-content">
//                         <div className="search-bar1">
//                             <label className="CategoriaI" htmlFor="search">Categoría:</label>
//                             <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />

//                         </div>




//                         <div className="search-bar1">
//                             <label className="productosI" htmlFor="search">Productos:</label>
//                             <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />
//                             <button className="search-button" onClick={handleSearch}><i className="fas fa-search"></i></button>

//                         </div>

//                         <div className="tabla">
//                             <table className="tableI">
//                                 <thead>
//                                     <tr>
//                                         <th>Producto</th>
//                                         <th>Descripción</th>
//                                         <th>Costo</th>
//                                         <th>Venta</th>
//                                         <th>Existencia</th>
//                                         <th>Categoría</th>
//                                         <th>Acción</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {productos.map((productos) => (
//                                         <tr key={productos.id}>
//                                             <td>{productos.nombre}</td>
//                                             <td>{productos.descripcion}</td>
//                                             <td>${productos.costo_compra}</td>
//                                             <td>${productos.precio_venta}</td>
//                                             <td>{productos.stock}</td>
//                                             <td>{productos.categoria_id}</td>
//                                             <td>
//                                                 {/* Aquí puedes agregar botones o enlaces para acciones como editar o eliminar */}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Inventario;
import React, { useEffect, useState } from "react";
import './Inventario.css';
import { SidebarData } from './SidebarData';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const URI = 'http://localhost:4000/api/productos';

function Inventario() {
    const [producto, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryTerm, setCategoryTerm] = useState('');

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await axios.get(URI);
            setProductos(response.data);
        } catch (error) {
            console.error('Error fetching the product data:', error);
        }
    };


    const handleSearch = async () => {
        try {
            const response = await axios.get(`${URI}/search/name`, {
                params: { name: searchTerm }
            });
            setProductos(response.data);
        } catch (error) {
            console.error('Error searching the product data:', error);
        }
    };

    const handleCategorySearch = async () => {
        try {
            const response = await axios.get(`${URI}/search/category`, {
                params: { nombre: id_categoria}
            });
            setProductos(response.data);
        } catch (error) {
            console.error('Error searching the product data:', error);
        }
    };
    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                await axios.delete(`${URI}/${id}`);
                setProductos(producto.filter(producto => {
                    return producto !== id;
                }));
            } catch (error) {
            console.error('Error deleting the product:', error);
            }
        }
    };

    const handleLogout = () => {
        // Lógica para salir
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
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
                    <div>
                        <button className="logoutButton" onClick={handleLogout}>
                            Salir
                        </button>
                    </div>
                </div>

                <div className="content">
                    <div className="header-container">
                        <h1 className="header">INVENTARIO</h1>
                    </div>
                    <div className="main-content">
                        <div className="search-bar1">
                            <label className="CategoriaI" htmlFor="search-category">Categoría:</label>
                            <input
                                className="Ibuscar"
                                type="text"
                                id="search-category"
                                name="search-category"
                                placeholder="Buscar..."
                                value={categoryTerm}
                                onChange={(e) => setCategoryTerm(e.target.value)}
                            />
                            <button className="search-button" onClick={handleCategorySearch}><i className="fas fa-search"></i></button>
                        </div>
                        <div className="search-bar1">
                            <label className="productosI" htmlFor="search-product">Productos:</label>
                            <input
                                className="Ibuscar"
                                type="text"
                                id="search-product"
                                name="search-product"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="search-button" onClick={handleSearch}><i className="fas fa-search"></i></button>
                        </div>

                        <div className="tabla">
                            <table className="tableI">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Descripción</th>
                                        <th>Costo</th>
                                        <th>Venta</th>
                                        <th>Existencia</th>
                                        <th>Categoría</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {producto.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>${producto.costo_compra}</td>
                                            <td>${producto.precio_venta}</td>
                                            <td>{producto.stock}</td>
                                            <td>{producto.id_categoria}</td>
                                            <td>
                                                {/* Aquí puedes agregar botones o enlaces para acciones como editar o eliminar */}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventario;
