//componentes/venta/sidebar.js
import React, { useContext, useState, useEffect } from "react";
import './Sidebar.css';
import './venta.css';
import { SidebarData } from './SidebarData';
<<<<<<< HEAD
import { useNavigate, Link } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import DeleteIcon from '@mui/icons-material/Delete';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ticket from './../ventaTicket/Ticket';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ls from 'local-storage';
import logo from './../Assets/logo.png';
=======
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext'; // Asegúrate de que la ruta sea correcta
import DeleteIcon from '@mui/icons-material/Delete';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ticket from './../ventaTicket/Ticket';
import axios from 'axios'; // Importa axios
import ls from 'local-storage'

>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2

function Sidebar() {
    const navigate = useNavigate();
    const { products, deleteProduct, updateProductQuantity, clearProducts, addProduct } = useContext(ProductContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cashPayment, setCashPayment] = useState("");
    const [change, setChange] = useState("0.00");
    const [showTicket, setShowTicket] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Fetch all products when component mounts
        const fetchAllProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/productos');
                setAllProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchAllProducts();
    }, []);

    useEffect(() => {
        // Filter products based on search term
        if (searchTerm.length > 0) {
            const filteredProducts = allProducts.filter(product =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredProducts);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm, allProducts]);

    const handleLogout = () => {
<<<<<<< HEAD
        ls.remove("isAuth");
        navigate("/login");
    };

    const isAuth = ls.get("isAuth");
    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);
=======
        ls.remove("isAuth")
        navigate("/login");
    };

    const isAuth = ls.get("isAuth")
    useEffect(()=>{
        if(!isAuth){
            navigate("/")
        }
    })
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2

    const handleDeleteFromCart = (id) => {
        const confirmed = window.confirm("¿Estás seguro de eliminar el producto?");
        if (confirmed) {
            deleteProduct(id);
            updateTotalPrice(products.filter(product => product.id !== id));
            toast.success("Producto eliminado correctamente.");
        }
    };

    const handleQuantityChange = (id, value) => {
        const quantity = Math.max(parseInt(value, 10) || 1, 1); // Ensure quantity is at least 1
        updateProductQuantity(id, quantity);
        updateTotalPrice(products.map(product =>
            product.id === id ? { ...product, quantity } : product
        ));
    };

    const updateTotalPrice = (products) => {
        const total = products.reduce((acc, product) => {
            const quantity = product.quantity || 0;
            const price = parseFloat(product.precio_venta) || 0;
            return acc + (price * quantity);
        }, 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        updateTotalPrice(products);
    }, [products]);

    useEffect(() => {
        const numericCashPayment = parseFloat(cashPayment) || 0;
        const computedChange = Math.max(0, numericCashPayment - totalPrice);
        setChange(computedChange.toFixed(2));
    }, [cashPayment, totalPrice]);

    const handleCashPaymentChange = (e) => {
        const value = e.target.value;
        if (value === "") {
            setCashPayment("");
        } else if (/^\d*\.?\d*$/.test(value)) {
            setCashPayment(value);
        }
    };

    const handleCheckout = async () => {
        if (products.length === 0) {
            toast.error("Aún no tienes productos seleccionados.");
        } else if (cashPayment === "") {
            toast.error("Te falta poner el pago en efectivo.");
        } else if (parseFloat(cashPayment) < totalPrice) {
            toast.error("El pago en efectivo es menor al total. Por favor, ingresa una cantidad suficiente.");
        } else {
            try {
                const turnoId = 1; // ID del turno actual (debe obtenerse dinámicamente)
                const fechaVenta = new Date().toISOString();

                for (const product of products) {
                    await axios.post('http://localhost:4000/api/ventas', {
                        producto_id: product.id,  // Asegúrate de que estos campos existen y no son nulos
                        cantidad: product.quantity || 1,
                        total: totalPrice,
                        fecha_venta: fechaVenta,
                        id_turno: turnoId,
                    });

                    // Mostrar advertencia si el stock está bajo
                    if (product.stock <= product.stock_minimo) {
                        toast.warning(`El producto "${product.nombre}" está casi agotado.`);
                    }
                }

                setShowTicket(true);
                toast.success("Productos cobrados con éxito.");
            } catch (error) {
                console.error('Error durante el checkout:', error);
                toast.error("Hubo un error al procesar el checkout. Inténtalo nuevamente.");
            }
        }
    };

    const handleCancel = () => {
        if (typeof clearProducts === 'function') {
            clearProducts();
            setCashPayment("");
            setChange("0.00");
            setShowTicket(false);
            toast.info("Compra cancelada.");
        } else {
            console.error('clearProducts no es una función');
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSelect = (product) => {
        if (product.stock < 1) {
            toast.error(`El producto "${product.nombre}" está agotado.`);
        } else {
            addProduct({ ...product, quantity: 1 });
            setSearchTerm("");
            setSuggestions([]);
        }
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            const product = suggestions.find(
                product => product.nombre.toLowerCase() === searchTerm.toLowerCase()
            );
            if (product) {
                handleSearchSelect(product);
            }
        }
    };

    return (
        <div className="principal">
            <ToastContainer />
            <div className="container">
                <div className="Sidebar">
                <ul className="SidebarList">
                        {SidebarData.map((val, key) => (
<<<<<<< HEAD
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
=======
                            <li
                                key={key}
                                className="row"
                                onClick={() => { navigate(val.link); }}
                            >
                                <Link to={val.link} >
                                    <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </Link>
                                
                            </li>
>>>>>>> 0cc0112c17699cfa9ea2db479c8b02f2423aefc2
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
                        <h1 className="header">VENTA</h1>
                    </div>
                    <div className="main-content">
                        <div className="search-bar">
                            <label className="nomBusquedaV" htmlFor="search">Nombre del producto:</label>
                            <input
                                className="nmBuscar"
                                type="text"
                                id="search"
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                onKeyDown={handleSearchKeyDown}
                            />
                            <button className="ticket-sales-button" onClick={handleDeleteFromCart}>
                                Ventas por ticket
                            </button>
                            {suggestions.length > 0 && (
                                <ul className="autocomplete-list">
                                    {suggestions.map((product) => (
                                        <li
                                            key={product.id}
                                            onClick={() => handleSearchSelect(product)}
                                            className="autocomplete-item"
                                        >
                                            {product.nombre} {product.descripcion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="tabla">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Nombre del producto</th>
                                        <th>Descripción del producto</th>
                                        <th>Precio de venta</th>
                                        <th>Cantidad</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.nombre}</td>
                                            <td>{product.descripcion}</td>
                                            <td>${(parseFloat(product.precio_venta) * (product.quantity || 1)).toFixed(2)}</td>
                                            <td>
                                                <div className="inputCant">
                                                    <input
                                                        className="incremento"
                                                        style={{ width: "60px", height: "30px" }}
                                                        type="number"
                                                        min="1"
                                                        value={product.quantity || 1}
                                                        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="delete-buttonV" onClick={() => handleDeleteFromCart(product.id)}>
                                                    <DeleteIcon />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="total-section">
                            <div className="payment-details">
                                <div className="payment-item">
                                    <div>Total:</div>
                                    <div>${totalPrice.toFixed(2)}</div>
                                </div>
                                <div className="payment-item">
                                    <div>Pago efectivo:</div>
                                    <div>
                                        <input className="pagoEfec"
                                            type="text"
                                            style={{ width: "80px", height: "30px" }}
                                            value={cashPayment}
                                            onChange={handleCashPaymentChange}
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                                <div className="payment-item">
                                    <div>Cambio:</div>
                                    <div>${change}</div>
                                </div>
                            </div>
                            <div className="button-group">
                                <button className="checkout-buttonV" onClick={handleCheckout}>Cobrar</button>
                                <button className="cancel-buttonV" onClick={handleCancel}>Cancelar</button>
                            </div>
                            <div className="amount-to-pay">
                                <div className="amount-valueV">${totalPrice.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    {showTicket && <Ticket products={products} totalPrice={totalPrice} cashPayment={cashPayment} change={change} />}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
