import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './producto.css';
import { FaPlus } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PRODUCTOS_URI = 'http://localhost:4000/api/productos';
const CATEGORIAS_URI = 'http://localhost:4000/api/categorias';

const ProductoForm = ({ producto, onSuccess }) => {
    const [nombre, setNombre] = useState(producto ? producto.nombre : '');
    const [descripcion, setDescripcion] = useState(producto ? producto.descripcion : '');
    const [costoCompra, setCostoCompra] = useState(producto ? producto.costo_compra : '');
    const [precioVenta, setPrecioVenta] = useState(producto ? producto.precio_venta : '');
    const [categoria, setCategoria] = useState(producto ? producto.categoria_id : '');
    const [stock, setStock] = useState(producto ? producto.stock : '');
    const [categorias, setCategorias] = useState([]);
    const [newCategoria, setNewCategoria] = useState({ nombre: '', descripcion: '' });
    const [showCategoriaForm, setShowCategoriaForm] = useState(false);
    const categoriaFormRef = useRef(null);

    useEffect(() => {
        fetchCategorias();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoriaFormRef.current && !categoriaFormRef.current.contains(event.target)) {
                setShowCategoriaForm(false);
            }
        };

        if (showCategoriaForm) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCategoriaForm]);

    const fetchCategorias = async () => {
        try {
            const response = await axios.get(CATEGORIAS_URI);
            setCategorias(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleAgregarCategoria = async () => {
        try {
            await axios.post(CATEGORIAS_URI, newCategoria);
            toast.success('Categoría agregada correctamente');
            setNewCategoria({ nombre: '', descripcion: '' });
            setShowCategoriaForm(false);
            fetchCategorias();
        } catch (error) {
            console.error('Error al agregar la categoría:', error);
            toast.error('Error al agregar la categoría');
        }
    };

    const handleStockChange = (e) => {
        const value = e.target.value;
        setStock(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (stock < 50 || stock > 150) {
            toast.error('El stock debe ser entre 50 y 150 productos.');
            return;
        }

        try {
            const response = producto
                ? await axios.put(`${PRODUCTOS_URI}/${producto.id}`, {
                    nombre,
                    descripcion,
                    costo_compra: costoCompra,
                    precio_venta: precioVenta,
                    categoria_id: categoria,
                    stock
                })
                : await axios.post(PRODUCTOS_URI, {
                    nombre,
                    descripcion,
                    costo_compra: costoCompra,
                    precio_venta: precioVenta,
                    categoria_id: categoria,
                    stock
                });
            console.log('Producto guardado:', response.data);
            toast.success(producto ? 'Producto editado correctamente' : 'Producto agregado correctamente');
            onSuccess(); // Llamar a la función onSuccess para manejar el éxito de la acción
        } catch (error) {
            console.error('Error saving product:', error);
            toast.error(producto ? 'Error al editar el producto' : 'Error al agregar el producto');
        }
    };

    return (
        <div className="producto-form-container">
            <ToastContainer />
            <form className="form-container" onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                </div>
                <div className="flex-container">
                    <div className="flex-item-left">
                        <label>Stock:</label>
                        <input 
                            type="number" 
                            min={1} 
                            value={stock} 
                            onChange={handleStockChange} 
                            required 
                        />
                    </div>
                    
                    <div className="flex-item-right">
                        <label>Costo de compra:</label>
                        <input 
                            type="number" 
                            min={0} 
                            value={costoCompra} 
                            onChange={(e) => setCostoCompra(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="flex-item-center">
                        <label>Precio de venta:</label>
                        <input 
                            type="number" 
                            min={0} 
                            value={precioVenta} 
                            onChange={(e) => setPrecioVenta(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className="categoria-container">
                    <label>Categoría:</label>
                    <div className="categoria-select-container">
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                            <option value="">Seleccione una categoría</option>
                            {categorias.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                            ))}
                        </select>
                        <FaPlus 
                            className="add-icon"
                            onClick={() => setShowCategoriaForm(!showCategoriaForm)}
                        />
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit">{producto ? 'Editar Producto' : 'Agregar Producto'}</button>
                </div>
            </form>
            {showCategoriaForm && (
                <div className="categoria-form-overlay">
                    <div className="categoria-form" ref={categoriaFormRef}>
                        <h3>Nueva Categoría</h3>
                        <div>
                            <label>Nombre:</label>
                            <input
                                type="text"
                                value={newCategoria.nombre}
                                onChange={(e) => setNewCategoria({ ...newCategoria, nombre: e.target.value })}
                                required
                            />
                        </div>
                        <button className="agregar-button" onClick={handleAgregarCategoria}>Crear</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductoForm;
