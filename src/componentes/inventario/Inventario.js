import React, { useState, useEffect } from "react";
import './Inventario.css';
import { SidebarData } from './SidebarData';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProductoForm from '../Productos/productoP'; // Ajusta la ruta según la ubicación real de ProductoForm.js

const URI = 'http://localhost:4000/api/productos';
const CATEGORIAS_URI = 'http://localhost:4000/api/categorias';

function Inventario() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryTerm, setCategoryTerm] = useState('');
    const [editProducto, setEditProducto] = useState(null);
    const [mensajeExito, setMensajeExito] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchProductos();
        fetchCategorias();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await axios.get(URI);
            setProductos(response.data);
        } catch (error) {
            console.error('Error fetching the product data:', error);
        }
    };

    const fetchCategorias = async () => {
        try {
            const response = await axios.get(CATEGORIAS_URI);
            setCategorias(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${URI}/search/name`, {
                params: { name: searchTerm }
            });
            if (response.data.length === 0) {
                console.log('El producto no existe.');
                setProductos([]);
                setErrorMessage('El producto no existe.');
            } else {
                setProductos(response.data);
                setErrorMessage('');
            }
        } catch (error) {
            console.error('Error searching the product data:', error);
        }
    };

    const handleCategorySearch = async (e) => {
        const categoryId = e.target.value;
        setCategoryTerm(categoryId);
        if (categoryId) {
            try {
                const response = await axios.get(`${URI}/search/category`,{
                    params: { id_categoria: categoryId }
                });
                setProductos(response.data);
            } catch (error) {
                console.error('Error searching products by category:', error);
            }
        } else {
            fetchProductos();
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
            try {
                await axios.delete(`${URI}/${id}`);
                setProductos(productos.filter(producto => producto.id !== id));
            } catch (error) {
                console.error('Error deleting the product:', error);
            }
        }
    };

    const handleEdit = (producto) => {
        setEditProducto(producto);
    };

    const handleEditSuccess = () => {
        setEditProducto(null);
        fetchProductos();
        setMensajeExito('¡El Producto fue editado correctamente!');
    };

    const handleLogout = () => {
        window.location.pathname = "/login";
    };

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
                            <select
                                className="Ibuscar"
                                id="search-category"
                                name="search-category"
                                value={categoryTerm}
                                onChange={handleCategorySearch}
                            >
                                <option value="">Selecciona una categoría</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.nombre}
                                    </option>
                                ))}
                            </select>
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
                                            <td>
                                                <button onClick={() => handleEdit(producto)}>
                                                    <EditIcon />
                                                </button>
                                                <button onClick={() => handleDelete(producto.id)}>
                                                    <DeleteIcon />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {editProducto && (
                            <div className="editar-producto-form">
                                <h2>Editar Producto</h2>
                                <ProductoForm producto={editProducto} onSuccess={handleEditSuccess} />
                            </div>
                        )}

                        {mensajeExito &&<div className="mensaje-exito">{mensajeExito}</div>}
                        {errorMessage && <div className="error-message-box">{errorMessage}</div>}
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default Inventario;