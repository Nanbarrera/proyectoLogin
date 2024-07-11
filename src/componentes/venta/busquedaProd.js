// import React, { useContext } from "react";
// import './Sidebar.css';
// import './busquedaProd.css';
// import { SidebarData } from './SidebarData';
// import { useNavigate } from 'react-router-dom';
// import { FaCheck } from 'react-icons/fa';
// import { ProductContext } from './ProductContext';

// function BusquedaProd() {
//     const navigate = useNavigate();
//     const { addProduct } = useContext(ProductContext);

//     const handleAction = (item) => {
//         addProduct(item); // Agrega el producto al contexto con cantidad inicial 1
//         navigate("/sidebar");
//     }

//     const data = [
//         {
//             id: 1,
//             code: '001',
//             description: 'Coca-Cola 600 ML',
//             price: 20.00,
//             category: 'Refrescos',
//             expiration: '2025-12-31',
//         },
//         {
//             id: 2,
//             code: '002',
//             description: 'Sabritas Chetos torciditos',
//             price: 18.00,
//             category: 'Sabritas',
//             expiration: '2025-01-31',
//         },
//         // Añadir más datos según sea necesario
//     ];

//     const handleLogout = () => {
//         navigate("/login");
//     }

//     const handleBack = () => {
//         navigate("/sidebar");
//     }

//     return (
//         <div className="principal">
//             <div className="container">
//                 <div className="Sidebar">
//                     <ul className="SidebarList">
//                         {SidebarData.map((val, key) => (
//                             <li
//                                 key={key}
//                                 className="row"
//                                 onClick={() => { navigate(val.link); }}
//                             >
//                                 <div id="icon">{val.icon}</div>
//                                 <div id="title">{val.title}</div>
//                             </li>
//                         ))}
//                     </ul>
//                     <div>
//                         <button className="logoutButton" onClick={handleLogout}>
//                             Salir
//                         </button>
//                     </div>
//                 </div>

//                 <div className="content">
//                     <div className="header-container">
//                         <h1 className="header">BUSQUEDA PRODUCTO</h1>
//                     </div>
//                     <div className="tablaBP">
//                         <table className="tableBP">
//                             <thead>
//                                 <tr>
//                                     <th>Código</th>
//                                     <th>Descripción</th>
//                                     <th>Precio</th>
//                                     <th>Categoría</th>
//                                     <th>Caducidad</th>
//                                     <th>Acción</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((item) => (
//                                     <tr key={item.id}>
//                                         <td>{item.code}</td>
//                                         <td>{item.description}</td>
//                                         <td>${item.price.toFixed(2)}</td>
//                                         <td>{item.category}</td>
//                                         <td>{item.expiration}</td>
//                                         <td>
//                                             <button onClick={() => handleAction(item)}>
//                                                 <FaCheck />
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div className="button-container">
//                             <button className="backButton" onClick={handleBack}>Regresar</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BusquedaProd;









//mio



import React, { useContext, useState, useEffect } from "react";
import './Sidebar.css';
import './busquedaProd.css';
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { ProductContext } from './ProductContext';
import axios from 'axios';

function BusquedaProd() {
    const navigate = useNavigate();
    const { addProduct } = useContext(ProductContext);
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/productos');
            setProductos(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAction = (item) => {
        addProduct(item);
        setSuccessMessage('Producto agregado correctamente');
        setTimeout(() => {
            setSuccessMessage('');
            navigate("/sidebar");
        }, 2000); // Oculta el mensaje después de 2 segundos y navega al sidebar
    }

    const handleLogout = () => {
        navigate("/login");
    }

    const handleBack = () => {
        navigate("/sidebar");
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
                        <h1 className="header">BUSQUEDA PRODUCTO</h1>
                    </div>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="tablaBP">
                        <table className="tableBP">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                    <th>Existencia</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProductos.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>${typeof item.precio_venta === 'number' ? item.precio_venta.toFixed(2) : item.precio_venta}</td>
                                        <td>{item.categoria}</td>
                                        <td>{item.stock}</td>
                                        <td>
                                            <button onClick={() => handleAction(item)}>
                                                <FaCheck />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="button-container">
                            <button className="backButton" onClick={handleBack}>Regresar</button>
                        </div>
                        {successMessage && <div className="success-message">{successMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusquedaProd;
    