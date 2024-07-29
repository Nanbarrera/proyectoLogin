import React, { useState, useEffect } from "react";
import './Inventario.css';
import { SidebarData } from './SidebarData';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, Link } from 'react-router-dom';
import ProductoForm from '../Productos/productoP';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ls from 'local-storage';
import logo from './../Assets/logo.png';

const URI = 'http://localhost:4000/api/productos';
const CATEGORIAS_URI = 'http://localhost:4000/api/categorias';

function Inventario() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryTerm, setCategoryTerm] = useState('');
    const [editProducto, setEditProducto] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newStock, setNewStock] = useState('');

    useEffect(() => {
        fetchProductos();
        fetchCategorias();
    }, []);

    const navigate = useNavigate();
    const isAuth = ls.get("isAuth");
    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

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
                setProductos([]);
                toast.error('El producto no existe.');
            } else {
                setProductos(response.data);
                toast.success('Producto encontrado.');
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
                const response = await axios.get(`${URI}/search/category`, {
                    params: { id_categoria: categoryId }
                });
                if (response.data.length === 0) {
                    setProductos([]);
                    toast.error('La categoría no tiene productos.');
                } else {
                    setProductos(response.data);
                    toast.success('Categoría encontrada con productos.');
                }
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
                toast.success('Producto eliminado correctamente.');
            } catch (error) {
                console.error('Error deleting the product:', error);
                toast.error('Error al eliminar el producto.');
            }
        }
    };

    const handleEdit = (producto) => {
        setEditProducto(producto);
    };

    const handleEditSuccess = async (updatedProducto) => {
        try {
            await axios.put(`${URI}/${updatedProducto.id}`, updatedProducto);
            const updatedProductos = productos.map(producto =>
                producto.id === updatedProducto.id ? updatedProducto : producto
            );
            setProductos(updatedProductos);
            toast.success('Editado correctamente.');
            setEditProducto(null);
        } catch (error) {
            console.error('Error editing the product:', error);
            toast.error('Error al editar el producto.');
        }
    };

    const handleLogout = () => {
        navigate("/login");
        ls.remove("isAuth");
    };

    const handleRestock = (product) => {
        setSelectedProduct(product);
        setNewStock('');
    };

    const handleRestockSubmit = async () => {
        if (newStock.trim() === '' || isNaN(newStock) || newStock < 0) {
            toast.error('Por favor, ingresa una cantidad válida.');
            return;
        }

        try {
            const updatedStock = parseInt(newStock, 10);
            const updatedProduct = { ...selectedProduct, stock: updatedStock };
            await axios.put(`${URI}/${selectedProduct.id}`, updatedProduct);
            setProductos(productos.map(product =>
                product.id === selectedProduct.id ? updatedProduct : product
            ));
            toast.success('Stock actualizado correctamente.');
            setSelectedProduct(null);
        } catch (error) {
            console.error('Error updating the stock:', error);
            toast.error('Error al actualizar el stock.');
        }
    };

    return (
        <div className="principal">
            <ToastContainer />
            <div className="container">
                <div className="Sidebar">
                    <ul className="SidebarList">
                        {SidebarData.map((val, key) => (
                            <React.Fragment key={key}>
                                {val.title === "Ventas" && (
                                    <li>
                                        <img src={logo} alt="Logo" style={{ width: '250px', height: 'auto' }} />
                                    </li>
                                )}
                                <li
                                    className="row"
                                    onClick={() => { navigate(val.link); }}
                                >
                                    <Link to={val.link} className="sidebar-link">
                                        <div id="icon" className="sidebar-icon">{val.icon}</div>
                                        <div id="title">{val.title}</div>
                                    </Link>
                                </li>
                            </React.Fragment>
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
                                            <td>
                                                {producto.stock}
                                                {producto.stock <= producto.stock_minimo && (
                                                    <span className="low-stock-indicator">
                                                        {" "} (Stock bajo)
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                <button onClick={() => handleEdit(producto)}>
                                                    <EditIcon />
                                                </button>
                                                <button onClick={() => handleDelete(producto.id)}>
                                                    <DeleteIcon />
                                                </button>
                                                <button onClick={() => handleRestock(producto)}>
                                                    Reponer Stock
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
                        {selectedProduct && (
                            <div className="restock-form">
                                <h2>Reponer Stock</h2>
                                <p>Producto: {selectedProduct.nombre}</p>
                                <p>Stock actual: {selectedProduct.stock}</p>
                                <input
                                    type="number"
                                    placeholder="Nuevo stock"
                                    value={newStock}
                                    onChange={(e) => setNewStock(e.target.value)}
                                />
                                <button onClick={handleRestockSubmit}>Actualizar Stock</button>
                                <button onClick={() => setSelectedProduct(null)}>Cancelar</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventario;
