import React, { useEffect, useState } from "react";
import './Inventario.css';
import { SidebarData } from './SidebarData';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const URI = 'http://localhost:4000/api/productos';

function Inventario() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get(URI)
            .then(response => {
                setProductos(response.data);
            })
            .catch(error => {
                console.error('Error fetching the product data:', error);
            });
    }, []);

    const handleLogout = () => {
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
    }

    const handleDelete = (id) => {
        axios.delete(`${URI}/${id}`)
            .then(() => {
                setProductos(productos.filter(producto => producto.id !== id));
            })
            .catch(error => {
                console.error('Error deleting the product:', error);
            });
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
                            <label className="CategoriaI" htmlFor="search">Categoría:</label>
                            <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />
                            <button className="search-button"><i className="fas fa-search"></i></button>
                        </div>
                        <div className="search-bar1">
                            <label className="productosI" htmlFor="search">Productos:</label>
                            <input className="Ibuscar" type="text" id="search" name="search" placeholder="Buscar..." />
                            <button className="search-button"><i className="fas fa-search"></i></button>
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
                                    {productos.map((producto) => (
                                        <tr key={producto.id}>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.descripcion}</td>
                                            <td>${producto.costo_compra}</td>
                                            <td>${producto.precio_venta}</td>
                                            <td>{producto.stock}</td>
                                            <td>{producto.categoria_id}</td>
                                            <td>
                                                <button className="eliminar" onClick={() => handleDelete(producto.id)}>
                                                    <DeleteIcon />
                                                </button>
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
