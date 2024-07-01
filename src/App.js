import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './componentes/venta/ProductContext'; // Importa el ProductProvider
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <ProductProvider> {/* Envuelve tus rutas con ProductProvider */}
                <AppRoutes />
        </ProductProvider>
    );
};

export default App;
