// import React from 'react';
// import './Ticket.css';
// import logo from './../Assets/logo.png';

// const Ticket = ({ products = [], totalPrice = 0, cashPayment = 0, change = 0 }) => {
//     return (
//         <div className="ticket">
//             <div className="logoPrincipal">
//                 <h3 className="nombreEmpresa">EL TOTO</h3>
//                 <img className="imgLogo" src={logo} alt="logo" />
//             </div>
            
//             <div className="ticket-details">
//                 <div>

//                 </div>
//                 <div className="product-list">
//                     <h3>Productos:</h3>
//                     <ul>
//                         {products.map(product => (
//                             <li key={product.id}>
//                                 {product.description} - ${product.price} x {product.quantity}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="payment-info">
//                     <h3>Información de Pago:</h3>
//                     <p>Total: ${totalPrice.toFixed(2)}</p>
//                     <p>Pago en Efectivo: ${cashPayment}</p>
//                     <p>Cambio: ${change}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Ticket;


// // Ticket.js
// import React from 'react';
// import './Ticket.css';
// import logo from './../Assets/logo.png';

// const Ticket = ({ products = [], totalPrice = 0, cashPayment = 0, change = 0 }) => {
//     return (
//         <div className="ticket">
//             <div className="logoPrincipal">
//                 <h3 className="nombreEmpresa">EL TOTO</h3>
//                 <img className="imgLogo" src={logo} alt="logo" />
//             </div>
            
//             <div className="ticket-details">
//                 <div className="product-list">
//                     <h3>Productos:</h3>
//                     <ul>
//                         {products.map(product => (
//                             <li key={product.id}>
//                                 {product.nombre} - {product.descripcion} - ${product.precio_venta} x {product.quantity}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="payment-info">
//                     <h3>Información de Pago:</h3>
//                     <p>Total: ${totalPrice.toFixed(2)}</p>
//                     <p>Pago en Efectivo: ${parseFloat(cashPayment).toFixed(2)}</p>
//                     <p>Cambio: ${change}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Ticket;
// Ticket.js
import React from 'react';
import './Ticket.css';
import logo from './../Assets/logo.png';

const Ticket = ({ products = [], totalPrice = 0, cashPayment = 0, change = 0, userName = 'userName', saleDate = new Date().toLocaleString() }) => {
    return (
        <div className="ticket">
            <div className="logoPrincipal">
                <h3 className="nombreEmpresa">EL TOTO</h3>
                <img className="imgLogo" src={logo} alt="logo" />
            </div>
            
            <div className="ticket-details">
                <div className="ticket-info">
                    <p><strong>Fecha:</strong> {saleDate}</p>
                    <p><strong>Atendido por:</strong> {userName}</p>
                </div>

                <div className="product-list">
                    <h3>Productos:</h3>
                    <ul>
                        {products.map(product => (
                            <li key={product.id} className="product-item">
                                <span className="product-name">{product.nombre}</span>
                                <span className="product-description">{product.descripcion}</span>
                                <span className="product-quantity">x{product.quantity}</span>
                                <span className="product-price">${(product.precio_venta * product.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="payment-info">
                    <h3>Información de Pago:</h3>
                    <div className="payment-detail">
                        <span className="label">Total:</span>
                        <span className="value">${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="payment-detail">
                        <span className="label">Pago en Efectivo:</span>
                        <span className="value">${parseFloat(cashPayment).toFixed(2)}</span>
                    </div>
                    <div className="payment-detail">
                        <span className="label">Cambio:</span>
                        <span className="value">${change}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
