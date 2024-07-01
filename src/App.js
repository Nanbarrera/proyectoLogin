// src/App.js
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './componentes/venta/ProductContext';
import { AuthProvider } from './context/AuthContext'; // Importa el AuthProvider
import AppRoutes from './routes/AppRoutes';

const App = () => {
    return (
        <AuthProvider> {/* Envuelve tu aplicación con AuthProvider */}
            <ProductProvider> {/* Envuelve tus rutas con ProductProvider */}
                <Router>
                    <AppRoutes />
                </Router>
            </ProductProvider>
        </AuthProvider>
    );
};

export default App;


