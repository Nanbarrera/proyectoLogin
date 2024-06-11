import React from "react";
import './Sidebar.css';
import { SidebarData } from './SidebarData';



function Sidebar() {
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
                <div><button className="logoutButton" onClick={() => { /* Logica para salir */ }}>
                    Salir
                </button></div>
            </div>
            
            <div className="content">
                <div className="header-container">
                    <h1 className="header">Venta</h1>
                </div>
                <div className="main-content">
                    <div className="search-bar">
                        <label htmlFor="search">Nombre del producto:</label>
                        <input type="text" id="search" name="search" placeholder="Buscar..." />
                        <button className="search-button"><i className="fas fa-search"></i></button>
                        <button className="add-button">Agregar</button>
                    </div>
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
                            <tr>
                                <td>123456789</td>
                                <td>Coca-Cola 500 ML</td>
                                <td>$20.00</td>
                                <td>1</td>
                                <td><i className="fas fa-trash-alt"></i></td>
                            </tr>
                            <tr>
                                <td>098765432</td>
                                <td>Chetos</td>
                                <td>$15.00</td>
                                <td>1</td>
                                <td><i className="fas fa-trash-alt"></i></td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="total-section">
                        <div className="payment-details">
                            <div className="payment-item">Total: </div>
                            <div className="payment-item">Pago efectivo: </div>
                            <div className="payment-item">Cambio: </div>
                        </div>
                        <div className="button-group">
                            <button className="cancel-button">Cancelar</button>
                            <button className="checkout-button">Cobrar</button>
                        </div>
                        <div className="amount-to-pay">
                            <div className="amount-value">$35.00</div>
                        </div>
                        <button className="print-button">Imprimir ticket</button>
                    </div>
                    </div>
               

            </div>
        </div>
        </div>
    );
}

export default Sidebar;

