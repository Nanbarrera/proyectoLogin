import React, { useContext, useState, useEffect } from "react";
import './Sidebar.css';
import './venta.css';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import DeleteIcon from '@mui/icons-material/Delete';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ticket from './Ticket'; // Ajusta la ruta según la ubicación de Ticket.js


function Sidebar() {
    const navigate = useNavigate();
    const { products, deleteProduct, updateProductQuantity } = useContext(ProductContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cashPayment, setCashPayment] = useState("0"); // Inicializar con "0"
    const [change, setChange] = useState(0.00);
    const [showTicket, setShowTicket] = useState(false); // Estado para mostrar el ticket

    const handleLogout = () => {
        navigate("/login");
    }

    const handleNavigation = () => {
        navigate("/busquedaProd");
    }

    const handleDeleteFromCart = (id) => {
        deleteProduct(id);
        updateTotalPrice(products.filter(product => product.id !== id));
    }

    const handleQuantityChange = (id, value) => {
        const quantity = parseInt(value) || 0; // Asegurar que sea un número
        updateProductQuantity(id, quantity);
        updateTotalPrice(products.map(product =>
            product.id === id ? { ...product, quantity } : product
        ));
    }

    const updateTotalPrice = (products) => {
        const total = products.reduce((acc, product) => {
            const quantity = product.quantity || 0;
            const price = parseFloat(product.price) || 0; // Asegurar que el precio sea un número
            return acc + (price * quantity);
        }, 0);
        setTotalPrice(total);
    }

    useEffect(() => {
        updateTotalPrice(products);
    }, [products]);

    useEffect(() => {
        setChange((parseFloat(cashPayment) - totalPrice).toFixed(2)); // Actualizar cambio correctamente
    }, [cashPayment, totalPrice]);

    const handleCashPaymentChange = (e) => {
        const value = e.target.value.trim(); // Eliminar espacios al inicio y al final
        if (value === "") {
            setCashPayment("0"); // Si no hay ningún valor, mostrar "0"
        } else if (/^\d*\.?\d*$/.test(value)) {
            // Validar que el valor ingresado sea numérico con 0 o 1 punto decimal
            setCashPayment(value);
        }
    }
    
    const handleCheckout = () => {
        navigate('/ticket'); // Navegar a la página del ticket al hacer clic en "Cobrar"
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
                                onClick={() => { navigate(val.link); }}
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
                        <h1 className="header">VENTA</h1>
                    </div>
                    <div className="main-content">
                        <div className="search-bar">
                            <label className="nomBusquedaV" htmlFor="search">Nombre del producto:</label>
                            <input className="nmBuscar" type="text" id="search" placeholder="Buscar..." />
                            <button className="search-button" onClick={handleNavigation}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="tabla">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Código del producto</th>
                                        <th>Descripción del producto</th>
                                        <th>Precio de venta</th>
                                        <th>Cantidad</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.code}</td>
                                            <td>{product.description}</td>
                                            <td>${(parseFloat(product.price) * (product.quantity || 0)).toFixed(2)}</td>
                                            <td>
                                                <div className="inputCant">
                                                    <input
                                                        className="incremento"
                                                        style={{ width: "60px", height: "30px" }} // Ajusta el tamaño aquí
                                                        type="number"
                                                        min="0"
                                                        value={product.quantity || 0}
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
                                            style={{ width: "80px", height: "30px" }} // Ajusta el tamaño aquí
                                            value={cashPayment}
                                            onChange={handleCashPaymentChange}
                                        />
                                    </div>
                                </div>
                                <div className="payment-item">
                                    <div>Cambio:</div>
                                    <div>${parseFloat(change).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="button-group">
                                <button className="checkout-buttonV" onClick={handleCheckout}>Cobrar</button>
                                <button className="cancel-buttonV">Cancelar</button>
                            </div>
                            <div className="amount-to-pay">
                                <div className="amount-valueV">${totalPrice.toFixed(2)}</div>
                                <button className="print-buttonV">Imprimir ticket</button>
                            </div>
                        </div>
                    </div>
                    {/* Mostrar el componente Ticket si showTicket es true */}
                    {showTicket && <Ticket products={products} totalPrice={totalPrice} cashPayment={cashPayment} change={change} />}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;





