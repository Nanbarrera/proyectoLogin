import React, { useState } from "react";
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { handleDelete } from './utilidades'; // Reemplaza './utilidades' con la ruta correcta





function Sidebar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([
        { id: 1, code: "123456789", description: "Coca-Cola 500 ML", price: 20.00, quantity: 1 },
        { id: 2, code: "098765432", description: "Chetos", price: 15.00, quantity: 1 }
    ]);

    const handleLogout = () => {
        // Lógica para salir
        window.location.pathname = "/login"; // Redirige al usuario al formulario de inicio de sesión
    }

    const [productQuantitiesCompleted, setProductQuantitiesCompleted] = useState(products.map(() => false));

    const handleQuantityCompleted = (index) => {
        const updatedProductQuantitiesCompleted = [...productQuantitiesCompleted];
        updatedProductQuantitiesCompleted[index] = true;
        setProductQuantitiesCompleted(updatedProductQuantitiesCompleted);
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
                    <div><button className="logoutButton" onClick={handleLogout}>
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
                                    {products.map((product, index) => (
                                        <tr key={product.id}>
                                            <td>{product.code}</td>
                                            <td>{product.description}</td>
                                            <td>${product.price}</td>
                                            <td>
                                                <div className="inputCant">
                                                    <input className="incremento" type="number" min="0" />
                                                </div>
                                            </td>
                                            <td>
                                                <button className="delete-button" onClick={() => handleDelete(product.id)}>
                                                    <i className="fas fa-trash-alt"></i>
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
                                    <div>$35.00</div>
                                </div>
                                <div className="payment-item">
                                    <div>Pago efectivo:</div>
                                    <div>$50.00</div>
                                </div>
                                <div className="payment-item">
                                    <div>Cambio:</div>
                                    <div>$15.00</div>
                                </div>
                            </div>
                            <div className="button-group">
                                <button className="checkout-button">Cobrar</button>
                                <button className="cancel-button">Cancelar</button>
                            </div>
                            <div className="amount-to-pay">
                                <div className="amount-value">$35.00</div>
                                <button className="print-button">Imprimir ticket</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Sidebar;