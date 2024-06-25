import React from 'react';
import './Ticket.css';
import logo from './../Assets/logo.png';

const Ticket = ({ products = [], totalPrice = 0, cashPayment = 0, change = 0 }) => {
    return (
        <div className="ticket">
            <div className="logoPrincipal">
                <h3 className="nombreEmpresa">EL TOTO</h3>
                <img className="imgLogo" src={logo} alt="logo" />
            </div>
            
            <div className="ticket-details">
                <div>

                </div>
                <div className="product-list">
                    <h3>Productos:</h3>
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                {product.description} - ${product.price} x {product.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="payment-info">
                    <h3>Información de Pago:</h3>
                    <p>Total: ${totalPrice.toFixed(2)}</p>
                    <p>Pago en Efectivo: ${cashPayment}</p>
                    <p>Cambio: ${change}</p>
                </div>
            </div>
        </div>
    );
}

export default Ticket;


